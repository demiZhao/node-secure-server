import express from "express";
import jwt from "express-jwt";
import cors from "cors";
import jwks from "jwks-rsa";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/products", (req, resp) => {
  let products = [
    {
      id: "259",
      name: "Raspberry Mineral Water",
      description:
        "An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
      price: "2.80",
      image_title: "mineral-water-raspberry_600px",
      image:
        "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-raspberry_600px.png",
    },
    {
      id: "436",
      name: "Blueberry Mineral Water",
      description:
        "An 8-ounce serving of our refreshing H+ Sport blueberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
      price: "2.80",
      image_title: "minearl-water-blueberry_600px",
      image:
        "https://hplussport.com/wp-content/uploads/2015/12/minearl-water-blueberry_600px.png",
    },
    {
      id: "437",
      name: "Lemon-Lime Mineral Water",
      description:
        "An 8-ounce serving of our refreshing H+ Sport lemon-lime\u00c2\u00a0mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals",
      price: "2.80",
      image_title: "mineral-water-lemon-lime_600px",
      image:
        "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-lemon-lime_600px.png",
    },
    {
      id: "438",
      name: "Peach Mineral Water",
      description:
        "An 8-ounce serving of our refreshing H+ Sport peach mineral water \u00c2\u00a0fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
      price: "2.80",
      image_title: "mineral-water-peach_600px",
      image:
        "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-peach_600px.png",
    }
  ];
  resp.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
