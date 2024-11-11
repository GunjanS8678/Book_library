import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container mx-auto p-4 text-center">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-4">Sorry, the page you're looking for doesn't exist.</p>
    <Link to="/" className="text-blue-600 hover:underline">
      Return to Home Page
    </Link>
  </div>
);

export default NotFoundPage;