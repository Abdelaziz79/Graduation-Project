import React from "react";

export default function UpdateUserInfo() {
  return (
    <div className=" p-3 rounded form-style">
      <h3 className="mb-4">Update user data</h3>
      <form>
        <div className="d-flex flex-column gap-3 w-75">
          <div className="d-flex  gap-3  ">
            <label className=" form-label w-25" htmlFor="Email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control w-75"
              required
              placeholder="email"
            />
          </div>
          <div className="d-flex  gap-3 ">
            <label className=" form-label w-25" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control w-75"
              required
              placeholder="name"
            />
          </div>
          <div className="d-flex  gap-3 ">
            <label className=" form-label w-25" htmlFor="avatar">
              Avatar
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="form-control w-75"
              required
            />
          </div>
        </div>
        <div className="d-flex gap-3 mt-3 justify-content-end">
          <button className="btn btn-primary ">Update</button>
          <button className="btn border ">cancel</button>
        </div>
      </form>
    </div>
  );
}
