export const postApi = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      method: "POST",
      headers,
    };
    const response = await fetch("http://54.242.13.166:3000/api/order", body);
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};
