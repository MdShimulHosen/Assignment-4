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
const filteredSection = document.getElementById('filtered-section');


function calculateCount(){
    totalCount.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList;
}
calculateCount();

function togglestyle(id){
    allBtn.classList.remove('bg-primary', 'text-white');
    interviewBtn.classList.remove('bg-gray-300', 'text-white');
    rejectedBtn.classList.remove('bg-gray-300', 'text-white');

    allBtn.classList.add('bg-gray-300', 'text-black');
    interviewBtn.classList.add('bg-gray-300', 'text-black');
    rejectedBtn.classList.add('bg-gray-300', 'text-black');

    const selected = document.getElementById(id);

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-primary', 'text-white');
}


main.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const mobile = parentNode.querySelector('.mobile').innerText;
    const react = parentNode.querySelector('.react').innerText;
    const remote = parentNode.querySelector('.remote').innerText;
    const build = parentNode.querySelector('.build').innerText;
    const btnbtn = parentNode.querySelector('.btnbtn').innerText;
    
    const cardInfo = {
        mobile,
        react,
        remote,
        build,
        btnbtn,
    }

    const mobileExist = interviewList.find(item=>item.mobile == cardInfo)
    if(!mobileExist){
        interviewList.push(cardInfo);
    }
    console.log(interviewList);

    renderInterview();



})

function renderInterview (){
    filteredSection.innerHTML = ""

    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className = ' w-[1110px] mx-auto';
        div.innerHTML = `            <div id="card1" class="card">
                <div class="w-[1110px] h-[280px] p-[24px] bg-gray-100 rounded-[5px] mb-[8px]">
                    <div class="flex justify-between">
                        <h3 class=" mobile text-[20px] font-semibold mb-[2px]">Mobile First Corp</h3>
                        <button class="btn rounded-full w-[32px] h-[32px] opacity-50"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                <p class=" react mb-[20px]">React Native Developer</p>
                <p class="remote mb-[20px]">Remote • Full-time • $130,000 - $175,000</p>
                <button class=" not btn border-[2px] font-medium text-[14px] px-[12px] py-[8px] w-[120px] h-[36px] mb-[8px]">NOT APPLIED</button>
                <p class="build mb-[20px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                <div class="btnbtn">
                    <button class="btn border-[2px] font-semibold text-[14px] border-green-800 text-green-800 px-[12px] py-[8px] w-[100px] h-[36px]">INTERVIEW</button>
                    <button class="btn border-[2px] font-semibold text-[14px] border-red-800 text-red-800 px-[12px] py-[8px] w-[97px] h-[36px]">REJECTED</button>
                </div>
                </div>
        
        `
    }
}
