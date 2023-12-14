import axios from "axios";

const backendUrl = process.env.REACT_APP_BASE_URL;
console.log(backendUrl, "hello world");

export const register = async (userData) => {
  try {
    console.log(userData);
    const response = await axios({
      method: "post",
      url: `${backendUrl}/api/users/register`,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", response.data.token);
    return response.data.message;
    console.log(response);
  } catch (err) {
    return err;
  }
};

export const login = async (userData) => {
  console.log(userData);
  try {
    console.log(userData);
    const response = await axios({
      method: "get",
      url: `${backendUrl}/api/users/login`,
      params: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", response.data.token);
    console.log(response);
    return response.data.message;
  } catch (err) {
    return err;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
