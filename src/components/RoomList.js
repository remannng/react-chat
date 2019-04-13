import React, { Component } from 'react';
import * as firebase from 'firebase';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     rooms: [],
     name: ''
  };
  this.roomsRef = firebase.database().ref('rooms');
}

createRoom(newRoomName) {
  this.roomsRef.push({
    name: newRoomName
  });
  this.setState({name: '' });
}

handleChange(e) {
  this.setState({name: e.target.value});
}

handleSubmit(e) {
  e.preventDefault();
  this.createRoom(this.state.name);
}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) })
  });
}

render() {
  return (
    <div className="room-list">
      {this.state.rooms.map( room =>
        <li key={room.key} >
         {room.name}
        </li>
      )}
     <form onSubmit={ e => {this.handleSubmit(e)}}>
      <input type="text" value={this.state.name} onChange={e => {this.handleChange(e)}} />
      <input type="submit" value="Submit" />
     </form>
    </div>
  )
 }
}

export default RoomList;
