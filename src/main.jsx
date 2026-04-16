import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ContactIndex from './components/ContactPages/ContactIndex';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-fill">
        <div>
          <ContactIndex />
        </div>
      </div>
      <Footer />
    </div>
  </StrictMode>,
);
