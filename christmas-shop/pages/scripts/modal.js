import {gifts} from "../data/data.js";

const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");
const giftCardContainer = document.getElementById("gift-card-container");

function fillStars(points, id){
    const pointsForCycle = Math.floor(Number(points) / 100);
    console.log(pointsForCycle)
    const span = document.querySelector(`#${id} ~ span`);
    const svgsAfterSpan = span.querySelectorAll('svg');
    svgsAfterSpan.forEach((svg, index) => {
        svg.style.fill = "#ff46461a";
        if (index < pointsForCycle){
            svg.style.fill = "#ff4646";
        }
    })
}

function openModal(json) {
    const img = document.getElementById('modalImg');
    const category = document.getElementById('modalCategory');
    const name = document.getElementById('modalName');
    const description = document.getElementById('modalDescription');

    img.src = json.src;
    category.textContent = json.category;
    name.textContent = json.name;
    description.textContent = json.description;

    document.getElementById("livePower").textContent = json.superpowers.live;
    document.getElementById("createPower").textContent = json.superpowers.create;
    document.getElementById("lovePower").textContent = json.superpowers.love;
    document.getElementById("dreamPower").textContent = json.superpowers.dream;

    fillStars(json.superpowers.live, 'livePower');
    fillStars(json.superpowers.create, 'createPower');
    fillStars(json.superpowers.love, 'lovePower');
    fillStars(json.superpowers.dream, 'dreamPower');
    modalOverlay.classList.add("active");
}
function closeModal() {
    modalOverlay.classList.remove("active");
}

giftCardContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".gift-card");
    console.log(event.target)
    if (card) {
        openModal(gifts.find(item => item.name === card.dataset.name));
    }
});

closeModalBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

