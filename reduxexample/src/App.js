import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js'
import Posts from "./components/Post.js"
import PostForm from "./components/Postform.js"


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <PostForm />
          <hr />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
