import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import AppRoutes from "./routes/AppRoutes";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <main
        style={{
          paddingTop: "90px",
        }}
      >
        <AppRoutes />
      </main>

      <Footer />
    </>
  );
}

export default App;