# Book Library React Application

A modern React application for managing and browsing books, built with React, Redux Toolkit, React Router, and Tailwind CSS.

## Features

- Browse books by categories
- Search functionality for books
- View detailed book information
- Add new books to the library
- Responsive design
- State management with Redux
- Client-side routing

## Technologies Used

- React 18
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Vite (Build Tool)
- ESLint

## Project Structure

```
src/
├── components/
│   ├── AddBooks.jsx
│   ├── BookDetails.jsx
│   ├── BrowseBooks.jsx
│   ├── Home.jsx
│   ├── Navbar.jsx
│   └── NotFound.jsx
├── data/
│   └── books.js
├── redux/
│   └── bookSlice.js
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd vite-project
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Features Breakdown

### Home Page
- Display featured/popular books
- Show book categories
- Quick navigation to different sections

### Browse Books
- Filter books by category
- Search functionality
- Display book cards with basic information
- Links to detailed book views

### Add Books
- Form validation
- Redux integration for state management
- Category selection
- Rating system

### Book Details
- Detailed view of individual books
- Display complete book information
- Navigation back to browse view

## State Management

The application uses Redux Toolkit for state management with the following features:
- Books store
- Add book functionality
- Book filtering and search

## Styling

The application uses Tailwind CSS for styling with:
- Responsive design
- Custom components
- Utility-first CSS approach
