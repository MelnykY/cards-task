//https://6442a6db76540ce225921e9e.mockapi.io/users/:endpoint
import axios from "axios";

axios.defaults.baseURL = "https://6442a6db76540ce225921e9e.mockapi.io";
const BASE_URL = "https://6442a6db76540ce225921e9e.mockapi.io/users";

export const getUsers = async () => {
  const data = await axios.get(`${BASE_URL}/users`);
  return data;
};

