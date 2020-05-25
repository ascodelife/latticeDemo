import Cookie from "js-cookie";
import { SET_CURRENT_STEP } from "../constants/controllerConstants";

const setCurrentStep = (current) => (dispath) => {
  dispath({ type: SET_CURRENT_STEP, payload: current });
  Cookie.set("current", JSON.stringify(current));
};

export { setCurrentStep };
