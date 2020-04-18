import React, {useState} from "react";
import './Popup.scss';
import './EmailPopupContent.scss';

const EmailPopupContent = (props) => {

  const [emailAddress, setEmailAddress]= useState();

  return (
    <div className="email-container">
      <span>Enter email address</span>
      <input type="text" onChange={(e) => setEmailAddress(e.target.value)}/>
      <div className="submit">
        <button onClick={() => props.submit(emailAddress)}>Next</button>
      </div>
    </div>
  )
}

export default EmailPopupContent;
