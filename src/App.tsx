import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import FooterSection from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import WhatsappButton from "./components/whatsapp-btn";

const App = () => {
  return (
    <ThemeProvider>
      <div className="fixed w-full z-[1000]">
        <Navbar />
      </div>
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
      <WhatsappButton />
      <FooterSection />
    </ThemeProvider>
  );
};

export default App;
