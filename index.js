const kata = 'HALLO'; //silahkan di ganti dengan kata yang anda inginkan
const katmut = 'Aku ada hadiah untuk kamu !!'; //silahkan di ganti dengan kata yang anda inginkan





document.body.style.overflow = "hidden"

const tempatKata = document.getElementsByClassName('greetings');
tempatKata[0].innerHTML = "";
const tempatUcapan = document.getElementsByClassName('katmut');
tempatUcapan[0].textContent = katmut;
let index = 0;
function buatSpan() {
    if (index < kata.length) {
        let spanAu = document.createElement('span');
        spanAu.textContent = kata[index];
        tempatKata[0].appendChild(spanAu);
        spanAu.style.animationDelay =  index +"00" + 'ms';
        index++;
        buatSpan();
    }
}
buatSpan();