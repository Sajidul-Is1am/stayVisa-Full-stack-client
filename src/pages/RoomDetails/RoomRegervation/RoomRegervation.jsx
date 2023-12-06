/* eslint-disable react/prop-types */

import { differenceInDays } from "date-fns";
import Button from "../../../components/Button/Button";
import Calander from "../Calander/Calander";
import { useState } from "react";

const RoomRegervation = ({ room }) => {
  // price calculation

  // let totalDays = parseInt(
  //     formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
  // )
  // let totalPrice = room?.price * totalDays
  // console.log(totalPrice);

  const fromDate = new Date(room?.to);
  const toDate = new Date(room?.from);
  const totalDays = differenceInDays(fromDate, toDate);
    const totalPrice = room?.price * totalDays;
  
//   const [vvlue, setValue] = useState({
//     startDate: new Date(room?.from),
//     endDate: new Date(room?.to),
//     key: "selection",
//   });

  return (
    <div className="rounded border border-neutral-300 bg-white">
      <div className="font-semibold text-3xl p-4">
        $ {room?.price} <span className="font-light">Night</span>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calander ></Calander>
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Regervation"}></Button>
      </div>
      <hr />
      <div className="flex items-center justify-between p-4 font-semibold text-xl">
        <div>Total :</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomRegervation;
