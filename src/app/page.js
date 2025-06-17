import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <ToastContainer>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ToastContainer>

      <Navbar></Navbar>
      <Banner></Banner>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}
