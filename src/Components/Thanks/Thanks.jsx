import React from "react";
import "./Thanks.css";
import img from "../../img/thankyou.svg";

export default function Thanks() {
  return (
    <div className="Thanks">
      <div className="thanksContent">
        <img src={img} alt="thank you" />
        <h1>thank you!</h1>
        <p>
          thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
