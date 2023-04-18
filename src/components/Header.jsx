import React, { useState } from "react";
import styles from "./App.module.css";
import Modal from "./Modal";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-full flex items-center gap-2 justify-between my-5">
        <div className={styles.searchBar}>
          <SearchIcon color="disabled" fontSize="small" />
          <input type="text" placeholder="Search modules"></input>
        </div>
        <button className={styles.addPhoto} onClick={() => setOpenModal(true)}>
          Add Photo
        </button>
      </div>
      <Modal open={openModal} close={setOpenModal} />
    </>
  );
};

export default Header;
