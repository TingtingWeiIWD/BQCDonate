import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import wip from "../assets/wip.svg";
import coding from "../assets/coding.svg";

const NotFound = () => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Navbar />
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex flex-1 justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class=" xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="raletive text-center">
            <div class="absolute ">
              <div class="">
                <h1 class="my-2 text-gray-800 font-bold text-2xl lg:text-4xl ">
                  Opps! This page is under cnstruction.
                </h1>
                <p class="mt-2 mb-9 text-gray-800">
                  We're sorry and we look forward to serve you soon!
                </p>
                <Link
                  to="/"
                  class="sm:w-full lg:w-auto border rounded md py-4 px-8 text-center bg-pink text-white hover:bg-fuchsia focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Support BQC
                </Link>
              </div>
            </div>
            <div>
              <img src={wip} />
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 ">
          <img src={coding} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
