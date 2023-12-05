import ScrollCarousel from "scroll-carousel-react";
import "./Home.css";
import a3 from "./Images/a3.png";
import bmw3 from "./Images/bmw-3.png";
import gls from "./Images/gls.jpeg";
import huracan from "./Images/Huracan.jpg";
import s5 from "./Images/s5.jpeg";
import { Footer } from "./Footer";

const cars = [a3, huracan, gls, bmw3, s5];

export function Home() {
  return (
    <>
      <div>
        <div className="carousel">
          <h1 className="carousel-desc">
            A bit of what you will found at us ..
          </h1>
          <ScrollCarousel autoplay autoplaySpeed={1} speed={1}>
            {cars.map((item) => (
              <div
                key={item}
                className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48"
              >
                <img src={item} height="200px" />
              </div>
            ))}
          </ScrollCarousel>
        </div>
        <div className="desc">
          <h1>Rent a car at low prices</h1>
          <p>
            Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.
          </p>
        </div>
        <div className="offers">
          <h1>Latest Offers</h1>
          <div className="offersCards">
            <div className="card">
              <h2>Premium</h2>
              <h4>Prices starting from 240$ per weekend</h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              dicta voluptas quia dolor fuga odit.
              <button>See offers</button>
            </div>
            <div className="card">
              <h2>Family Cars</h2>
              <h4>Prices starting from 120$ per weekend</h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              dicta voluptas quia dolor fuga odit.
              <button>See offers</button>
            </div>
            <div className="card">
              <h2>Sport & Luxury </h2>
              <h4>Prices starting from 400$ per weekend</h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              dicta voluptas quia dolor fuga odit.
              <button>See offers</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
