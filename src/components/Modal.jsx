import React, { useState } from "react";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addData } from "../Redux/Action";
import { nanoid } from "nanoid";

const Modal = ({ open, close }) => {
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const handleAddData = () => {
    dispatch(
      addData({
        label: label,
        image: image,
        id: nanoid(),
      })
    );
    close(false);
  };

  if (!open) return null;
  return (
    <div className={styles.modal}>
      <h1 className="text-2xl text-heading font-medium leading-8">
        Add a new photo
      </h1>
      <div className="flex flex-col my-2">
        <p className="font-sm text-label leading-5 font-medium mb-1">Label</p>
        <input
          type="text"
          placeholder="Enter Label"
          onChange={(e) => setLabel(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className="flex flex-col my-2">
        <p className="font-sm text-label leading-5 font-medium mb-1">
          Photo Url
        </p>
        <input
          type="url"
          placeholder="Enter Photo Url"
          onChange={(e) => setImage(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className="flex gap-3 flex-row-reverse my-3">
        <button
          className="bg-btn rounded-lg p-2 text-white font-bold text-base"
          onClick={handleAddData}
        >
          Submit
        </button>
        <button
          onClick={() => close(false)}
          className="bg-slate rounded-lg p-2 text-input font-bold text-base"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
