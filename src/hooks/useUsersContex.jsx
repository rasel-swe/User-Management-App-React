import { useContext } from "react";
import { UsersContext } from "../Context/UsersContex";

export const useUserContext = () => {
  return useContext(UsersContext);
};
