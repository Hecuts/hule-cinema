import { atom } from "recoil";

export const modalState = atom({ key: "modalState", default: false });

export const MovieState = atom({
	key: "movieState",
	default: null,
});
