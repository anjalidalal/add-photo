import React, { useState } from "react";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import SearchIcon from "@mui/icons-material/Search";

const AddPhoto = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const data = useSelector((state) => state.data);
  console.log(data);

  return (
    <>
      <Modal open={openModal} close={setOpenModal} />
      <div
        id={styles.main}
        className="flex flex-col items-center justify-center z-0"
      >
        <div className="w-full flex items-center gap-2 justify-between my-5">
          <div className={styles.searchBar}>
            <SearchIcon color="disabled" fontSize="small" />
            <input type="text" placeholder="Search modules"></input>
          </div>
          <button
            className={styles.addPhoto}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Add Photo
          </button>
        </div>
        <div className="grid my-7 justify-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((el) => (
            <div
              className="w-72 h-96"
              key={el.id}
              onMouseOver={() => setIsHover(true)}
            >
              {isHover ? <button className={styles.delete}>Delete</button> : ""}
              <img
                src={el.image}
                className="w-full h-full rounded-3xl"
                alt=""
              />
              {isHover ? <p className={styles.label}>{el.label}</p> : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddPhoto;
