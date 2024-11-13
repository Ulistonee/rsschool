document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let shiftArray;

    let obj = {
        currentIndex: 0
    }

    let proxy = new Proxy(obj, {
        set(target, property, value) {
            if (property === 'currentIndex' && target[property] !== value) {
                updateSlider(value);
            }
            target[property] = value;
            return true;
        }
    });

    const updateSlider = (currentIndex) => {
        slider.style.transform = `translateX(-${shiftArray[currentIndex]}px)`;
        if (currentIndex === 0) {
            prevButton.disabled = true;
            nextButton.disabled = false;
        }
        else if (currentIndex === shiftArray.length - 1) {
            nextButton.disabled = true;
            prevButton.disabled = false;
        }
        else if (currentIndex > 0 && currentIndex < shiftArray.length - 1) {
            prevButton.disabled = false;
            nextButton.disabled = false;
        }
    };

    const generateShiftArray = (sliderLineWidth, sliderVisibleArea, clicksNeeded) => {
        const lineLeft = sliderLineWidth - sliderVisibleArea;
        console.log('generate', sliderLineWidth, sliderVisibleArea, lineLeft, document.getElementById('slider').scrollWidth)
        const shift = Math.floor(lineLeft / (clicksNeeded));
        return Array.from(Array(clicksNeeded)).reduce((acc, item, index) => {
            if (index < clicksNeeded - 1) {
                return [...acc, shift + acc.at(-1)]
            }
            return [...acc, lineLeft]
        }, [0])
    }

    const calculateShiftValues = () => {
        const clicksNeeded = window.innerWidth >= 768 ? 3 : 6;
        shiftArray = generateShiftArray(slider.scrollWidth, slider.offsetWidth, clicksNeeded);
    };

    calculateShiftValues();

    window.addEventListener('resize', () => {
        calculateShiftValues();
        proxy.currentIndex = 0;
    });

    nextButton.addEventListener('click', () => {
        proxy.currentIndex++;
    });

    prevButton.addEventListener('click', () => {
        proxy.currentIndex--;
    });
});
