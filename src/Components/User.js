import React, { Component } from "react";

class User extends Component {

    onDeleteClick(id, event){
        const {deleteUser} = this.props;
        console.log("id:",id);
        deleteUser(id);
    }
    render(){
        const {id,name,email} = this.props;
        return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this, id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default User;