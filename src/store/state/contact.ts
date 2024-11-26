import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactState {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const initialState: ContactState[] = [];

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactState>) => {
      state.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<ContactState>) => {
      const findById = state.findIndex(
        (state) => state.id === action.payload.id
      );
      if (findById !== -1) {
        state[findById] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const findById = state.findIndex((state) => state.id === action.payload);
      if (findById !== -1) {
        state.splice(findById, 1);
      }
    },
    clearContacts: (state) => {
      state.length = 0;
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
