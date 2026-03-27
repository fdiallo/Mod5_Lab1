const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

addProductButton.addEventListener("click", handleAddProduct)

function handleAddProduct(event) {
  event.preventDefault()
  if (productNameInput.value === "") {
    alert("Please enter a product name")
    return
  }
  if (productPriceInput.value < 1) {
    alert("Please enter a quantity greter than 0")
    return
  }
  addListItem(productNameInput.value, productPriceInput.value)
  productNameInput.value = ""
  productPriceInput.value = ""
  productNameInput.focus()
}

function addListItem(productName, productPrice) {
  let listItemProduct = document.createElement("li")
  let removeBtn = document.createElement("button")
  removeBtn.style.marginLeft = "50px"
  let lineSeparator = document.createElement("hr")

  listItemProduct.textContent = `${productName}:$${productPrice}`

  removeBtn.textContent = "Remove Product"

  listItemProduct.appendChild(removeBtn)

  cart.appendChild(listItemProduct)

  updateTotalPrice(parseFloat(productPrice))
}

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

cart.addEventListener("click", removeItem)

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');

  let tempStr = item.textContent.split(":")
  let productP = tempStr[1].replace(/\$/g, "")

  console.log(productP)
  const price = parseFloat(productP);
  updateTotalPrice(-price);
  item.remove();
}