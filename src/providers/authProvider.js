import { securityApi } from "../providers/api";

export const authProvider = {
  getWhoAmi: async () => {
    return securityApi().getWhoAmi().then((response) => response.data);
  }
};