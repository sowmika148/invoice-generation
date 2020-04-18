import React from "react";
import './InvoiceHeader.css';

const InvoiceHeader = (props) => {
  const invoiceDate = new Date(props.invoiceDate);
  const month = invoiceDate.toLocaleString('default', { 'month': 'long' });
  const date = invoiceDate.getDate();
  const year = invoiceDate.getFullYear();

  return (
    <div className="invoice-header-container">
      <div className="company-name">
        <h1>GroceryMart</h1>
      </div>
      <div className="invoice-details">
        <div>Invoice #: {props.invoiceId}</div>
        <div>Date: {month} {date}, {year}</div>
      </div>
    </div>
  );
}

export default InvoiceHeader;
