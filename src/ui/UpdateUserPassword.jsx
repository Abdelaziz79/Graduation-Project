import React from "react";
import Background from "./Background";

export default function UpdateUserPassword() {
  return (
    <div className="mt-3">
      <Background>
        <h3>Update user password</h3>
        <form>
          <div className="d-flex flex-column gap-3 w-75">
            <div className="d-flex flex-column gap-3 ">
              <div className="d-flex  gap-3 ">
                <label className=" form-label w-25" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control w-75"
                  required
                  placeholder="password"
                />
              </div>
              <div className="d-flex  gap-3  ">
                <label className=" form-label w-25" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  className="form-control w-75"
                  required
                  placeholder="confirm password"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end gap-3">
            <button className="btn btn-primary mt-3">Update</button>
            <button className="btn border mt-3">Cancel</button>
          </div>
        </form>
      </Background>
    </div>
  );
}
