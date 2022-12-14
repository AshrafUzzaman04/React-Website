import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Msg from "./component/Msg";
import Doctor from "./component/Doctor";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
import Json from "./generated.json";

const App = () => {
  // const [MediaCard, setMediaCard] = useState([]);
  // useEffect(() => {
  //   try {
  //     fetchData();
  //   } catch {}
  // });
  // const fetchData = async () => {
  //   await axios.get(Json).then((data) => setMediaCard(data.data));
  // };

  return (
    <div>
      {/* navbar part */}
      <div className="w-full mx-auto overflow-hidden ">
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Doctor />
      </div>
      {/* card part */}
      <div>
        <div className="text-center mt-12">
          <span className="text-3xl md:text-4xl font-serif font-semibold relative">
            Our skilled
            <button data-text="Awesome" className="btndentis ml-3">
              <span className="actual-text">&nbsp;dentist&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;dentist&nbsp;
              </span>
            </button>
          </span>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-6 bgImg">
          {Json.map((res) => (
            <Card key={res.id} setMediaCard={res} image={res.image} />
          ))}
        </div>
      </div>
      {/* message part */}
      <div>
        <Msg />
      </div>
      {/* footer part */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
