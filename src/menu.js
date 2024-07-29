export default function loadMenu () {
    const content = document.getElementById('content');
    content.innerHTML = "";


    const title = document.createElement('h1');
    title.innerText = "Menu";
    content.appendChild(title);

    const beverages = document.createElement('section');
    beverages.setAttribute("id", "beverages");
    const beveragesHeading = document.createElement("h2");
    beveragesHeading.innerText = "Beverages";
    beverages.appendChild(beveragesHeading);

    const drinks =[
        {name: "Black Tea", price: "£1.75"},
        {name: "Karack Chai", price: "£2.50"},
        {name: "Gur Chai", price: "£3.25"},
        {name: "Masala Chai", price: "£3.25"},
        {name: "Turmeric Latte", price: "£3.50"},
        {name: "Double Shot Espresso Nespresso Macchiato Molto Bene Supreme", price: "£5"}
    ];

    const drinksTable = document.createElement("table");
    drinksTable.setAttribute("id", "drinks-table");
    drinksTable.innerHTML = `
            <tr>
                <th>Drink</th>
                <th>Price</th>
            </tr>
            `;
    drinks.forEach((drink) => {
        const drinksRow = `
                <tr>
                    <td>${drink.name}</td>
                    <td>${drink.price}</td>
                </tr>
                `;
        drinksTable.innerHTML += drinksRow;
    });
    beverages.appendChild(drinksTable);
    content.appendChild(beverages);   
}