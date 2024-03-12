import { createSlice } from "@reduxjs/toolkit";

const collapseSlice = createSlice({
  name: "sidebar",
  initialState: {
    openSidebar: false,
    sidebarList: [],
    activeNav: "home",
    openNav: false,
  },
  reducers: {
    setActiveNav(state, action) {
      state.activeNav = action.payload;
    },
    setOpenNav(state) {
      if (window.innerWidth < 640) {
        state.openNav = state.openNav ? false : true;
        if (state.openSidebar) state.openSidebar = false;
      }
    },
    setOpenSidebar(state) {
      if (window.innerWidth < 640) {
        state.openSidebar = !state.openSidebar;
        if (state.openNav) state.openNav = false;
      }
    },
    setCurrentNav(state, action) {
      state.activeNav = action.payload;
    },
    setSidebarList(state, action) {
      state.sidebarList = action.payload;
    },
  },
});

export const { setActiveNav, setSidebarList, setOpenNav, setOpenSidebar, setCurrentNav, setMenu } = collapseSlice.actions;

export default collapseSlice.reducer;
