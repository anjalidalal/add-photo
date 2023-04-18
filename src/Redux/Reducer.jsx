import { nanoid } from "nanoid";
import { GET_USER } from "./ActionType";

const initState = {
  user: null,
  data: [
    {
      label: "Morbi consequat lectus non orci maximus",
      image:
        "https://images.pexels.com/photos/11255396/pexels-photo-11255396.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: nanoid(),
    },
    {
      label: "Wheat Fields",
      image:
        "https://images.pexels.com/photos/8605011/pexels-photo-8605011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: nanoid(),
    },
    {
      label: "Strawberries",
      image:
        "https://images.pexels.com/photos/1600139/pexels-photo-1600139.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: nanoid(),
    },
    {
      label: "Mini Bus Photography",
      image:
        "https://images.pexels.com/photos/4609255/pexels-photo-4609255.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: nanoid(),
    },
    {
      label: "Office",
      image:
        "https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: nanoid(),
    },
    {
      label: "Temple",
      image:
        "https://images.pexels.com/photos/337901/pexels-photo-337901.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: nanoid(),
    },
  ],
};

export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
