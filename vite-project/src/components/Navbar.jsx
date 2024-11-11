import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">Book Library</Link>
      <div className="space-x-4">
        <Link to="/" className="text-white">Home</Link>
    
        <Link to="/browse" className="text-white">Browse Books</Link>
        
        <Link to="/add" className="text-white">Add Book</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;