import axios from "axios";

const baseURL = process.env.NEXT_API_URL;

export async function postToAPI(body: any, url: string) {
  try {
    const res = await axios.post(`${baseURL}${url}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error: any) {
    throw error;
  }
}
