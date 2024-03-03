import React from "react";
import Avatar from "./Avatar";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-sm p-5 "
        style={{ width: "400px", height: "600px" }}
      >
        <div className="text-center">
          <Avatar
            src="https://i.pravatar.cc/300"
            alt="avatar"
            width={150}
            height={150}
          />
        </div>
        <h3 className="card-title text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="usernameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
          </div>
          <div className="d-flex flex-column gap-2 ">
            <button type="submit" className="btn btn-success mt-3">
              Login
            </button>
            <button type="submit" className="btn btn-primary mt-3 ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
