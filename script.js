function count() {
    const allSubDivs = document.querySelectorAll('.sub-div');
    const totalApp = allSubDivs.length;
    const totalNum = document.getElementById('total-num');
    totalNum.innerText = totalApp;
    const totalSm = document.getElementById('total-numsm');
    totalSm.innerText = totalApp;

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

            if (totalApp === 0) {
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


