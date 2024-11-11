import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../data/books';

const HomePage = () => {
  const books = useSelector((state) => state.books.books);
  const popularBooks = books.filter(book => book.popular);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Book Library</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/browse/${category}`}
              className="p-4 bg-blue-100 rounded-lg text-center hover:bg-blue-200"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularBooks.map((book) => (
            <div key={book.id} className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <Link to={`/book/${book.id}`} className="text-blue-600 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;