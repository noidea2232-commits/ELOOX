import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/public/HomePage';
import { AboutPage } from '@/pages/public/AboutPage';
import { ServicesPage } from '@/pages/public/ServicesPage';
import { ServiceDetailPage } from '@/pages/public/ServiceDetailPage';
import { IndustriesPage } from '@/pages/public/IndustriesPage';
import { SolutionsPage } from '@/pages/public/SolutionsPage';
import { ProductsPage } from '@/pages/public/ProductsPage';
import { WorkPage } from '@/pages/public/WorkPage';
import { GrowthPage } from '@/pages/public/GrowthPage';
import { InsightsPage } from '@/pages/public/InsightsPage';
import { InsightDetailPage } from '@/pages/public/InsightDetailPage';
import { BookMeetingPage } from '@/pages/public/BookMeetingPage';
import { ContactPage } from '@/pages/public/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/growth" element={<GrowthPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetailPage />} />
          <Route path="/book" element={<BookMeetingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
