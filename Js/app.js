function displayProducts() {
  // create an empty array

  // Display 10 basketball shoes using JavaScript
  const productsContainer = document.querySelector(".products-container");
  productsContainer.style.cssText = "height: 100vh; padding-top: 60px";
  const products = document.createElement("div");
  products.className = "products";
  products.style.cssText =
    "width: 90%;height: auto;margin: 0 auto;padding: 30px 0;display: grid;grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));column-gap: 30px;row-gap: 15px;";

  for (let i = 0; i < data.length; i++) {
    // product container
    const productContainer = document.createElement("div");
    productContainer.className = "product-container";

    // product image
    const productImg = document.createElement("img");
    productImg.className = "product-img";

    // product button
    const productBtn = document.createElement("button");
    productBtn.className = "product-btn";
    productBtn.textContent = "add to cart";

    // product description
    const productDescription = document.createElement("h4");
    productDescription.className = "product-description";

    // product price
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

    productBtn.onclick = function () {
      // select listing and create listItem
      const listing = document.querySelector(".listing");
      const listItem = document.createElement("li");
      listItem.className = "listItem";

      // create cancelBtn
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "x";
      cancelBtn.className = "cancelBtn";

      // create img
      const img = document.createElement("img");
      img.src = data[i].src;

      // create price
      const price = document.createElement("p");
      price.textContent = `$  ${data[i].price}`;

      // create description
      const description = document.createElement("p");
      description.textContent = data[i].description;

      // appending children to listItem

      listItem.appendChild(img);
      listItem.appendChild(description);
      listItem.appendChild(price);
      listItem.appendChild(cancelBtn);

      // appending listItems to listing
      listing.appendChild(listItem);

      //cancelBtn function
      cancelBtn.onclick = function () {
        listing.removeChild(listItem);
      };
    };
  }

  productsContainer.appendChild(products);
}

displayProducts();
