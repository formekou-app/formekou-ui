import { SecurityApi } from "../gen/client";
import { getCachedConfiguration } from "../security/utils";

export const securityApi = new SecurityApi(getCachedConfiguration());
