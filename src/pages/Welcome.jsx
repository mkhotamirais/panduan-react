import { Link } from "react-router-dom";
import { Button, H2 } from "../components/Tags";

const Welcome = () => {
  return (
    <div>
      <H2>welcome</H2>
      <p>Nama Saya khotami, saya menulis catatan belajar reactjs di website ini</p>
      <Link to="home" className="my-5 inline-block">
        <Button className={"w-auto"}>Start Explore</Button>
      </Link>
    </div>
  );
};

export default Welcome;
