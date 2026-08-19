import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import WhyRevora from './pages/WhyRevora';
import Career from './pages/Career';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/why-revora" element={<WhyRevora />} />
          <Route path="/career" element={<Career />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
