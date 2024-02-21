import React from "react";
import AddPost from "../ui/AddPost";
import "./styles/user.css";
import styled from "styled-components";
const H1 = styled.h1`
  margin-bottom:25px ;`
const H3 = styled.h3`
  margin-bottom: 15px;
`
export default function UserPage() {
  return (
    <div>
      <H1>update your account</H1>
      <H3>update user data</H3>
      <form>
        <div className="email">
        <label for="email">Email Address</label>
        <input id="email" type="email" placeholder="ahmed@email.com" />
        </div>
        <div className="fullname">
        <label for="fullname">Full name</label>
        <input type="text" id="fullname" name="fullname" placeholder="AHMED" />
        </div>
        <div className="file">
        <label className="avatar" for="avatar">Avatar image</label>
        <button className="choose">choose file</button>
        <p className="no">no file choosen</p>
        </div>
        <button className="cancel">cancel</button>
        <button className="update">update account</button>
      </form>
        <H3 for="password">Update password</H3>
      <form>
        <div className="password">
        <label for="confirmpassword">password (min 8 character)</label>
        <input type="password" id="password" name="password" minlength="8" />
        </div>
        <div className="confirmpassword">
        <label for="confirmpassword">Confirm password</label>
        <input type="password" id="password" name="password" minlength="8" />
        </div>
        <button className="cancel">cancel</button>
        <button className="update">update password</button>
      </form>
      <AddPost />
    </div>
  );
}
