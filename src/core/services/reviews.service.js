import base from "./base.service";

const getAll = () => {
  return base.get("/reviews/getAll");
};

export const ReviewsService = {
  getAll,
};
