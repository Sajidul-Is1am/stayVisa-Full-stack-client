/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";

const Calander = ({value}) => {
  return <DateRange ranges={[value]} />;
};

export default Calander;
