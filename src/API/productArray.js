

const productsArray = [
  {
    id: 1,
    title: "Bible",
    price: 14.88,
    description: "This is the HOLIEST of all bibles, buy now, plz I need rent money, NOW!!",
    category: "explore",
    image: "https://cdn.discordapp.com/attachments/1029090896274268191/1154546566527455313/bible.jpeg"
  },
  {
    id: 2,
    title: "Gigachad",
    price: 8.89,
    description:"Chad Wellington was an understatment, this IS the CHAD of ALL Chads. ",
    category: "explore",
    image: "https://cdn.discordapp.com/attachments/1029090896274268191/1154550559693602816/gigachad.jpeg"
  }
];

function getProductData(id) {
  let productData = productsArray.find(product => product.id === id);

  if(productData === undefined) {
    console.log("Product data does not exsist for ID" + id);
    return undefined
  }
  return productData;
}

export { productsArray, getProductData };
