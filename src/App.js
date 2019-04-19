import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import * as firebase from 'firebase';


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
constructor(props){
  super(props)

  this.state = {
    activeRoom: "",
    user: "",
  };
}

setUser(user) {
  this.setState({user: user});
}

activeRoom(room) {
  this.setState({activeRoom: room});
}

render() {
  const displayMessages = this.state.activeRoom;

    return (
      <div className="App">
        <h1>Bloc Chat</h1>
        <RoomList firebase={firebase} activeRoom={this.activeRoom.bind(this)}/>
        {displayMessages ?(<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} />): (null)}
      </div>
      );
    }
  }

export default App;
