import { loggedUser, currentPost, postComment } from './API/taggram.js';

function App() {
  return (
    <div className="App">
      <button onClick={async () => console.log(await loggedUser)}>This User</button>
      <button onClick={async () => console.log(await currentPost)}>This Post</button>
      <button onClick={async () => console.log(await postComment("This is a test, hello world!"))}>Create Post</button>
    </div>
  );
}

export default App;
