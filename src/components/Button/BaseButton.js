import React from "react";
import { Button } from "antd";

import "./index.css";

function BaseButton(props) {
  const { icon, size, title, type, onClick } = props;

  return (
    <Button type={type} icon={icon} size={size} onClick={onClick}>
      {title}
    </Button>
  );
}

export default BaseButton;
