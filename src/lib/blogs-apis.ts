import { CHAT_BACKEND_URL } from "@/constants/api";
import axios from "axios";

export const axiosBase = axios.create({
  baseURL: CHAT_BACKEND_URL,
});

const getAllBlogs = async (): Promise<Blogs[]> => {
  try {
    const response = await axiosBase.get(`/blog/get`);
    return response.data as Blogs[];
  } catch (e: unknown) {
    console.log("Error in fetching blogs", e);
    return [];
  }
};

const getBlogById = async (id: string): Promise<Blogs | undefined> => {
  try {
    const response = await axiosBase.get(`/blog/get/${id}`);
    return response.data as Blogs;
  } catch (e: unknown) {
    console.log("Error in fetching blog", e);
    return;
  }
};

export { getAllBlogs, getBlogById };
