const buttons = document.getElementsByClassName("drum");

const buttonDrumDictionary = {
    w: 'crash',
    a: 'kick-bass',
    s: 'snare',
    d: 'tom-1',
    j: 'tom-2',
    k: 'tom-3',
    l: 'tom-4'
}

async function playAudio(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    await audio.play();
}

function buttonAnimation(button) {
    const activeButton = document.querySelector(`.${button}`);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}

for(let button of buttons){
    button.addEventListener('click', async function () {
        const buttonInnerHTML = this.innerHTML;
        await playAudio(buttonDrumDictionary[buttonInnerHTML]);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener('keypress', async function(event) {
    const keyStroke = event.key;
    await playAudio(buttonDrumDictionary[keyStroke]);
    buttonAnimation(keyStroke);
})

