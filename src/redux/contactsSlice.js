import { createSlice } from "@reduxjs/toolkit";
// const INITIAL_STATES = {
//   items: [],

//   name: "",
// };

const contacts_INITIAL_STATES = {
  contacts: {
    items: [],
  },
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: contacts_INITIAL_STATES,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
