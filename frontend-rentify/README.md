# Limitations

- The products are not rendering properly from the back end, at this point we just see fake data showing in the front end -> MUST fix.

- If an user uses the search bar to search for products, then make a fetch request to the back end to search for an specific product (LIKE).

- If an user filter the product by Category -> Search for products based on that category making a fetch request to the back end.



# Bugs

- After an user clicks checkout -> Redirects to the Checkout component to finish the payment process and then -> Generates the order number and save to the database by UserId.

- View Products is not updating the product properly as it's showing a 500 http error in the back end, properly it's not sending the info properly via the View Products Component. Maybe, 
just after the user clicks to update, redirects back to the add products in order to update the product.

- When user is logged in and product has been added, after page refresh, user is logged out.