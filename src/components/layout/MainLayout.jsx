  import Header from "./Header";
 import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout; 