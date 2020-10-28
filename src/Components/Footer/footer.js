import React from 'react';

import "./footer.css";

import pathAdapter from "../../pathMode.js";

export default function Footer() {

    return (
        <div className="taggram-footer">
            <img src={pathAdapter("images/tagview.svg")}></img>
        </div>
    )
}