import './main.css';

import { loggedUser, currentPost, postComment } from './API/taggram.js';
import Header from './Components/Header/header.js';
import Post from './Components/Post/post.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Post />
    </div>
  );
}

export default App;
