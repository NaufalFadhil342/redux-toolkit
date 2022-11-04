import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { Home } from './Pages/home';
import { Login } from './Pages/login';
import { Contact } from './Pages/contact';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
