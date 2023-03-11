export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const backendUrl = "https://delicate-night-324.fly.dev";
