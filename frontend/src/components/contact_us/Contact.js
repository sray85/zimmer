import React from "react";
import "./ContactUs.css";

const Contact = ({ activePage }) => {
  return (
    <div className="contact">
      <h4>
        Email : <a href="mailto:benavnilov@gmail.com">benavnilov@gmail.com</a>
      </h4>
      <h4>
        Email : <a href="mailto:y.s.aldin@gmail.com">y.s.aldin@gmail.com</a>
      </h4>

      <h4>
        Phone : <a href="tel:+972507744439">+972507744439</a>
      </h4>
      <h4>
        Phone : <a href="tel:+972525327377">+972525327377</a>
      </h4>
    </div>
  );
};

export default Contact;
