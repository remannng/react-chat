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
  this.handleChange = this.handleChange.bind(this);
  this.createRoom = this.createRoom.bind(this);
}

handleChange(e) {
  this.setState({name: e.target.value});
}

handleSubmit(e) {
  e.preventDefault();
  this.createRoom(this.state.name);
}

createRoom(newRoomName) {
  this.roomsRef.push({name: newRoomName});
  this.setState({name: '' });
}

selectRoom(room) {
  this.props.activeRoom(room);
}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({rooms: this.state.rooms.concat(room)})
  });
}

render() {
  const newRoom = (
    <form onSubmit={this.createRoom}>
      <input type="text" value={this.state.name} placeholder="Enter Room Name" onChange={this.handleChange} />
      <input type="submit" value="Create" />
    </form>
  );

  const roomList = this.state.rooms.map((room) =>
    <li key={room.key} onClick={(e) => this.selectRoom(room, e)}>{room.name}</li>
  );

  return(
    <div>
      <div>{newRoom}</div>
      <ul>{roomList}</ul>
    </div>
  );
}
}

export default RoomList;
