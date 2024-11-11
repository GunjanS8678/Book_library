import { useParams,Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        {category ? `${category} Books` : 'All Books'}
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <Link to={`/book/${book.id}`} className="text-blue-600 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooksPage;