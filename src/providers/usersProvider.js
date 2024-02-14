import { usersApi } from "./api"

export const usersProvider = {
  updateProfile: async (user) => {
    return usersApi()
      .updateProfile(user)
      .then(response => response.data);
  }
}