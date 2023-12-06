import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";

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
  console.log(room);
  return (
    <div>
      <Container>
        <Helmet>
          <title>{room.title}</title>
        </Helmet>
              <div className="">
                  <div className="">
                      {/* headier */}
                  </div>
                  <div>
                      {/* Room Info */}
                  </div>
        </div>
      </Container>
    </div>
  );
};

export default RoomDetails;
