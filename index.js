// const id = window.location.hash.substring(1);
// console.log(id);
const productInfoKcliquors = document.getElementById('product-info-kcliquors');
const productInfoConnect4 = document.getElementById('product-info-connect4');
const productInfoKristimadeit = document.getElementById('product-info-kristimadeit');

const slides = document.getElementById("slides");

const kcliquors = document.getElementById('kcliquors-btn');
const connect4 = document.getElementById('connect4-btn');
const kristimadeit = document.getElementById('kristimadeit-btn');

productInfoKcliquors.hidden = false;
productInfoConnect4.hidden = true;
productInfoKristimadeit.hidden = true;

let link = "http://kcliquors.kenneth-barker.com"

kcliquors.addEventListener('click', (e) => {
    productInfoKcliquors.hidden = false;

    productInfoConnect4.hidden = true;
    productInfoKristimadeit.hidden = true;

    link = "http://kcliquors.kenneth-barker.com"
});
connect4.addEventListener('click', (e) => {
    productInfoConnect4.hidden = false;

    productInfoKcliquors.hidden = true;
    productInfoKristimadeit.hidden = true;

    link = "http://connect4.kenneth-barker.com"
});
kristimadeit.addEventListener('click', (e) => {
    productInfoKristimadeit.hidden = false;

    productInfoKcliquors.hidden = true;
    productInfoConnect4.hidden = true;

    link = "http://kristimadeit.com"
});

slides.addEventListener('click', (e) => {
    window.open(link, '_blank');
})

