import { create } from "zustand";

const userInformationStore = create((set) => ({
  userInformation: [],

  captureUserInformation: (userInfo) => {
    set({ userInformation: userInfo });
  },
}));

export default userInformationStore;
