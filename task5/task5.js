
const apiURL = "https://fakestoreapi.com/products/";

    const productsContainer = document.getElementById("products");
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const searchInput = document.getElementById("search");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortPrice = document.getElementById("sortPrice");
    const cartCount = document.getElementById("cart-count");

    let allProducts = [];

    // Fetch Products
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        loading.style.display = "none";

        allProducts = data;

        displayProducts(data);
        populateCategories(data);
        updateCartCount();
      })
      .catch(err => {
        loading.style.display = "none";
        error.innerText = "Failed to load data";
        console.log(err);
      });

    // Display Products
    function displayProducts(data) {
      productsContainer.innerHTML = "";

      data.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          
          <h3>
            ${product.title.slice(0, 50)}
          </h3>

          <p class="price">$${product.price}</p>

          <p class="desc">
            ${product.description.slice(0, 60)}...
          </p>

          <div class="btn-group">
            <button class="view-btn">View More</button>
            <button class="cart-btn">Add To Cart</button>
          </div>
        `;

        // View More Button
        viewmoreBtn =card.querySelector(".view-btn")
        viewmoreBtn.addEventListener("click", () => {
          alert(
            `Title: ${product.title}

        Price: $${product.price}

        Category: ${product.category}

        Description: ${product.description}`
          );
        });

        // Add To Cart
        cartBtn=card.querySelector(".cart-btn")
        cartBtn.addEventListener("click", () => {
          addToCart(product);
        });

        productsContainer.appendChild(card);
      });
    }

    // Search Functionality
    searchInput.addEventListener("input", filterProducts);

    // Category Filter
    categoryFilter.addEventListener("change", filterProducts);

    // Sort Feature
    sortPrice.addEventListener("change", filterProducts);

    function filterProducts() {

      let filtered = [...allProducts];

      // Search
      const searchValue = searchInput.value.toLowerCase();

      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchValue)
      );

      // Category Filter
      const categoryValue = categoryFilter.value;

      if(categoryValue !== "all"){
        filtered = filtered.filter(product =>
          product.category === categoryValue
        );
      }

      // Sort
      if(sortPrice.value === "low"){
        filtered.sort((a,b) => a.price - b.price);
      }

      if(sortPrice.value === "high"){
        filtered.sort((a,b) => b.price - a.price);
      }

      displayProducts(filtered);
    }

    // Populate Categories
    function populateCategories(data){

      const categories = [...new Set(data.map(item => item.category))];

      categories.forEach(category => {

        const option = document.createElement("option");

        option.value = category;
        option.innerText = category;

        categoryFilter.appendChild(option);
      });
    }

    // Add To Cart
    function addToCart(product){

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

      alert("Product Added To Cart");
    }

    // Update Cart Count
    function updateCartCount(){

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cartCount.innerText = `Cart Items: ${cart.length}`;
    }

  
