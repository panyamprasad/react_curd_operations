import React, { useState } from "react";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);
  let checked = user.status === "Active" ? true : false;
  let unchecked = user.status === "Inactive" ? true : false;

  const inputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={inputChange}
        className="form-control"
        placeholder="Name"
        required
      ></input>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={inputChange}
        className="form-control"
        placeholder="Email"
        required
      ></input>
      <label>Contact</label>
      <input
        type="number"
        name="contact"
        value={user.contact}
        onChange={inputChange}
        className="form-control"
        placeholder="Contact"
        required
      ></input>
      <br />
      <label>Status</label>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            className="form-check-input"
            name="status"
            value="Active"
            onChange={inputChange}
            checked={checked}
          />
          Active
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label className="form-check-label">
          <input
            type="radio"
            className="form-check-input"
            name="status"
            value="Inactive"
            onChange={inputChange}
            checked={unchecked}
          />
          Inactive
        </label>
      </div>
      <br />
      <button className="button btn btn-primary">Update User</button>&nbsp;
      <button
        className="button btn btn-secondary"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
