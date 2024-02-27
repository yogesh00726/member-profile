import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  city: "",
  dob: new Date()
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.city = action.payload.city;
      state.dob = action.payload.dob;
    },
    clearMember: (state) => {
      state.username = "";
      state.email = "";
      state.city = "";
      state.dob = new Date();
    },
  },
});

const { reducer, actions } = memberSlice;

export const { setMember, clearMember } = actions
export default reducer;