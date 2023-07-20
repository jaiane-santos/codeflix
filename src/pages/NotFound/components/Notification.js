import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>Você ja Digitou essa Letra</p>
    </div>
  );
};

export default Notification;
