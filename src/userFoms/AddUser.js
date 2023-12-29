import React, { useState } from "react";

const AddUser = (props) => {
  const initialState = {
    id: "",
    name: "",
    email: "",
    contact: "",
    status: "Active",
  };
  const [user, setUser] = useState(initialState);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form
        className="needs-validation"
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.email) return;
          props.addUser(user);
          setUser(initialState);
        }}
      >
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Name"
          className="form-control"
          onChange={inputChange}
          required
        ></input>
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          className="form-control"
          onChange={inputChange}
          required
        ></input>
        <label htmlFor="Contact">Contact:</label>
        <input
          type="number"
          name="contact"
          value={user.contact}
          placeholder="Contact"
          className="form-control"
          onChange={inputChange}
          required
        ></input>
        <label htmlFor="Status">Status:</label>
        <div className="form-check">
          <label className="form-check-label">
            <input
              type="radio"
              className="form-check-input"
              onChange={inputChange}
              name="status"
              value="Active"
              checked
            />
            Active
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className="form-check-label">
            <input
              type="radio"
              className="form-check-input"
              onChange={inputChange}
              name="status"
              value="Inactive"
            />
            Inactive
          </label>
        </div>
        <br />
        <button className="btn btn-primary">Add User</button>&nbsp;
        <button
          className="btn btn-secondary"
          onClick={() => props.setAdd(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddUser;
