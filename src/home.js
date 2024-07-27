import Pic from './chai.jpg';

export default function loadHome () {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const chaiPic = new Image();
    chaiPic.src = Pic;
    content.appendChild(chaiPic);

    const title = document.createElement('h1');
    title.innerHTML = "Affa's Saa";
    content.appendChild(title);

    const about = document.createElement('p');
    about.innerHTML = `
            Welcome to Affa's Saa, the best Chai cafe in the UK!
            We source our organic tea leaves from the lush tree gardens of Sylhet.
            We support the women who pick our premium tea leaves, learn more <a href="#">here</a>.
            `;
    content.appendChild(about);
}