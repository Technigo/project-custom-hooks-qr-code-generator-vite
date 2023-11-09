import useSWR from "swr";
import { ApiRes } from "src/types/common";

let query: string = "qrcode";

const API_KEY = import.meta.env.VITE_ANY_KEY;
const gifsUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const fetcher = async (url: string) => {
  return await fetch(url).then((res) => res.json());
};

export const useGifs = (): ApiRes<{ data: Array<any> }> => {
  const { data, error, isLoading } = useSWR(`/get/gifs/`, () => fetcher(gifsUrl));

  return { data, error, isLoading };
};
