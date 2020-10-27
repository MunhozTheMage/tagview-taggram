import React, { useState, useEffect } from 'react';

import './post.css';

import { currentPost, postComment } from '../../API/taggram.js';
import Comment from './comment.js';

export default function Post() {
    const [ postData, setPostData ] = useState({ 
        photo: "", 
        user: {}, 
        location: {}, 
        comments: [],
        created_at: ""
    });
    const [ commentMessage, setCommentMessage ] = useState("");
    const [ hasError, setHasError ] = useState({
        status: false,
        critical: false,
    });

    // When the promisse is fulfilled, update the state with the
    // acquired info.
    async function showPostInfoWhenReady() {
        currentPost
        .then((post) => {
            const { photo, user, location, comments, created_at } = post;
            setPostData({ photo, user, location, comments, created_at });
        })
        .catch((err) => {
            setHasError({ status: true, critical: true });
        });
    }

    // Calls the showUserInfoWhenReady function once when the page
    // loads.
    useEffect(() => {
        showPostInfoWhenReady();
    }, []);

    useEffect(() => {
        if(!hasError.status) return;

        if(!hasError.critical) {
            setTimeout(() => {
                setHasError({ status: false, critical: false });
            }, 3000);
        }
    }, [ hasError ]);

    // Returns an array of JSX elements for each of the comments on
    // this post.
    function renderComments() {
        return postData.comments.map((comment, id) => {
            return (
                <Comment 
                    image={comment.user.avatar}
                    name={comment.user.username}
                    text={comment.message}
                    time={comment.created_at}
                    key={`comment_id_${id}`}
                />
            )
        });
    }

    function handleSendComment() {
        postComment(commentMessage, false)
        .then((res) => {
            if(!postData.created_at) return;

            let newPostData = { ...postData };
            newPostData.comments = res.body;

            setPostData(newPostData);
        })
        .catch((err) => {
            setHasError({ status: true, critical: false });
        });
    }

    // Returns the date in DAY OF MONTH format as a string.
    function getTextDate() {
        if(!postData.created_at) return "";

        let date = new Date(postData.created_at);
        let day = date.getDate();

        const names = [
            "JANEIRO", "FEVEREIRO", "MARÇO",
            "ABRIL", "MAIO", "JUNHO",
            "JULHO", "AGOSTO", "SETEMBRO", 
            "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ];

        let month = names[date.getMonth()];

        return `${day} DE ${month}`;
    }

    return (
        <div className="taggram-post">
            <div className="post-area">
                { postData.photo ?
                    <img className="post-image" src={postData.photo}></img>
                    :
                    <div className="post-image empty"></div>
                }
                <div className="post-details">
                    <div className="post-owner-info">
                        { postData.user.avatar ? 
                            <img src={postData.user.avatar}></img>
                            : 
                            <div className="empty"></div>
                        }
                        <div className="info-area">
                        { postData.user.username ? 
                            <p className="name">{postData.user.username}</p>
                        : null }
                        { postData.location.city && postData.location.country ? 
                            <p className="location">{`${postData.location.city}, ${postData.location.country}`}</p>
                        : null }
                        </div>
                    </div>
                    <div className="comments-area">
                        { renderComments() }
                    </div>
                    <div className="above-comments">
                        <div className="comments-details">
                            <strong>{`${postData.comments.length} comentários`}</strong>
                            <p>{getTextDate()}</p>
                        </div>
                        { !hasError.status ?
                            <div className="new-comment-area">
                            <textarea
                                value={commentMessage}
                                onChange={(e) => { setCommentMessage(e.target.value) }}
                                placeholder="Comente sobre essa postagem..."
                            ></textarea>
                            <button
                                onClick={handleSendComment}
                            >Enviar</button>
                            </div>
                            : 
                            <div className="new-comment-area error">
                                <p>{ !hasError.critical ?
                                "Não foi possível enviar seu comentário"
                                : 
                                "Ocorreu um erro ao tentar se conectar ao servidor"
                                }</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}