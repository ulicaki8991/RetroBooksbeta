let state = -1;

let infoObj = document.querySelector('#info');
let fade = document.querySelector('#fader');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyI') {
        PopupAct();
    }
});

async function PopupAct() {
    if (state === -1) {
        state *= -1;
        let fader = document.querySelector("#fader");
        fader.classList.toggle('hidden');
        fader.classList.remove("bg-[#00000000]");
        sleep(10).then(() => { fader.classList.add("bg-[#000000b6]"); });


    }
    else {
        ClosePopup();
    }
}
infoObj.addEventListener('click', PopupAct, false);
fade.addEventListener('click', ClosePopup, false);
//window.addEventListener('keydown', PopupAct, false);


function ClosePopup() {
    state *= -1;
    // fader.classList.toggle('bg-[#000000b6]');
    let fader = document.querySelector("#fader");
    fader.classList.remove("bg-[#000000b6]");
    fader.classList.add("bg-[#00000000]");
    fader.classList.toggle('hidden');


}

let buttoni = document.querySelector("#close").addEventListener('click', () => {
    ClosePopup();
}); 