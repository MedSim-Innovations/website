import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  );
}