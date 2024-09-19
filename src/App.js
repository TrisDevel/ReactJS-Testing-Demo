import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from './components/Button';

function App() {
  const [text, setText] = useState("CICD Testing. Bui Trong Tri");
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    
    <Router>
      <div>
        <h1>{text}</h1>
        <button onClick={() => setText("Updated Text")}>Click me</button>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function Blog() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Testing Demo</h1>
        <Button label="Click me!" onClick={handleClick} />
      </header>
    </div>
  );
}


export default App;
