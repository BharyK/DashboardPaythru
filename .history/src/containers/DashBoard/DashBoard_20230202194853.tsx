import Button from "../../components/Button/Button";
import Calendar from "../../components/Calendar/Calendar";
import UserForm from '../../components/UserForm/UserForm'


const DashBoard = () => {
  return (
    <div>
      Dashboard
      <div>Button Style </div>
      <Button label="Button" />
      <UserForm  />
      <Calendar/>
    </div>
  );
};

export default DashBoard;
