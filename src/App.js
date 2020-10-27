import './main.css';

import { loggedUser, currentPost, postComment } from './API/taggram.js';
import Header from './Components/Header/header.js';
import Post from './Components/Post/post.js';
import Footer from './Components/Footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
