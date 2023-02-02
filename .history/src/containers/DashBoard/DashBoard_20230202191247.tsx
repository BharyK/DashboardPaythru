import Button from "../../components/Button/Button";
import UserForm from '../../components/UserForm/UserForm'

const DashBoard = () => {
  return (
    <div>
      Dashboard
      <div>Button Style </div>
      <Button label="Button" />
      <UserForm firstName = "icicBank" />
    </div>
  );
};

export default DashBoard;
