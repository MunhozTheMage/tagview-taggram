import superagent from 'superagent';

const baseURL = "https://taggram.herokuapp.com";

export const loggedUser = getMe().then((res) => res.body);
export const currentPost = getPost().then((res) => res.body);

function getMe() {
    return superagent.get(`${baseURL}/me`);
}

function getPost() {
    return superagent.get(`${baseURL}/post`)
}

export async function postComment(message, isStable = true) {
    // DEBUG ONLY
    const stable = isStable ? "?stable=true" : "";

    const { uuid } = await currentPost;
    const { username } = await loggedUser;

    return superagent
        .post(`${baseURL}/posts/${uuid}/comments${stable}`)
        .send({ username, message })
        .set('Accept', 'application/json');
}