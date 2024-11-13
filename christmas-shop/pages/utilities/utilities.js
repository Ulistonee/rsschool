export function classCategory(category){
    if (category === "For Work"){
        return 'for-work';
    }
    else if (category === "For Health"){
        return 'for-health';
    }
    else if (category === "For Harmony"){
        return 'for-harmony';
    }
}

export function getRandomCards(cards, count) {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
