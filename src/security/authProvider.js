/*eslint-disable*/

import axios from "axios";
import { authFirebase } from "./authFirebase";

const API_URL = process.env.API_URL;

//TODO: generate api client
export async function getWhoAmi() {
  return axios
    .get(`${API_URL}/whoami`, {
      headers: {
        Authorization: `Bearer ${authFirebase.getCachedCredential()}`,
      },
    })
    .then((response) => response.data);
}

export async function postSignup(data) {
  return axios
    .post(`${API_URL}/signup`, data)
    .then((response) => response.data);
}
