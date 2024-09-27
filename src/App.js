import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [text, setText] = useState("Information CI/CD Testing");
  return (
    <div>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1>{text}</h1>
          </div>
          <nav>
            <ul style={{ display: "flex", gap: "50px", listStyle: "none" }}>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#949934",
                    fontSize: "20px",
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#949934",
                    fontSize: "20px",
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#949934",
                    fontSize: "20px",
                  }}
                  to="/blog"
                >
                  Information
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#949934",
                    fontSize: "20px",
                  }}
                  to="/bmi"
                >
                  BMI Calculator
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bmi" element={<BmiCalculator />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src="./cicdpiline.png" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="./cicdpiline1.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

function About() {
  return (
    <ul>
      <li>
        <p> Bùi Trọng Trí</p>
      </li>
      <li>
        <p> Dương Thanh Tùng</p>
      </li>
      <li>
        <p> Nguyễn Mỹ Thái Hòa</p>
      </li>
      <li>
        <p> Nguyễn Văn Tuyên</p>
      </li>
      <li>
        <p> Huy HeHe</p>
      </li>
    </ul>
  );
}

function Contact() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <label style={{ marginBottom: "20px" }}>
        Name:
        <input type="text" name="name" />
      </label>
      <label style={{ marginBottom: "20px" }}>
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
  const codeString = `
name: Testing

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run Jest tests
      run: npm test

    - name: Generate Cypress report
      run: npx cypress run

    - name: Upload test report
      uses: actions/upload-artifact@v2
      with:
        name: test-report
        path: |
          reports/test-report.html
          cypress/reports/report.html
  `;

  const [activeSection, setActiveSection] = useState("yaml");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ maxWidth: "800px" }}>
        <nav
          style={{
            marginBottom: "20px",
            backgroundColor: "transparent",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <li>
              <button
                onClick={() => toggleSection("yaml")}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 15px",
                  cursor: "pointer",
                }}
              >
                1. YAML Syntax
              </button>
            </li>
            <li>
              <button
                onClick={() => toggleSection("github")}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 15px",
                  cursor: "pointer",
                }}
              >
                2. GitHub Action
              </button>
            </li>
          </ul>
        </nav>

        {activeSection === "yaml" && (
          <div>
            <p>
              YAML is a human-readable data serialization standard that is often
              used for configuration files. It is similar to JSON but has a
              simpler syntax. YAML is widely used in various applications,
              including CI/CD pipelines, configuration management, and data
              storage.
            </p>
            <strong> Basic Syntax</strong>
            <p>
              YAML uses a key-value pair structure to represent data. Keys are
              separated from their values by a colon (:), and each pair is
              separated by a comma (,). Here is an example of a simple YAML
              file:
            </p>
            <SyntaxHighlighter language="javascript" style={tomorrow}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        )}

        {activeSection === "github" && ( // Hiển thị nội dung GitHub Action khi phần được mở
          <div>
            <h1>GitHub Action</h1>
            <p>
              GitHub Action is a powerful tool for automating software
              development workflows. It allows developers to automate tasks such
              as testing, building, and deploying code.
            </p>
          </div>
        )}
      </div>
    </div>
  ); // Thêm dấu ngoặc nhọn ở đây
}

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI.toFixed(2));
    } else {
      alert("Please enter both weight and height");
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h2>BMI Calculator</h2>
      <input
      style={{marginBottom: "20px"}}
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
      style={{marginBottom: "20px"}}
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button style={{marginBottom: "20px"}} onClick={calculateBMI}>Calculate</button>
      {bmi && <h3>Your BMI is: {bmi}</h3>}
      <img style={{width: "1000px", height: "600px", objectFit: "cover"}} src="./bmi.png" alt="" />
    </div>
    
  );
}

function ShowCryptoPrice() {
  const [cryptoPrice, setCryptoPrice] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => setCryptoPrice(data.bitcoin.usd));
  }, []);

  return <h3>Bitcoin Price: ${cryptoPrice}</h3>;
}

export default App;
