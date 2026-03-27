REFLECTION:

1. To dynamically create new element to the DOM such as li, I used the createElement method of the documnent and assign it to a variable and later down the code appended append it to cart element. 
2. To ensure accurate updates to the total price, I did make sure to parse into float (using parseFloat method) the value from the product price input field.
3. To handle invalid input for product name and price I check first if the product name is not empty and the product price is not negatif.
4. One of the challenges I faced was when removing a product from the cart particulary getting the value of the "li" and then extracting the price from it.