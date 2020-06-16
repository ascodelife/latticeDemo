import { message } from "antd";

export const successMsg = (mesage) => {
  message.success(mesage);
};

export const errorMsg = (mesage) => {
  message.error(mesage);
};

export const warningMsg = (mesage) => {
  message.warning(mesage);
};
