import React, {useState} from 'react';
import './App.css';
import './EmailPopupContent/Popup.scss';
import Items from "./Items/Items";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import Popup from 'reactjs-popup';
import EmailPopupContent from "./EmailPopupContent/EmailPopupContent";
import axios from 'axios';


const App = () => {

  const [showPopup, setShowPopup] = useState(true);
  const [invoiceId, setInvoiceId] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const closeConfirmationPopup = () => setShowPopup(false);

  const submit = (emailAddress) => {
    let response = axios.get(`http://localhost:8080/grocerymart/${emailAddress}/invoice`)
      .then(res => {
        response = res.data;
        setInvoiceId(response.id);
        setInvoiceDate(response.date);
        setUser(response.user);
        setCompany(response.company);
        setCartItems(response.orderLineItems);
        setTotalPrice(response.totalPrice);
        setShowPopup(false);
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <div>
      <Popup className="email-popup"
             closeOnDocumentClick={false}
             onClose={() => closeConfirmationPopup()}
             position="top center"
             open={showPopup}>
        <EmailPopupContent submit={submit}/>
      </Popup>
      {!showPopup && <div className="invoice-container">
        <InvoiceHeader invoiceId={invoiceId} invoiceDate={invoiceDate}/>
        <ProfileDetails company={company} user={user}/>
        <Items cartItems={cartItems} totalPrice={totalPrice}/>
      </div>}
    </div>
  );
}

export default App;
