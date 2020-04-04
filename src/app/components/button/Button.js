import React from "react";
import { Button } from "antd";
import "./Button.less";

const ButtonComponent = (props) => {
  const { shape, type, loading, ...others } = props;
  return (
    <Button shape={shape} type={type} {...others} className="button">
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
