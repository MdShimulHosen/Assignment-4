let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const main = document.querySelector('main');
const cardContainer = document.getElementById('card-container');


function calculateCount(){
    totalCount.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList;
}
calculateCount();

function togglestyle(id){
    allBtn.classList.remove('bg-black', 'text-white');
    interviewBtn.classList.remove('bg-black', 'text-white');
    rejectedBtn.classList.remove('bg-black', 'text-white');

    allBtn.classList.add('bg-gray-300', 'text-black');
    interviewBtn.classList.add('bg-gray-300', 'text-black');
    rejectedBtn.classList.add('bg-gray-300', 'text-black');
}
