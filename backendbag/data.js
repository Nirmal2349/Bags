// import bcrypt from "bcryptjs";

const data = {
  // users: [
  //   {
  //     name: "Basir",
  //     email: "admin@example.com",
  //     password: bcrypt.hashSync("123456"),
  //     isAdmin: true,
  //   },
  //   {
  //     name: "John",
  //     email: "user@example.com",
  //     password: bcrypt.hashSync("123456"),
  //     isAdmin: false,
  //   },
  // ],
  products: [
    {
      // _id: "1",
      name: "Hand bag",
      slug: "handbag",
      category: "handbag",
      image: "/images/handbag3.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "Lavie",
      rating: 4.5,
      numReviews: 10,
      description: "high quality handbag",
    },
    {
      // _id: "2",
      name: "Duffle bag",
      slug: "Duffle bag",
      category: "dufflebag",
      image: "/images/dufflebag.jpg",
      price: 250,
      countInStock: 0,
      brand: "Roshan",
      rating: 4.0,
      numReviews: 10,
      description: "high quality dufflebag",
    },
    {
      // _id: "3",
      name: "Back bag",
      slug: "Back bag",
      category: "backbag",
      image: "/images/backbag.jpg",
      price: 25,
      countInStock: 15,
      brand: "Skybags",
      rating: 4.5,
      numReviews: 14,
      description: "high quality backbag",
    },
    {
      // _id: "4",
      name: "Trekking bag",
      slug: "Trekking bag",
      category: "trekkingbag",
      image: "/images/trekkingbag.jpg",
      price: 65,
      countInStock: 50,
      brand: "Wildcraft",
      rating: 4.5,
      numReviews: 10,
      description: "high quality trekkingbag",
    },
  ],
};
export default data;
