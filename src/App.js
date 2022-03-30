import React, { Component } from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";

class App extends Component {

  constructor(props){

    super(props);
    
    this.state = {
      users: [
        {
          id: 1,
          name: "Mustafa",
          email: "mustafa@mustafa.com"
        },
        {
          id: 2,
          name: "mistik",
          email: "mistik@mustafa.com"
        }
      ]

    };

    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser){
    let updatedUsers = this.state.users;

    updatedUsers.push(newUser);

    this.setState({
      users: updatedUsers
    })
  }

  deleteUser(id){
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    this.setState({
      users: updatedUsers
    })
  }

 render() {
  return (
    <div className='container'>
      <h4>User App</h4>
      <hr/>
      <AddUser addUser = {this.addUser} />
      <hr/>
      <Users deleteUser = {this.deleteUser} users = {this.state.users} />
    </div>
  );
 }
}

export default App;
