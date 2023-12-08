import { useLoaderData, useSearchParams } from "react-router-dom";
import Catagoris from "../../components/Rooms/Catagoris/Catagoris";
import Rooms from "../../components/Rooms/Rooms";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <div>
      <Container>
        <Catagoris></Catagoris>
        <Rooms></Rooms>
      </Container>
    </div>
  );
};

export default Home;
