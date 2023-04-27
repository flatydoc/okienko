import base from "./base.service";

const getAll = () => {
  return base.get("/images/getAll");
};

export const ImagesService = {
  getAll,
};
