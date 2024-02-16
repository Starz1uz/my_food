let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')

function open_close_modal(arr, open) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList.toggle('show');
            modal.classList.toggle('fade');
            document.body.style.overflow = open ? "hidden" : "scroll";
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)

let timer = document.querySelector('.timer')

const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

setInterval(() => {
    seconds.innerHTML--
    if (seconds.innerHTML <= -1) {
        seconds.innerHTML = 59
        minutes.innerHTML--
    }

}, 1000);

const offer__slider = document.querySelectorAll('.offer__slide')
const prev_next_btn = document.querySelectorAll('[data-group]')
const idx_btn = document.querySelector('#current')
let tnt = 0

show(tnt)
function show(n) {
    if (n >= offer__slider.length) {
        tnt = 0
    }

    if (n < 0) {
        tnt = offer__slider.length - 1
    }

    offer__slider.forEach(slide => slide.classList.add('hide'))
    offer__slider[tnt].classList.remove('hide')
}

prev_next_btn.forEach(btn => {
    btn.onclick = () => {
        const act = btn.getAttribute('data-group')

        if (act === 'prev') {
            tnt--
            idx_btn.innerHTML = tnt
            show(tnt)
        } else {
            tnt++
            idx_btn.innerHTML = tnt

            show(tnt)
        }
    }

})

const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')

function ShowTabs(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide'))
    tabcontent[idx].classList.remove('hide')
}

ShowTabs(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')
        ShowTabs(idx)
    }
})
const gender_btns = document.querySelectorAll('#gender div');
const inputs = document.querySelectorAll('.calculating__choose_medium input');
const viue = document.querySelector('#viue');
const cardio_btns = document.querySelectorAll('.calculating__subtitle div');

let user = {
    gender: 'woman'
};


gender_btns.forEach(btn => {
    btn.onclick = () => {

        gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'));

        btn.classList.add('calculating__choose-item_active');

        user.gender = btn.getAttribute('data-g');
    };
});

inputs.forEach(inp => {
    inp.oninput = () => {
        user[inp.id] = inp.value;
    };
});

cardio_btns.forEach(btn => {
    btn.onclick = () => {
        let cardio = btn.getAttribute('data-cardio');

        cardio_btns.forEach(el => el.classList.remove('calculating__choose-item_active'));

        btn.classList.add('calculating__choose-item_active');


        if (user.gender === 'woman') {
            let result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age);
            viue.innerHTML = Math.round(result * cardio);
        } else {
            let result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age);
            viue.innerHTML = Math.round(result * cardio);
        }
    };
});
