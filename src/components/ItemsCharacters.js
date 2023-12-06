import React from "react";
import { Col } from "react-bootstrap";

export const ItemsCharacters = ({title, description, imgUrl }) => {
  return (
    <Col size={12} sm={12} md={12}>
    <div className="proj-imgbx__">
      <img src={imgUrl} alt={title}/>
      <div className="proj-txtx">
        <span>{description}</span>
      </div>
    </div>
  </Col>
  )
}
