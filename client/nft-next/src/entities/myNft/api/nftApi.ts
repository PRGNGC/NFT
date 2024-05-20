"use client";

import type { ICharacterNft, IPlanetNft, IItemNft, IBundleNft } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

// const accessToken = useSelector((state: RootState) => state.login.accessToken);

export async function getNfts(
  { pageParam }: { pageParam: number },
  category: string,
  search?: string
) {
  const url: string = search
    ? `http://localhost:4000/api/own/${category}?nextSearchIndex=${pageParam}&search=${search}`
    : `http://localhost:4000/api/own/${category}?page=${pageParam}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
}
