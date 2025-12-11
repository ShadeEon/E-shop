import axio from "axios";

const api = axio.create({
  baseURL: "https://picsum.photos/v2",
  timeout: 10000,
});

export const fetchBanners = async () => {
  const res = await api.get("/list?page=2&limit=10");
  return res.data;
};
