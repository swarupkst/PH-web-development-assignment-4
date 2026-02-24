let interviewJobs = [];
let rejectedJobs = [];
let currentTab = "all";
function count() {
    const allSubDivs = document.querySelectorAll('.sub-div');
    const totalApp = allSubDivs.length;
    const totalNum = document.getElementById('total-num');
    totalNum.innerText = totalApp;
    const totalSm = document.getElementById('total-numsm');

    if (currentTab === "all") {
        totalSm.innerText = totalApp;
    } else if (currentTab === "interview") {
        totalSm.innerText = interviewJobs.length;
    } else if (currentTab === "rejected") {
        totalSm.innerText = rejectedJobs.length;
    }

    return totalApp;
}

for (let i = 1; i <= 8; i++) {
    const mainDiv = document.getElementById('main-div');
    document.querySelector('.delete-btn' + i)
        .addEventListener('click', function () {

            document.querySelector('.card' + i).remove();
            count();

            const totalApp = count();

            const emptyMessage = `
    <div class="empty-state flex items-center justify-center flex-col bg-[#FFFFFF] p-10 m-4">
        <img src="./jobs.png" alt="No Job" class="w-40">
        <p class="mt-5 font-semibold text-2xl">No jobs Available</p>
        <p>Check back soon for new job opportunities</p>
    </div>
    `;

            if (totalApp === 0 && currentTab === "all") {
                mainDiv.innerHTML = emptyMessage;
            }
        });
}
count();


const allBtn = document.getElementById("all-job");
const interviewBtn = document.getElementById("interview-list");
const rejectBtn = document.getElementById("reject-list");

allBtn.onclick = function () {
    allBtn.classList.add("btn-active");
    interviewBtn.classList.remove("btn-active");
    rejectBtn.classList.remove("btn-active");
};

interviewBtn.onclick = function () {
    interviewBtn.classList.add("btn-active");
    allBtn.classList.remove("btn-active");
    rejectBtn.classList.remove("btn-active");
};

rejectBtn.onclick = function () {
    rejectBtn.classList.add("btn-active");
    allBtn.classList.remove("btn-active");
    interviewBtn.classList.remove("btn-active");
};

for (let i = 1; i <= 8; i++) {

    document.querySelector('.interview-btn' + i)
        .addEventListener('click', function () {
            const updateint = `<p class="inline-block px-[7px] bg-[#EEF4FF] text-green-600">INTERVIEW</p>`
            document.querySelector('.status-cng' + i).innerHTML = updateint;
        });

    document.querySelector('.reject-btn' + i)
        .addEventListener('click', function () {
            const updateint = `<p class="inline-block px-[13px]  bg-[#EEF4FF] text-red-600">REJECTED</p>`
            document.querySelector('.status-cng' + i).innerHTML = updateint;
        });
}





const interviewCount = document.getElementById("interview-num");
const rejectedCount = document.getElementById("rejected-num");


function updateDashboard() {
    interviewCount.innerText = interviewJobs.length;
    rejectedCount.innerText = rejectedJobs.length;
}

function filterCards(tab) {

    for (let i = 1; i <= 8; i++) {

        const card = document.querySelector('.card' + i);
        if (!card) continue;

        if (tab === "all") {
            card.style.display = "block";
        }

        else if (tab === "interview") {
            card.style.display = interviewJobs.includes(card) ? "block" : "none";
        }

        else if (tab === "rejected") {
            card.style.display = rejectedJobs.includes(card) ? "block" : "none";
        }
    }
    showTabEmptyMessage();
}


function showTabEmptyMessage() {

    const mainDiv = document.getElementById("main-div");

    const oldEmpty = document.querySelector(".tab-empty");
    if (oldEmpty) oldEmpty.remove();

    if ((currentTab === "interview" && interviewJobs.length === 0) ||
        (currentTab === "rejected" && rejectedJobs.length === 0)) {

        const emptyMessage = document.createElement("div");
        emptyMessage.className =
            "tab-empty empty-state flex items-center justify-center flex-col bg-[#FFFFFF] p-10 m-4";

        emptyMessage.innerHTML = `
            <img src="./jobs.png" alt="No Job" class="w-40">
            <p class="mt-5 font-semibold text-2xl">No jobs Available</p>
            <p>Check back soon for new job opportunities</p>
        `;

        mainDiv.appendChild(emptyMessage);
    }
}


allBtn.addEventListener("click", function () {
    currentTab = "all";
    filterCards("all");
    count();
});

interviewBtn.addEventListener("click", function () {
    currentTab = "interview";
    filterCards("interview");
    count();
});

rejectBtn.addEventListener("click", function () {
    currentTab = "rejected";
    filterCards("rejected");
    count();
});


for (let i = 1; i <= 8; i++) {

    const card = document.querySelector('.card' + i);
    if (!card) continue;

    const interviewButton = document.querySelector('.interview-btn' + i);
    const rejectButton = document.querySelector('.reject-btn' + i);
    const deleteButton = document.querySelector('.delete-btn' + i);

    interviewButton.addEventListener("click", function () {

        if (!interviewJobs.includes(card)) {
            interviewJobs.push(card);
        }

        rejectedJobs = rejectedJobs.filter(c => c !== card);

        updateDashboard();
        filterCards(currentTab);
        count();
    });


    rejectButton.addEventListener("click", function () {

        if (!rejectedJobs.includes(card)) {
            rejectedJobs.push(card);
        }

        interviewJobs = interviewJobs.filter(c => c !== card);

        updateDashboard();
        filterCards(currentTab);
        count();
    });


    deleteButton.addEventListener("click", function () {

        interviewJobs = interviewJobs.filter(c => c !== card);
        rejectedJobs = rejectedJobs.filter(c => c !== card);

        updateDashboard();

        card.remove(); 

        const allCount = document.querySelectorAll('.sub-div').length;

        if (allCount === 0 && currentTab === "all") {
            const mainDiv = document.getElementById('main-div');
            mainDiv.innerHTML = `
                <div class="empty-state flex items-center justify-center flex-col bg-[#FFFFFF] p-10 m-4">
                    <img src="./jobs.png" alt="No Job" class="w-40">
                    <p class="mt-5 font-semibold text-2xl">No jobs Available</p>
                    <p>Check back soon for new job opportunities</p>
                </div>
            `;
        } 
        else {
            setTimeout(() => {
                filterCards(currentTab);
                count(); 
            });
        }

    });
}


updateDashboard();
count();