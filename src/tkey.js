import ThresholdKey from "@tkey/default";
import WebStorageModule from "@tkey/web-storage";
import SecurityQuestionsModule from "@tkey/security-questions";
import TorusServiceProvider from "@tkey/service-provider-torus";

// Configuration of Service Provider
const customAuthArgs = {
  baseUrl: `${window.location.origin}`,
  network: "cyan", // based on the verifier network.
};
const serviceProvider = new TorusServiceProvider({ customAuthArgs });

// Configuration of Modules
const webStorageModule = new WebStorageModule();
const securityQuestionsModule = new SecurityQuestionsModule();

// Instantiation of tKey
export const tKey = new ThresholdKey({
  serviceProvider: serviceProvider,
  modules: {
    webStorage: webStorageModule,
    securityQuestions: securityQuestionsModule,
  },
  customAuthArgs,
});