export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("../assets/images/categories/pizza.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../assets/images/categories/hamburger.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../assets/images/categories/spaghetti.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../assets/images/categories/takeout-box.png"),
  },
  {
    id: 5,
    name: "Sea Food",
    image: require("../assets/images/categories/tropical-fish.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../assets/images/categories/tropical-drink.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender frind chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: require("../assets/images/restaurants/pizza.jpg"),
      description: "Hot and Spicy Pizza",
      lat: 38.2145602,
      lng: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/dishes/images(2).jpeg"),
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/dishes/images(2).jpeg"),
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/dishes/images(2).jpeg"),
        },
      ],
    },
    {
      id: 2,
      name: "KFC",
      image: require("../assets/images/restaurants/kfc.webp"),
      description: "Crispy Fried Chicken",
      lat: 38.215,
      lng: -85.533,
      address: "567 main street",
      stars: 4,
      reviews: "6.2k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Bucket Chicken",
          description: "Crispy fried chicken bucket",
          price: 15,
          image: require("../assets/images/restaurants/kfc2.jpeg"),
        },
        {
          id: 2,
          name: "Zinger Burger",
          description: "Spicy crispy chicken burger",
          price: 8,
          image: require("../assets/images/restaurants/kfc3.webp"),
        },
        {
          id: 3,
          name: "Chicken Wings",
          description: "Hot and crispy chicken wings",
          price: 10,
          image: require("../assets/images/restaurants/kfc.webp"),
        },
      ],
    },
    {
      id: 3,
      name: "Papa Johns",
      image: require("../assets/images/restaurants/pizza.jpg"),
      description: "Hot and Spicy Pizza",
      lat: 38.2145602,
      lng: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/restaurants/pizza.jpg"),
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/restaurants/pizza.jpg"),
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/restaurants/pizza.jpg"),
        },
      ],
    },
  ],
};


