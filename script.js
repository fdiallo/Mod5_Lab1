const productNameInput = document.getElementById('product-name');
const productCountInput = document.getElementById('product-count');
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
  if (productCountInput.value < 1) {
    alert("Please enter a quantity greter than 0")
    return
  }
  if (productPriceInput.value < 1) {
    alert("Please enter a quantity greter than 0")
    return
  }
  addListItem(productNameInput.value, productCountInput.value, productPriceInput.value)
  productNameInput.value = ""
  productCountInput.value = ""
  productPriceInput.value = ""
  productNameInput.focus()
}

function addListItem(productName, productCount, productPrice) {
  let listItemProduct = document.createElement("li")
  let listItemCount = document.createElement("li")
  let removeBtn = document.createElement("button")
  removeBtn.style.marginLeft = "50px"
  let lineSeparator = document.createElement("hr")

  listItemProduct.textContent = `${productName}: ${productCount} @ $${productPrice}`

  removeBtn.textContent = "Remove Product"

  listItemProduct.appendChild(removeBtn)

  cart.appendChild(listItemProduct)

  let temmAmount = Number(productCount) * parseFloat(productPrice)

  updateTotalPrice(temmAmount)
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

  let tempStr = item.textContent.split("@")
  let str1 = tempStr[0].replace(/\$/g, "")
  let tempProductCount = str1.split(":")
  let productCount = tempProductCount[1]

  let productPrice = tempStr[1].replace(/\$/g, "")
  let price = parseFloat(productCount) * parseFloat(productPrice)

  updateTotalPrice(-price);
  item.remove();
}