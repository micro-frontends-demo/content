const fs = require('fs');

const restaurants = [
  {
    id: '1',
    name: "Becky's Burgers",
    priceRange: '$$',
    imageSrc: '/images/1-burger.jpg',
    imageDescription: 'A photo of a burger with fries and a milkshake',
    description: 'Juicy burgers, crunchy fries, and creamy shakes',
    menu: [
      { item: 'Cheeseburger', price: 9 },
      { item: 'Milkshake', price: 4 },
      { item: 'Meal (burger, fries, and shake)', price: 15 },
    ],
  },
  {
    id: '2',
    name: 'Chicken Nice',
    priceRange: '$',
    imageSrc: '/images/2-chicken-rice.jpg',
    imageDescription: 'A photo of Hainanese chicken rice',
    description: "The world's best Hainanese Chicken Rice",
    menu: [
      { item: 'Steamed chicken rice', price: 4 },
      { item: 'Roast chicken rice', price: 4 },
      { item: 'Steamed chicken rice set', price: 6 },
    ],
  },
  {
    id: '3',
    name: "Nonna's pizza and pasta",
    priceRange: '$$',
    imageSrc: '/images/3-pizza.jpg',
    imageDescription: 'A photo of a margherita pizza',
    description: 'Classic pizza and pasta just like Nonna used to make',
    menu: [
      { item: 'Margherita pizza', price: 10 },
      { item: 'Pepperoni pizza', price: 12 },
      { item: 'Spaghetti bolognese', price: 15 },
    ],
  },
  {
    id: '4',
    name: 'Super satay skewers',
    priceRange: '$$',
    imageSrc: '/images/4-satay.jpg',
    imageDescription: 'A photo of some satay skewers with sauce',
    description: "Satay so good it'll save the world",
    menu: [
      { item: '10 chicken satay', price: 7 },
      { item: '10 mutton satay', price: 7 },
      { item: '10 beef satay', price: 7 },
    ],
  },
  {
    id: '5',
    name: 'Curry delights',
    priceRange: '$$$',
    imageSrc: '/images/5-curry.jpg',
    imageDescription: 'A photo of Indian curries',
    description: 'The best Indian curries from the freshest ingredients',
    menu: [
      { item: 'Dal fry', price: 8 },
      { item: 'Garlic Naan', price: 3 },
      { item: 'Paneer Makhani ', price: 15 },
    ],
  },
  {
    id: '6',
    name: 'Sliced',
    priceRange: '$',
    imageSrc: '/images/6-sandwich.jpg',
    imageDescription: 'A photo of a sandwich',
    description: 'Fresh sandwiches at great prices',
    menu: [
      { item: 'BLT (bacon, lettuce, tomato)', price: 7 },
      { item: 'Warm chicken sandwich', price: 6 },
      { item: 'Chicken caesar salad', price: 5 },
    ],
  },
  {
    id: '7',
    name: 'Taste of Iberia',
    priceRange: '$$$$',
    imageSrc: '/images/7-paella.jpg',
    imageDescription: 'A photo of Spanish Paella',
    description: 'Paella, tapas, and imported Spanish wines',
    menu: [
      { item: 'Seafood paella', price: 25 },
      { item: 'Mixed tapas', price: 27 },
      { item: '2012 Barbazul (Red)', price: 70 },
    ],
  },
  {
    id: '8',
    name: 'Crunchy Crunch',
    priceRange: '$$',
    imageSrc: '/images/8-fried-chicken.jpg',
    imageDescription: 'A photo of crispy fried chicken',
    description: "The city's best Southern-style fried chicken",
    menu: [
      { item: '6 pc. chicken', price: 12 },
      { item: '6 pc. boneless chicken', price: 15 },
      { item: '2 pc. biscuits', price: 5 },
    ],
  },
  {
    id: '9',
    name: "Japan's finest",
    priceRange: '$$$',
    imageSrc: '/images/9-sushi.jpg',
    imageDescription: 'A photo of sushi and sashimi',
    description: 'Only the freshest fish and tastiest katsu',
    menu: [
      { item: 'Mixed sushi platter', price: 20 },
      { item: 'Mixed sashimi platter', price: 20 },
      { item: 'Chicken katsu curry set', price: 18 },
    ],
  },
  {
    id: '10',
    name: "Chippo's",
    priceRange: '$',
    imageSrc: '/images/10-fish-n-chips.jpg',
    imageDescription: 'A photo of deep-fried fish with thick-cut hot chips',
    description: 'Authentic Aussie-style fish n chips',
    menu: [
      { item: 'Fish n chips for 1', price: 8 },
      { item: 'Potato cake', price: 1 },
      { item: 'Dim sim', price: 1 },
    ],
  },
];

fs.writeFileSync('./content/restaurants.json', JSON.stringify(restaurants));
try {
  fs.mkdirSync('./content/restaurants');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}
restaurants.forEach(restaurant => {
  fs.writeFileSync(
    `./content/restaurants/${restaurant.id}.json`,
    JSON.stringify(restaurant),
  );
});
