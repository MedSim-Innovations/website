import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <div className="grid-fade" />
      <Navbar />
      <main className="page-layer pt-24">{children}</main>
      <Footer />
    </div>
  );
}
