import Pic from './chai.jpg';

export default function loadHome () {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const chaiPic = new Image();
    chaiPic.src = Pic;
    content.appendChild(chaiPic);

    const title = document.createElement('h1');
    title.innerText = "Affa's Saa";
    content.appendChild(title);

    const about = document.createElement('section');
    about.setAttribute("id", "about");
    about.innerHTML = `
            <p>Welcome to Affa's Saa, the best Chai cafe in the UK!
            We source our organic tea leaves from the lush tree gardens of Sylhet.
            We support the women who pick our premium tea leaves, learn more <a href="#">here</a>.
            </p>`;
    content.appendChild(about);

    const openHours = document.createElement('section');
    openHours.setAttribute("id", "opening-hours");
    const hoursHeading = document.createElement('h2');
    hoursHeading.innerText = "Hours";
    openHours.appendChild(hoursHeading);
    const hoursTable = document.createElement("table");
    hoursTable.setAttribute("id", "hours-table");
    hoursTable.innerHTML = `
            <tr>
                <th>Day</th>
                <th>Opening Time</th>
                <th>Closing Time</th>
            </tr>
            <tr>
                <td>Monday</td>
                <td>8am</td>
                <td>6pm</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>8am</td>
                <td>6pm</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>8am</td>
                <td>6pm</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>8am</td>
                <td>6pm</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>8am</td>
                <td>6pm</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>8am</td>
                <td>6pm</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>10am</td>
                <td>4pm</td>
            </tr>
            `
    openHours.appendChild(hoursTable);
    content.appendChild(openHours);
}