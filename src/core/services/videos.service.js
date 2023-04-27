import base from "./base.service";

const getAll = () => {
  return base.get("/videos/getAll");
};

export const VideosService = {
  getAll,
};
