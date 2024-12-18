import { CHAT_BACKEND_URL } from "@/constants/api";
import axios from "axios";

export const axiosBase = axios.create({
  baseURL: CHAT_BACKEND_URL,
});

const newsLetter = async (email: string): Promise<NewsLetter> => {
  try {
    const response = await axiosBase.post(`/user/create`, { email });
    return response.data as NewsLetter;
  } catch (e: unknown) {
    console.log("Error in fetching newsletter", e);
    return {} as NewsLetter;
  }
};

export { newsLetter };
