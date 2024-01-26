import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./ZimmerResevations.component.css";
import { Card } from "react-bootstrap";
import { ArrowReturnRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const ZimmerResevations = () => {
  const [resevation, setResevation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetching = async () => {
      await fetch("http://localhost:5000/resevation/zimmerResevations")
        .then((Response) => Response.json())
        .then((data) => {
          setResevation(data.resevations);
          // dispatch(addresevation(myresevation));
        });
    };
    fetching();
  }, []);

  const BackToMainPage = () => {
    navigate("/mainpage");
  };

  return (
    <div>
      <div className="button-container">
        <button type="button" className="btn btn-info" onClick={BackToMainPage}>
          <ArrowReturnRight />
          Back
        </button>
      </div>

      <div className="resevation-container">
        {resevation.map((item) => {
          return (
            <div key={item._id} className="clientRes-container">
              <Card>
                <Card.Header>
                  <h6>{item.zimmerName}</h6>
                </Card.Header>
                {item.zimmerUnitResevation.map((resv) => {
                  return (
                    <Card.Body>
                      <h6>Client Name: {resv.clientName}</h6>
                      <h6>Zimmer Price: {resv.zimmerPrice}</h6>
                      <h6>Zimmer Duration: {resv.duration}</h6>
                      <h6>Start Day: {resv.startDate}</h6>
                      <h6>End Day: {resv.endDate}</h6>
                    </Card.Body>
                  );
                })}
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZimmerResevations;
