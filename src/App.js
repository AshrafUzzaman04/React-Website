import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <div className="w-full  h-[100vh] mx-auto overflow-hidden bg-[url('/image/dental.jpg')] backGroundImg ">
        <div>
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
