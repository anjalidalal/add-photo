import React from "react";
import Auth from "./Auth";
import AddPhoto from "./AddPhoto";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  return <>{user ? <AddPhoto /> : <Auth />}</>;
};
export default Home;
