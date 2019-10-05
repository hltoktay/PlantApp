import axios from "axios";
import { SIGN_IN, SIGN_UP } from "../reducers/types";

export function signUp() {
  return {
    type: SIGN_UP,
    payload: {
      email: "test@gmail.com",
      token: "asdasdads"
    }
  };
}

export function signIn() {
  return {
    type: SIGN_IN,
    payload: {
      email: "test@gmail.com",
      token: "asdasdads"
    }
  };
}
