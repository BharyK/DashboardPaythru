import React from "react";

import { DatePicker } from "react-responsive-datepicker";
import "react-responsive-datepicker/dist/index.css";

const Calendar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open
      </button>
      <DatePicker
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultValue={new Date()}
        minDate={new Date(1992, 10, 10)}
        //maxDate={new Date(2023, 0, 10)}
        headerFormat="DD, MM dd"
        onChange={(data) => console.log(data)}
      />
    </div>
  );
};

export default Calendar;
