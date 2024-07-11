import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

const usernameStore = (set) => ({
  user: "",

  captureUser: (newUser) =>
    set(() => {
      return { user: newUser };
    }),
});

// const useUsernameStore = create(devtools(persist({ usernameStore })));
const useUsernameStore = create(usernameStore);
// const useTasksStore = create(devtools(persist(tasksStore, { name: "tasks" })));
export default useUsernameStore;
