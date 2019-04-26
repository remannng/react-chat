import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import './App.css';
import User from './components/User';
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

  this.state = {activeRoom: "",
  user: null
};
this.setUser = this.setUser.bind(this);
this.activeRoom = this.activeRoom.bind(this);
}

setUser(user) {
  this.setState({user: user});
}

activeRoom(room) {
  this.setState({activeRoom: room});
}

render() {
   const showMessage = this.state.activeRoom;
   const currentUser = this.state.user === null ? "Guest" : this.state.user.displayName;

   return (
     <div>
       <h1>{this.state.activeRoom.title || "Select A Room"}</h1>
       <User firebase={firebase} setUser={this.setUser} welcome={currentUser} />
       <RoomList firebase={firebase} activeRoom={this.activeRoom} />
       { showMessage ?
         <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} user={currentUser} />
       : null
       }
     </div>
   );
 }
}

export default App;
