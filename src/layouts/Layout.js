import Footer from "../components/Footer/Footer";
import BackToTop from "../components/backtotop/BackToTop";
import ChatIcon from "../components/chatbot/ChatIcon";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ChatIcon />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Layout;
