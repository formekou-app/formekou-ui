import { usersApi } from "./api"

export const usersProvider = {
  updateProfile: async (user) => {
    console.log("user", user);
    return usersApi()
      .updateProfile(user)
      .then(response => response.data);
  }
}