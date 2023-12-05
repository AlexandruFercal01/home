import { TextField, Card, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import "./Fleet.css";
import a3 from "./Images/a3.png";
import bmw3 from "./Images/bmw-3.png";
import gls from "./Images/gls.jpeg";
import huracan from "./Images/Huracan.jpg";
import s5 from "./Images/s5.jpeg";
import arteon from "./Images/arteon.jpg";
import volvo from "./Images/volvo.jpg";
import ferrari from "./Images/ferrari.jpg";
import bmwx5 from "./Images/bmwx5.png";
import skoda from "./Images/skoda.png";
import { useState } from "react";
import { Footer } from "./Footer";

const carss = [
  {
    name: "Lamborghini Huracan",
    price: 1000,
    image: huracan,
    class: "Sport Car",
  },
  {
    name: "Audi A3",
    price: 300,
    image: a3,
    class: "Normal Car",
  },
  {
    name: "Mercedes GLS",
    price: 800,
    image: gls,
    class: "SUV",
  },
  {
    name: "BMW M3",
    price: 800,
    image: bmw3,
    class: "Sport Car",
  },
  {
    name: "Audi S5",
    price: 500,
    image: s5,
    class: "Normal Car",
  },
  {
    name: "Volskwagen Arteon",
    price: 400,
    image: arteon,
    class: "Normal Car",
  },
  {
    name: "Volvo XC90",
    price: 600,
    image: volvo,
    class: "SUV",
  },
  {
    name: "Ferrari 458 Italia",
    price: 1200,
    image: ferrari,
    class: "Sport Car",
  },
  {
    name: "BMW X5",
    price: 700,
    image: bmwx5,
    class: "SUV",
  },
  {
    name: "Skoda Octavia",
    price: 400,
    image: skoda,
    class: "Normal Car",
  },
];

export function Fleet() {
  const [inputValue, setInputValue] = useState();
  const [filteredCars, setFilteredCars] = useState(carss);
  const [filtered, setFiltered] = useState(false);

  return (
    <>
      <div>
        <div className="search">
          <h3>Search a car:</h3>

          <div className="searchInput">
            <TextField
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {filtered ? (
              <IconButton
                onClick={() => {
                  setFilteredCars(carss);
                  setFiltered(false);
                }}
              >
                <UndoRoundedIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  setFilteredCars(
                    carss.filter(
                      (car) =>
                        car.name.includes(inputValue) ||
                        car.class.includes(inputValue)
                    )
                  );
                  setFiltered(true);
                }}
              >
                <SearchIcon />
              </IconButton>
            )}
          </div>
        </div>
        <div className="carContainer">
          {filteredCars.map((car) => (
            <Card className="carCard">
              <img
                src={car.image}
                style={{ width: "300px", height: "150px" }}
                alt="There should be a car."
              />
              <h3>{car.name}</h3>
              <h4>
                Price: {car.price}$ per day | {car.class}{" "}
              </h4>

              <Button style={{ display: "flex" }}>Rent it</Button>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
