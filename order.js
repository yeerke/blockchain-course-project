var getProductsUrl = 'https://mocki.io/v1/1cd2d242-38b9-46aa-b034-36118f55b4ae'

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
        quantity.setAttribute("value", products[i].quantity)
        quantityLabel.innerHTML = "Quantity:"

        const dateLabel = document.createElement("label");
        dateLabel.setAttribute("class", "date-label");
        const date = document.createElement("input");
        date.setAttribute("type", "date")
        date.setAttribute("value", new Date().toISOString().substring(0, 10));
        dateLabel.innerHTML = "Deliver date:"

      
        newProductDiv.appendChild(name);
        div.appendChild(quantityLabel);
        div.appendChild(quantity);
        div.appendChild(dateLabel);
        div.appendChild(date);
        newProductDiv.appendChild(div);
        productsDiv.appendChild(newProductDiv)
    }
})


