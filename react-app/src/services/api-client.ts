import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "70dcf9f79453479ea4197c0a8d7bb3ed",
  },
});
