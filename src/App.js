import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Msg from "./component/Msg";
import Doctor from "./component/Doctor";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [MediaCard, setMediaCard] = useState([]);
  useEffect(() => {
    try {
      fetchData();
    } catch {}
  });
  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setMediaCard(data.data));
  };

  return (
    <div>
      {/* navbar part */}
      <div className="w-full  h-[100vh] mx-auto overflow-hidden bg-[url('/src/image/dental.jpg')] bg-fixed backGroundImg ">
        <div className="sticky">
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
      </div>
      <div>
        <Doctor />
      </div>
      {/* card part */}
      <div>
        <div className="text-center mt-12">
          <span className="text-3xl md:text-4xl font-serif font-semibold relative">
            Our skilled dentist.
          </span>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-6 bgImg">
          {MediaCard.map((res) => (
            <Card key={res.id} setMediaCard={res} />
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
