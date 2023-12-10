import { atom } from "recoil";
import { TRocket } from "../types";

export const favoriteListState = atom<TRocket[]>({
  key: "FavoriteList",
  default: [],
});
