import {gifts} from "../data/data.js";
import {classCategory} from "../utilities/utilities.js";
import {getRandomCards} from "../utilities/utilities.js";

function displayCards(category) {
    const container = document.getElementById("gift-card-container");
    container.innerHTML = "";

    const filteredCards = category === "all" ? getRandomCards(gifts, 36) : gifts.filter(card => card.category === category);

    filteredCards.forEach(card => {
        const giftCard = document.createElement("li");
        giftCard.className = "gift-card";
        giftCard.setAttribute('data-name', card.name);
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
        container.appendChild(giftCard);
    });
}

function switchCategory(event) {
    if (event.target.classList.contains("tab-item")) {
        const selectedCategory = event.target.getAttribute("data-category");

        document.querySelectorAll(".tab-item").forEach(tab => tab.classList.remove("active"));

        event.target.classList.add("active");

        displayCards(selectedCategory);
    }
}

document.getElementById("tabs-container").addEventListener("click", switchCategory);

displayCards("all");
