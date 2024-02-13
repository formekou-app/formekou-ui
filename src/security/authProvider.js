import { securityApi } from "../providers/api";

const authProvider = {
  getWhoAmi: async () => {
    return securityApi.getWhoAmi().then((response) => response.data);
  },
  signup: async (data) => {
    return securityApi.signup(data).then((response) => response.data);
  },
};

export default authProvider;
