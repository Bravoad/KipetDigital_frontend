import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/widgets/Layout/Layout';
import { ContactsPage } from '@/pages/ContactsPage/ContactsPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { NewsDetailPage } from '@/pages/NewsDetailPage/NewsDetailPage';
import { NewsPage } from '@/pages/NewsPage/NewsPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage/ProjectDetailPage';
import { ProjectsPage } from '@/pages/ProjectsPage/ProjectsPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage/ServiceDetailPage';
import { ServicesPage } from '@/pages/ServicesPage/ServicesPage';
import { VacanciesPage } from '@/pages/VacanciesPage/VacanciesPage';
import { VacancyDetailPage } from '@/pages/VacancyDetailPage/VacancyDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:idOrSlug', element: <ServiceDetailPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:idOrSlug', element: <ProjectDetailPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:idOrSlug', element: <NewsDetailPage /> },
      { path: 'vacancies', element: <VacanciesPage /> },
      { path: 'vacancies/:idOrSlug', element: <VacancyDetailPage /> },
      { path: 'contacts', element: <ContactsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
