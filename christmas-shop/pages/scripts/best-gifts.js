import {gifts} from '../data/data.js';
import {classCategory} from "../utilities/utilities.js";
import {getRandomCards} from "../utilities/utilities.js";

function displayCards() {
    const randomCards = getRandomCards(gifts, 4);
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    randomCards.forEach(card => {
        const giftCard = document.createElement("li");
        giftCard.className = "gift-card";
        const img = document.createElement('img');
        img.className = 'gift-img';
        img.src = card.src;
        giftCard.appendChild(img);
        const div = document.createElement('div');
        div.className = "gift-card-text-container";
        const h4 = document.createElement('h4');
        h4.className = "header4";
        h4.classList.add(classCategory(card.category));
        h4.textContent = card.category;
        const h3 = document.createElement('h3');
        h3.className = "header3 truncate";
        h3.textContent = card.name;
        div.appendChild(h4);
        div.appendChild(h3);
        giftCard.appendChild(div);
        gallery.appendChild(giftCard);
    });
}

displayCards();
