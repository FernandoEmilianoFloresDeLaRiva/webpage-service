import { postApi } from "../api/post.api";
export const postProduct = async () => {
  try {
    const res = await postApi();
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw new Error(err.message);
  }
};
