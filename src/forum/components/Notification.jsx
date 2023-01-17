import React from "react";

const Notification = () => {
  const notificationStyles = {
    width: "90%",
    minHeight: "50px",
    margin: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderBottom: "1px solid lightgray",
    cursor: "pointer",
  };

  return (
    <div className="notification-container" style={notificationStyles}>
      <i class="bi bi-bell"></i>
      <span>
        <b>yaman</b> followed you
      </span>
    </div>
  );
};

export default Notification;
