import { CHAT_BACKEND_URL } from "@/constants/api";
import axios from "axios";

export const axiosBase = axios.create({
  baseURL: CHAT_BACKEND_URL,
});

export const getAllInflucnecers = async (): Promise<TInfluencer[]> => {
  try {
    const response = await axiosBase.get(`/influencer/get`);

    return response.data as TInfluencer[];
  } catch (e) {
    console.log("Error fetching influencers", e);

    return [];
  }
};

export const getInfluencerByID = async (
  id: string
): Promise<TInfluencer | null> => {
  try {
    const response = await axiosBase.get(`/influencer/get/${id}`);

    return response.data as TInfluencer | null;
  } catch (e: unknown) {
    console.log("Error fetching influencer by ID", e);

    return null;
  }
};

export const chatWithInfluencerByID = async ({
  id,
  message,
}: {
  id: string;
  message: string;
}): Promise<string> => {
  try {
    const response = await axiosBase.post(`/influencer/chat/${id}`, {
      message,
    });

    if (response.status !== 200) {
      return "Something went wrong, please try again later.";
    }

    return response.data as string;
  } catch (e: unknown) {
    console.log("Error chatting with influencer by ID", e);

    return "Something went wrong, please try again later.";
  }
};
