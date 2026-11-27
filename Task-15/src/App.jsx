import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to my React website!</p>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This website is created using React and React Router.</p>
    </div>
  )
}

function Blog() {
  return (
    <div className="page">
      <h1>Blog Page</h1>
      <p>Welcome to my blog. Here you can read interesting articles.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App