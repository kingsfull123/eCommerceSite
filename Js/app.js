// Display 10 basketball shoes using JavaScript
const productsContainer = document.querySelector(".products-container");
productsContainer.style.cssText = "height: 100vh; padding-top: 60px";
const products = document.createElement("div");
products.className = "products";
products.style.cssText =
  "width: 90%;height: auto;margin: 0 auto;padding: 30px 0;display: grid;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));column-gap: 30px;row-gap: 15px;";

for (let i = 0; i < data.length; i++) {
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";
  const productImg = document.createElement("img");
  productImg.className = "product-img";

  const productBtn = document.createElement("button");
  productBtn.className = "product-btn";
  productBtn.textContent = "add to cart";

  const productDescription = document.createElement("h4");
  productDescription.className = "product-description";

  const productPrice = document.createElement("h5");
  productPrice.className = "product-price";
  productImg.src = data[i].src;
  productDescription.textContent = data[i].description;
  productPrice.textContent = data[i].price;

  productContainer.appendChild(productImg);
  productContainer.appendChild(productDescription);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(productBtn);

  products.appendChild(productContainer);
}

productsContainer.appendChild(products);
