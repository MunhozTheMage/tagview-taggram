// Libraries
import React, { useState, useEffect } from 'react';

// Styles
import "./header.css";

// JS Files
import { loggedUser } from '../../API/taggram.js';

export default function Header() {
    // Initializes the page without the user info.
    const [ userData, setUserData ] = useState({ username: "", avatar: "" });

    // When the promisse is fulfilled, update the state with the
    // acquired info.
    async function showUserInfoWhenReady() {
        loggedUser
        .then((user) => {
            const { username, avatar } = user;
            setUserData({ username, avatar });
        })
        .catch(() => {});
    }

    // Calls the showUserInfoWhenReady function once when the page
    // loads.
    useEffect(() => {
        showUserInfoWhenReady();
    }, []);

    return (
        <header className="taggram-header">
            <div className="content-container">
                <img className="logo" alt="logo" src="/images/logo.svg"></img>
                <div className="logged-user">
                    <p>{userData.username}</p>
                    { userData.avatar ?
                    <img className="avatar" src={userData.avatar}></img>
                    :
                    <div className="avatar empty"></div>
                    }
                </div>
            </div>
        </header>
    )
}