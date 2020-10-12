const label = document.querySelectorAll('label');

label.forEach(one => one.addEventListener('click', sizeSelected));

function sizeSelected(e) {
    label.forEach(one => (one.style.border = "1px solid #ddd"));
    e.target.style.border = "1px solid black";
    console.log(e.target.textContent)
}
