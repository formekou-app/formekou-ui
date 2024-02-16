import { FormsApi, SecurityApi, UsersApi } from "../gen/client";
import { getCachedConfiguration } from "./utils";

export const securityApi = () => new SecurityApi(getCachedConfiguration());
export const formsApi = () => new FormsApi(getCachedConfiguration());
export const usersApi = () => new UsersApi(getCachedConfiguration());
