import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCAML1P9lX9K_Kun0g6eC8_7bP41zIo9b8",
    authDomain: "bloc-chat-79261.firebaseapp.com",
    databaseURL: "https://bloc-chat-79261.firebaseio.com",
    projectId: "bloc-chat-79261",
    storageBucket: "bloc-chat-79261.appspot.com",
    messagingSenderId: "990242543396"
  };
  firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>Bloc Chat</h1>
      <RoomList name={this.props.name}/>
      </div>
    );
  }
}

export default App;
