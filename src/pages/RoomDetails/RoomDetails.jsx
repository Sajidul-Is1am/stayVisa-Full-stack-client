import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";
import RoomInfo from "./RoomInfo";
import RoomRegervation from "./RoomRegervation/RoomRegervation";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/shakilahmedatik/stayVista-starter-template/main/client/public/rooms.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const roomDetail = data.find((room) => room?._id === id);
        setRoom(roomDetail);
      });
  }, [id]);
  return (
    <div>
      <Container>
        <Helmet>
          <title>{room.title}</title>
        </Helmet>
        <div className="max-w-screen-lg mx-auto">
          {/* header */}
          <div>
            <Header room={room}></Header>
          </div>
          {/* room info */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 mt-14 justify-between">
            <div className="col-span-4">
              <RoomInfo room={room} />
            </div>
            <div className="col-span-3 order-first md:order-last ">
              {/* room regervation */}
              <RoomRegervation room={room}></RoomRegervation>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoomDetails;
