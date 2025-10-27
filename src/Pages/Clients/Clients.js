import React from "react";
import "./Clients.scss";
// Import local client logos
import client1Logo from "../../assests/images/coducer_logo.png";
import client2Logo from "../../assests/images/findicus_logo.png";
import client3Logo from "../../assests/images/proppify_logo.png";
import client4Logo from "../../assests/images/vigno_inc_logo.png";
import client5Logo from "../../assests/images/pitchiton_logo.png";

const Clients = () => {
  return (
    <div className="slider border-bottom border-top">
      <div className="slide-track">
        <div className="slide">
          <img src={client1Logo} height="100" width="250" alt="Client 1" />
        </div>
        <div className="slide">
          <img src={client2Logo} height="100" width="250" alt="Client 2" />
        </div>
        <div className="slide">
          <img src={client3Logo} height="100" width="250" alt="Client 3" />
        </div>
        <div className="slide">
          <img src={client4Logo} height="100" width="250" alt="Client 4" />
        </div>
        <div className="slide">
          <img src={client5Logo} height="250" width="250" alt="Client 5" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
