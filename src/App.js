import React, { useEffect } from "react";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { getUser } from "./Redux/Action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        getUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          photo: user.photoURL,
          phoneNumber: user.phoneNumber,
        })
      );
    });
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
