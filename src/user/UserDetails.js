import React from "react";

const UserDetails = (props) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
        <td>Status</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.contact}</td>
            <td>{user.status}</td>
            <td>
              <button
                className="button btn btn-primary"
                onClick={() => {
                  props.editUser(user);
                }}
              >
                Edit
              </button>
              &nbsp;
              <button
                className="button btn btn-danger"
                onClick={() => {
                  props.deleteUser(user.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No Users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserDetails;
