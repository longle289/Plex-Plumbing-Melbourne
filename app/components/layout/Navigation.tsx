import Header from "./Header";
import Footer from "./Footer";

export default function Navigation({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
