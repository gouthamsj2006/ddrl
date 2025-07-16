import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoutes';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a192f] text-white font-sans">
        <Header />

        <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />

            {/* Protected Route Wrapper */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;