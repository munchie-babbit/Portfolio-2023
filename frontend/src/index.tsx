import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import ArtPage from './pages/ArtPage';
import DesignPage from './pages/DesignPage';
import DevelopmentPage from './pages/DevelopmentPage';
import NotFoundPage from './pages/NotFoundPage';
import ResponsiveAppBar from './components/ResponsiveAppBar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />}>
          <Route index element={<DevelopmentPage />} />
          <Route path="design" element={<DesignPage />} />
          <Route path="dev" element={<DevelopmentPage/>} />
          <Route path="art" element={<ArtPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Unable to find root element");
}

