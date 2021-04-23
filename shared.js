const backdrop = document.querySelector('.backdrop');
// console.dir(backdrop)

let selectPlanButtons = document.querySelectorAll('.plan .button');
let modal = document.querySelector('.modal');


for (let i = 0; selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })

}
//function to remove modal
function hidemodal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}