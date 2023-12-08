import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";
import RoomInfo from "./RoomInfo";
import RoomRegervation from "./RoomRegervation/RoomRegervation";
import { getSingleRoom } from "../../api/Room";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {


  const room = useLoaderData();
  console.log(room);


  return (
    <div>
      <Container>
        <Helmet>
          <title>{room?.title}</title>
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
