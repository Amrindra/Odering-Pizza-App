import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // console.log(children);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
