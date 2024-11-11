import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    navigate('/404');
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
        <p className="text-xl text-gray-600 mb-4">By {book.author}</p>
        <p className="text-gray-800 mb-4">{book.description}</p>
        <div className="mb-4">
          <span className="font-bold">Rating:</span> {book.rating}/5
        </div>
        <button
          onClick={() => navigate('/browse')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Browse
        </button>
      </div>
    </div>
  );
};


export default BookDetailsPage;