import React from "react";
import { Button } from "antd";
import user from "../user.png";
import swal from "@sweetalert/with-react";

function Profile(props) {
  function handleName() {
    swal(
      <div>
        <p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <img  style={{
              borderRadius: "50%",boxShadow:"0px 15px 29px -8px rgba(0,0,0,0.75)" }} src={user} alt="user-image"></img>
            </div>
            <h3 style={{
              marginTop: "20px" }}>Full name : {props.fullName}</h3>
            <h3>Profession : {props.profession}</h3>
            <p style={{
              textAlign: "justify"}}>Bio : {props.bio} </p>
          </div>
        </p>
        .
      </div>
    );
  }
  return (
    <div>
      <h1>React Props checkpoint</h1>
      <div>
        <Button
          style={{
            width: "20vw",
            backgroundColor: "#fce762",
            borderRadius: "50px",
            color: "#201335",
            border: "none ",
            cursor: "pointer",
          }}
          type="primary"
          block
          onClick={handleName}
        >
          Click to show profile user
        </Button>
      </div>
    </div>
  );
}

export default Profile;
