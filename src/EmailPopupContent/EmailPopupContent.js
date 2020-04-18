import React, {useState} from "react";
import './Popup.scss';
import './EmailPopupContent.scss';
import TextField from "@material-ui/core/TextField";

const EmailPopupContent = (props) => {

  const [emailAddress, setEmailAddress]= useState();

  return (
    <div className="email-container">
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      {/*<input type="text" onChange={(e) => setEmailAddress(e.target.value)}/>*/}
      <div className="submit">
        <button onClick={() => props.submit(emailAddress)}>Next</button>
      </div>
    </div>
  )
}

export default EmailPopupContent;
