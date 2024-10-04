import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render the app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container app does not have an elemement with id 'dev-products-dev-only'
  if (el) {
    // We are probably on dev mode
    mount(el);
  }
}

// Context #2
// We are running file in development or production
// In the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exist
// WE DO NOT WANT to immediately render the app
export { mount };
