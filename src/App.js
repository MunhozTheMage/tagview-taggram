import './main.css';

import { loggedUser, currentPost, postComment } from './API/taggram.js';
import Header from './Components/Header/header.js';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
