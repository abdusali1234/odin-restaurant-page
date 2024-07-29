export default function loadContact () {
    const content = document.getElementById('content');
    content.innerHTML = "";


    const title = document.createElement('h1');
    title.innerText = "Contact Us";
    content.appendChild(title);

    const emailSection = document.createElement('section');
    emailSection.setAttribute('id', 'email-info');

    emailSection.innerHTML = `
            <h2>Email</h2>
            <p>affas@saa.co.uk</p>            
            `;
    content.appendChild(emailSection);

    const addressSection = document.createElement('section');
    addressSection.setAttribute('id', 'address-info');
    addressSection.innerHTML = `
            <h2>Address</h2>
            <p>123 Candleburner Alley</p>
            <p>London EC1 1AB</p>
            `;

    content.appendChild(addressSection);  
}