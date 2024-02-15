import { SecurityApi, UsersApi } from "../gen/client";
import { getCachedConfiguration } from "./utils";

export const securityApi = () => new SecurityApi(getCachedConfiguration());
export const usersApi = () => new UsersApi(getCachedConfiguration());
