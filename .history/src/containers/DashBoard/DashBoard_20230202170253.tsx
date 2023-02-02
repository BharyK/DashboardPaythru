import { useState } from "react";
import Button from "../../components/Button/Button";

const DashBoard = () => {
    const [counter, setCouter] = useState (5)
  return (
    <div>
      Dashboard
      <div>Button Style </div>
      <Button label="Button" counter = {counter} />
    </div>
  );
};

export default DashBoard;
