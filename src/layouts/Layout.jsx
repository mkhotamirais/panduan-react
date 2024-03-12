import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "../components/Collapses";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="grid grid-cols-4 lg:grid-cols-5 mx-3 lg:mx-16 items-start">
        <Sidebar className={`col-span-1 sticky top-16 pt-5`} />
        <section className={`col-span-4 sm:col-span-3 lg:col-span-4 min-h-[80vh] sm:p-3 sm:pl-6`}>
          <Outlet />
        </section>
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
