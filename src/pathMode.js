import React from 'react';
import isDev from 'react-is-dev';

const inDevMode = isDev(React);

export default function pathAdapter(path) {
    let newPath = inDevMode ? '/tagview-taggram/' : './';
    newPath += path;
    return newPath;
}
