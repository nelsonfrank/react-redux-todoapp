import React, { useState } from "react";
import { Card, Checkbox } from "antd";
import "./Card.css";

const StyledCard = (props) => {
  const { title, date, remainingTime } = props;
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    setSelected(!selected);
  };

  return (
    <Card
      size="small"
      className={`card ${selected ? "card--selected" : null}`}
      onClick={handleCheck}
    >
      <Checkbox checked={checked}></Checkbox>
      <div className="card__content">
        <div className="card__title">
          <h3 className="card__title--name">{title}</h3>

          <p className="card__title--remaingtime">{remainingTime}</p>
        </div>
        <div className="card__date">
          <p>{date}</p>
        </div>
      </div>
    </Card>
  );
};

export default StyledCard;
