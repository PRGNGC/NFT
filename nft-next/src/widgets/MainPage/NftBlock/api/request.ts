import axios from "axios";

async function getAllNft() {
  const response = await axios.get("http://localhost:8000/nft");
  return response.data;
}

export { getAllNft };
