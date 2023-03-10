import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

//Need to call http://localhost:5000/api/seed after updating data.js
const data = {
  users: [
    {
      name: "Shifan",
      phone: 8547310922,
      email: "shifanspam@gmail.com",
      password: bcrypt.hashSync(process.env.SHIFAN_PASSWORD),
      isAdmin: true,
    },
    {
      name: "John",
      phone: 9447310922,
      email: "johnjacob@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: 1,
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg", // height= 679px × width=829px jpg  --- very imp
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      //  _id: 2,
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg", // height= 679px × width=829px jpg  --- very imp
      price: 250,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      // _id: 3,
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg", // height= 679px × width=829px jpg  --- very imp
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      //  _id: 4,
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg", // height= 679px × width=829px jpg  --- very imp
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //  _id: 5,
      name: "Puma Slim Pant",
      slug: "puma-slim-pant",
      category: "Pants",
      image: "/images/p5.jpg", // height= 679px × width=829px jpg  --- very imp
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      //  _id: 6,
      name: "Nike Fit Pant",
      slug: "nike-fit-pant",
      category: "Pants",
      image: "/images/p6.jpg", // height= 679px × width=829px jpg  --- very imp
      price: 65,
      countInStock: 5,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
