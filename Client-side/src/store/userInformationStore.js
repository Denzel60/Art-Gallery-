import { create } from "zustand";

const userInformationStore = create((set) => ({
  userInformation: {},

  captureUserInformation: (userInfo) => {
    set(() => {
      return { userInformation: userInfo };
    });
  },
}));

export default userInformationStore;

// userInformationStore.js

// const useUserInformationStore = create((set) => ({
//   userInformation: [], // Initial state

//   // Action to capture user information
//   captureUserInformation: (userInfo) => {
//     set({ userInformation: userInfo });
//   },
// }));

// export default useUserInformationStore;
