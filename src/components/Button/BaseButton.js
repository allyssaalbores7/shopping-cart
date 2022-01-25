import React from "react";
import { Button } from "antd";

import "./index.css";

function BaseButton(props) {
  const { icon, size, title, type } = props;

  return (
    <Button type={type} icon={icon} size={size}>
      {title}
    </Button>
  );
}

export default BaseButton;
