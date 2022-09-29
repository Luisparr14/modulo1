import axios from "axios";

axios.defaults.baseURL =
  "http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api";

axios.defaults.timeout = 120000;

export default axios;
