import React, { useState, useEffect, useRef } from 'react';

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
    const [ interactivity, setInteractivity ] = useState(false);

    const commentsBottom = useRef(null);

    // When the promisse is fulfilled, update the state with the
    // acquired info.
    async function showPostInfoWhenReady() {
        currentPost
        .then((post) => {
            const { photo, user, location, comments, created_at } = post;
            setPostData({ photo, user, location, comments, created_at });
            setInteractivity(true);
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

    // Handle error state changes.
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

    // Triggered on "Enviar" button click.
    function handleSendComment() {
        setInteractivity(false);
        postComment(commentMessage, false)
        .then((res) => {
            if(!postData.created_at) return;

            setInteractivity(true);
            setCommentMessage("");

            let newPostData = { ...postData };
            newPostData.comments = res.body;

            setPostData(newPostData);
            commentsBottom.current.scrollIntoView({ behavior: 'smooth' });
        })
        .catch((err) => {
            setInteractivity(true);
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

    // Post Image JSX Element.
    const postImage = (
        postData.photo ?
        <img className="post-image" src={postData.photo}></img>
        :
        <div className="post-image empty"></div>
    );

    // Post Owner Information JSX Element.
    const postOwner = (
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
    );

    // Post Information JSX Element.
    const postInfo = (
        <div className="comments-details">
            <strong>{`${postData.comments.length} comentários`}</strong>
            <p>{getTextDate()}</p>
        </div>
    );

    // Comment Publication JSX Element.
    const commentPublication = (
        <div className="new-comment-area">
            <textarea
                value={commentMessage}
                className={interactivity ? "" : "disabled"}
                onChange={ interactivity ? (e) => { setCommentMessage(e.target.value) } : () => {} }
                placeholder="Comente sobre essa postagem..."
            ></textarea>

            <button
                className={interactivity ? "" : "disabled"}
                onClick={ interactivity ? handleSendComment : () => {} }
            >{ interactivity ? "Enviar" : "Aguarde" }</button>
        </div>
    );

    // Error Display JSX Element.
    const errorDisplay = (
        <div className="new-comment-area error">
            <p>{ !hasError.critical ?
                "Não foi possível enviar seu comentário"
                : 
                "Ocorreu um erro ao tentar se conectar ao servidor"
            }</p>
        </div>
    );

    return (
        <div className="taggram-post">
            <div className="post-area">
                { postImage }
                <div className="post-details">
                    { postOwner }
                    <div className="comments-area">
                        { renderComments() }
                        <div ref={commentsBottom}></div>
                    </div>
                    <div className="above-comments">
                        { postInfo }
                        { !hasError.status ?
                            commentPublication
                            : 
                            errorDisplay
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}