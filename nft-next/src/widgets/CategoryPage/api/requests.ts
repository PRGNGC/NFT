import axios from "axios";

async function getCategoryNfts(category: string, limit?: number) {
  const response = await axios.get(
    `http://localhost:8000/${category}?_limit=${limit}`
  );
  return response.data;
}

export { getCategoryNfts };
