import ReactPlayer from "react-player";
import { Footer } from "./Footer";

import "./About.css";

export function About() {
  return (
    <>
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to our car rental service! We strive to provide you with the
          best car rental experience, offering a wide range of vehicles to suit
          your needs.
        </p>

        <ReactPlayer
          url="https://www.youtube.com/watch?v=Mi0ZWuecT0Q"
          width={"90%"}
          height={"300px"}
          style={{ margin: "0 auto" }}
        />
        <h2>Our Mission</h2>
        <p>
          Our mission is to make car rental easy and convenient for our
          customers. Whether you need a car for a business trip, vacation, or
          any other occasion, we've got you covered.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            Wide Selection: Choose from a diverse fleet of vehicles, including
            sedans, SUVs, and more.
          </li>
          <li>
            Easy Booking: Our online booking system is simple and user-friendly,
            making it easy for you to reserve a car in just a few clicks.
          </li>
          <li>
            Affordable Rates: We offer competitive and transparent pricing to
            ensure you get the best value for your money.
          </li>
          <li>
            Customer Satisfaction: Our dedicated team is committed to providing
            excellent customer service to make your rental experience seamless
            and enjoyable.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
