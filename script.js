
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");


function togglestyle(id) {

    
    allBtn.classList.remove("bg-primary", "text-white");
    interviewBtn.classList.remove("bg-primary", "text-white");
    rejectedBtn.classList.remove("bg-primary", "text-white");

    allBtn.classList.add("bg-gray-300", "text-black");
    interviewBtn.classList.add("bg-gray-300", "text-black");
    rejectedBtn.classList.add("bg-gray-300", "text-black");

    
    const activeBtn = document.getElementById(id);
    activeBtn.classList.remove("bg-gray-300", "text-black");
    activeBtn.classList.add("bg-primary", "text-white");

    const cards = document.querySelectorAll(".card");

}

Cards();
updateTotal();
updateCount();
togglestyle("all-btn");


function Cards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if (!card.getAttribute("data-status")) {
            card.setAttribute("data-status", "all");
        }

        const interviewButton = card.querySelector(".border-green-800");
        const rejectedButton = card.querySelector(".border-red-800");
        const deleteButton = card.querySelector(".fa-trash-can");
        const statusButton = card.querySelector(".btn.border-\\[2px\\]");

        interviewButton.addEventListener("click", function () {

            card.setAttribute("data-status", "interview");

            statusButton.innerText = "INTERVIEW";
            statusButton.classList.remove("border-red-800", "text-red-800");
            statusButton.classList.add("border-green-800", "text-green-800");

            updateCount();
        });

        rejectedButton.addEventListener("click", function () {

            card.setAttribute("data-status", "rejected");

            statusButton.innerText = "REJECTED";
            statusButton.classList.remove("border-green-800", "text-green-800");
            statusButton.classList.add("border-red-800", "text-red-800");

            updateCount();
        });

        deleteButton.addEventListener("click", function () {

            card.remove();

            updateTotal();
            updateCount();
        });
    });
}

// ===============================
// Update Total Count
// ===============================
function updateTotal() {
    const cards = document.querySelectorAll(".card");
    totalCount.innerText = cards.length;
}

// ===============================
// Update Interview / Rejected
// ===============================
function updateCount() {

    const cards = document.querySelectorAll(".card");

    let interview = 0;
    let rejected = 0;

    cards.forEach(card => {

        if (card.getAttribute("data-status") === "interview") {
            interview++;
        }

        if (card.getAttribute("data-status") === "rejected") {
            rejected++;
        }
    });

    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
}
