import { Outlet } from 'react-router-dom';
import { Footer } from '@/widgets/Footer/Footer';
import { Header } from '@/widgets/Header/Header';

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
