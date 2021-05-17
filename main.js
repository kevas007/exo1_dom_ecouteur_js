let h1 = document.querySelector('h1');



function myfunction() {
    h1.addEventListener('click', () => {
        h1.setAttribute('style', 'color : blue;');
    })
}
myfunction()