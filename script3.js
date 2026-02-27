
let currentTab = "all";
const tabActive = ["bg-black", "border-navy", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700",  "border-state-200", "text-black"];

const allContainer = document.getElementById("job-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");

function switchTab(tab){
    //console.log(tab);
    const tabs = ["all", "interview" , "rejected"];

    for(const t of tabs){
        const tabName = document.getElementById("tab-"+ t); 
        if( t === tab ){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else { 
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive);

        }
    }
    const pages = [allContainer, interviewContainer, rejectedContainer];
    for(const section of pages){
        section.classList.add("hidden");
    }

    emptyState.classList.add("hidden");

    if(tab==="all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1 ){
            emptyState.classList.remove("hidden")
        }
    } else if (tab==="interview"){
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1 ){
            emptyState.classList.remove("hidden")
        }
    } else{
        rejectedContainer.classList.remove("hidden");
        if(rejectedContainer.children.length < 1 ){
            emptyState.classList.remove("hidden")
        }
    }
}

//counts
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');





switchTab(currentTab);

document.getElementById('allJobs-container').addEventListener('click',function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
    const parent = card.parentNode;
    console.log(parent);
    
    if(clickedElement.classList.contains("interview")){
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        updateCount()
    }
    if(clickedElement.classList.contains("rejected")){
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        updateCount()
    }
    if(clickedElement.classList.contains("delete1")){
        parent.removeChild(card);
        updateCount
    }

} )

function updateCount(){
    //totalCount.innerText = allContainer.children.length;
    //interviewCount.innerText = interviewContainer.children.length;
    //rejectedCount.innerText =  rejectedContainer.children.length;

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    }

    totalCount.innerText= counts["all"];
    interviewCount.innerText= counts["interview"];
    rejectedCount.innerText= counts["rejected"];

}

updateCount();