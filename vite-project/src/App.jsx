import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './redux/bookSlice';
import AddBookPage from './components/AddBooks';
import NotFoundPage from './components/NotFound';
import BookDetailsPage from './components/BookDetails';
import BrowseBooksPage from './components/BrowseBooks';
import HomePage from './components/Home';
import Navbar from './components/Navbar';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowseBooksPage />} />
        <Route path="/browse/:category" element={<BrowseBooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;