export const postApi = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      method: "POST",
      headers,
    };
    const response = await fetch("http://localhost:3000/api/order", body);
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};
