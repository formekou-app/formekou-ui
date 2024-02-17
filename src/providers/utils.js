import { Configuration } from "../gen/client";
import authFirebase from "../security/authFirebase";

export function getCachedConfiguration() {
  const configuration = new Configuration();
  configuration.accessToken = authFirebase.getCachedCredential();
  return configuration;
}
