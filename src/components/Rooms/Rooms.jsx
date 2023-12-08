import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import { getAllRooms } from "../../api/Room";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const catagory = params.get("catagory");

  useEffect(() => {
    getAllRooms()
      .then((data) => {
        if (catagory) {
          const filterd = data.filter((room) => room?.category === catagory);
          setRooms(filterd);
        } else {
          setRooms(data);
        }
      });
  }, [catagory]);

  return (
    <div>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {rooms.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-335px)]">
          <Heading
            title={"No Room Avilable In This Catagory"}
            subtitle={"Select Other Catagroy"}
            center={true}
          />
        </div>
      )}
    </div>
  );
};

export default Rooms;
