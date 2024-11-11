import { createSlice } from '@reduxjs/toolkit';
import { booksData } from '../data/books';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: booksData,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: state.books.length + 1 });
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;