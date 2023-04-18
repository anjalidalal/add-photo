import React from "react";
import styles from "./App.module.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between my-5">
      <div className={styles.searchBar}>
        <SearchIcon color="disabled" fontSize="small" />
        <input type="text" placeholder="Search modules"></input>
      </div>
      <button className={styles.addPhoto}>Add Photo</button>
    </div>
  );
};

export default Header;
