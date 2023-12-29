import React, { Fragment, useState } from "react";
import UserDetails from "./user/UserDetails";
import AddUser from "./userFoms/AddUser";
import EditUser from "./userFoms/EditUser";

function App() {
  const userData = [
    {
      id: 1001,
      name: "Prasad",
      email: "prasad@hynia.com",
      contact: 7013402422,
      status: "Active",
    },
    {
      id: 1002,
      name: "Manju",
      email: "manju@hynia.com",
      contact: 9550961801,
      status: "Inactive",
    },
    {
      id: 1003,
      name: "Aadhya",
      email: "aadhya@hynia.com",
      contact: 9703655633,
      status: "Active",
    },
  ];

  const formState = {
    id: null,
    name: "",
    email: "",
    contact: "",
    status: "",
  };

  //Setting Data
  const [users, setUsers] = useState(userData);
  const [add, setAdd] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(formState);

  const adding = () => {
    setAdd(true);
  };

  //Curd Operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setAdd(false);
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      contact: user.contact,
      status: user.status,
    });
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id != id));
    alert("User Deleted Successfully");
  };

  return (
    <div className="container">
      &nbsp;
      {/* Add Button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="btn btn-primary"
          onClick={() => {
            adding();
          }}
        >
          Add User
        </button>
      </div>
      {/* Edit Form */}
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <center>
                <h4>Edit User</h4>
              </center>
              <EditUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            " "
          )}
        </div>
      </div>
      {/* Add Form */}
      <div className="flex-row">
        <div className="flex-large">
          {add ? (
            <Fragment>
              <center>
                <h4>Add User</h4>
              </center>
              <AddUser addUser={addUser} setAdd={setAdd} />
            </Fragment>
          ) : (
            " "
          )}
        </div>
      </div>
      {/* User Details */}
      <div>
        <div>
          <h4>User Details</h4>
        </div>
        <UserDetails
          users={users}
          editUser={editUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
}

export default App;
