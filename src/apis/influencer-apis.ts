import axios from "axios";
import { BACKEND_URL } from "../utils/constants";

export const axiosBase = axios.create({
  baseURL: BACKEND_URL,
});

export type TInfluencer = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  prompt: string;
};

const getInfluencerByID = async (id: string): Promise<TInfluencer | null> => {
  try {
    const response = await axiosBase.get(`/influencers/get/${id}`);

    return response.data as TInfluencer | null;
  } catch (e: unknown) {
    return null;
  }
};

const chatWithInfluencerByID = async ({
  id,
  message,
}: {
  id: string;
  message: string;
}): Promise<string> => {
  try {
    const response = await axiosBase.post(`/influencers/chat/${id}`, {
      message,
    });

    if (response.status !== 200) {
      return "Something went wrong, please try again later.";
    }

    return response.data as string;
  } catch (e: unknown) {
    return "Something went wrong, please try again later.";
  }
};
