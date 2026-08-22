import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Portfolio from './pages/public/Portfolio';
import Services from './pages/public/Services';
import Gallery from './pages/public/Gallery';
import Testimonials from './pages/public/Testimonials';
import Contact from './pages/public/Contact';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import ManageGallery from './pages/admin/ManageGallery';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        {/* Public Routes with Nav and Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Login - No layout wrapper */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="portfolio" element={<div className="p-8">Manage Portfolio Mock</div>} />
          <Route path="gallery" element={<ManageGallery />} />
          <Route path="settings" element={<div className="p-8">Admin Settings Mock</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
