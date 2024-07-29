import axios from "axios";

const httpService = axios.create();

httpService.defaults.withCredentials = true;

export default httpService;
