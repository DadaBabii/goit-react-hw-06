import { createSlice } from "@reduxjs/toolkit";
// const INITIAL_STATES = {
//   items: [],

//   name: "",
// };

const filters_INITIAL_STATES = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filters",
  // Початковий стан редюсера слайсу
  initialState: filters_INITIAL_STATES,
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
