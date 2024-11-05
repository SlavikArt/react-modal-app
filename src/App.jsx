import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ModalComponent from "./components/Modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    text: "",
    type: "",
  });

  const openModal = (type) => {
    let content = {};
    switch (type) {
      case "info":
        content = {
          title: "Інформаційне",
          text: "Це інформаційне модальне вікно.",
          type,
        };
        break;
      case "confirmation":
        content = {
          title: "Підтвердження",
          text: "Ви впевнені, що хочете продовжити?",
          type,
        };
        break;
      case "login":
        content = {
          title: "Вхід",
          text: "Будь ласка, введіть свої дані для входу.",
          type,
        };
        break;
      default:
        break;
    }
    setModalContent(content);
    setModalShow(true);
  };

  return (
    <Router>
      <div className="container mt-4">
        <h1 style={{ textAlign: "center" }}>Модальний Додаток</h1>{" "}
        <nav>
          <Link to="/" className="nav-link">
            Головна
          </Link>{" "}
          |{" "}
          <Link to="/about" className="nav-link">
            Про нас
          </Link>
        </nav>
        <button
          className="btn btn-primary"
          onClick={() => openModal("info")}
          style={{ marginRight: "5px", marginLeft: "5px" }}
        >
          Інформаційне вікно
        </button>
        <button
          className="btn btn-warning"
          onClick={() => openModal("confirmation")}
          style={{ marginRight: "5px", marginLeft: "5px" }}
        >
          Вікно підтвердження
        </button>
        <button
          className="btn btn-success"
          onClick={() => openModal("login")}
          style={{ marginRight: "5px", marginLeft: "5px" }}
        >
          Вікно логіну
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ModalComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={modalContent.title}
          text={modalContent.text}
          type={modalContent.type}
        />
      </div>
    </Router>
  );
}

export default App;
