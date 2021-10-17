var getProductsUrl = 'https://mocki.io/v1/9e4a86be-a4ee-4ff3-a928-a0360b819eef'

const getProducts = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json
}

getProducts(getProductsUrl).then((products) => {
    document.getElementById("home-button").onclick = () => {
        window.location = 'index.html';
    }

    document.getElementById("orders-button").onclick = () => {
        window.location = 'order.html';
    }

    var productsDiv = document.getElementById('products');
    for (let i in products) {
        const newProductDiv = document.createElement("div");
        const name = document.createElement("div");
        name.setAttribute("class", "name");
        name.innerHTML = products[i].name;
        const quantityLabel = document.createElement("label");
        const div = document.createElement("div");
        const quantity = document.createElement("input");
        quantity.setAttribute("type", "number")
        quantity.setAttribute("class", "quantity")
        quantity.setAttribute("value", 0)
        quantityLabel.innerHTML = "Quantity:"

        const dateLabel = document.createElement("label");
        dateLabel.setAttribute("class", "date-label");
        const date = document.createElement("input");
        date.setAttribute("type", "date")
        date.setAttribute("value", Date.now())
        dateLabel.innerHTML = "Deliver date:"

        const orderButton = document.createElement("button");
        orderButton.innerHTML = "Order";
        orderButton.setAttribute("class", "btn btn-warning order");

        const orderLabel = document.createElement("label");
        orderLabel.innerHTML = products[i].name + " has been ordered!";
        orderLabel.setAttribute("hidden", "true");
        orderLabel.setAttribute("class", "order-label")
        orderButton.onclick = () => {
            orderLabel.removeAttribute("hidden");
        }

      
        newProductDiv.appendChild(name);
        div.appendChild(quantityLabel);
        div.appendChild(quantity);
        div.appendChild(dateLabel);
        div.appendChild(date);
        div.appendChild(orderButton);
        div.appendChild(orderLabel);
        newProductDiv.appendChild(div);
        productsDiv.appendChild(newProductDiv)
    }
})


