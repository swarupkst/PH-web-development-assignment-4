function count(){
const allSubDivs = document.querySelectorAll('.sub-div');
const totalApp = allSubDivs.length;
const totalNum = document.getElementById('total-num');
totalNum.innerText = totalApp;
const totalSm = document.getElementById('total-numsm');
totalSm.innerText = totalApp;

return totalApp;
//console.log(allSubDivs.length);
}

// document.querySelector('.delete-btn1').addEventListener('click', function() {
//     document.querySelector('.card1').remove();
//     count()
// });

// document.querySelector('.delete-btn2').addEventListener('click', function() {
//     document.querySelector('.card2').remove();
//     count()
// });

// document.querySelector('.delete-btn3').addEventListener('click', function() {
//     document.querySelector('.card3').remove();
//     count()
// });
// document.querySelector('.delete-btn4').addEventListener('click', function() {
//     document.querySelector('.card4').remove();
//     count()
// });
// document.querySelector('.delete-btn5').addEventListener('click', function() {
//     document.querySelector('.card5')
//     .remove();
//     count()
// });
// document.querySelector('.delete-btn6').addEventListener('click', function() {
//     document.querySelector('.card6').remove();
//     count()
// });
// document.querySelector('.delete-btn7').addEventListener('click', function() {
//     document.querySelector('.card7').remove();
//     count()
// });
// document.querySelector('.delete-btn8').addEventListener('click', function() {
//     document.querySelector('.card8').remove();
//     count()
// });
for (let i = 1; i <= 8; i++) {
const mainDiv = document.getElementById('main-div');
    document.querySelector('.delete-btn' + i)
    .addEventListener('click', function() {

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








// window.addEventListener("DOMContentLoaded", () => {

//     //const mainDiv = document.getElementById("main-div");

//     const totalNum = document.getElementById("total-num");
//     const totalNumSm = document.getElementById("total-numsm");
//     const interviewNum = document.getElementById("interview-num");
//     const rejectedNum = document.getElementById("rejected-num");

//     const interviewListBtn = document.getElementById("interview-list");
//     const rejectListBtn = document.getElementById("reject-list");
//     const allJobBtn = document.getElementById("all-job");

//     function updateTotal() {
//         const total = document.querySelectorAll(".sub-div").length;
//         totalNum.textContent = total;
//         totalNumSm.textContent = total;
//     }

//     updateTotal();

//     mainDiv.addEventListener("click", function (e) {

//         const card = e.target.closest(".sub-div");
//         if (!card) return; // safety: ignore clicks outside cards

//         const status = card.querySelector(".status-cng");
//         if (!status) return; // safety: ignore if status element missing

//         // 🔹 INTERVIEW BUTTON
//         if (e.target.closest(".interview-btn")) {
//             if (status.textContent !== "INTERVIEW") {
//                 if (status.textContent === "REJECTED") {
//                     rejectedNum.textContent = parseInt(rejectedNum.textContent) - 1;
//                 }

//                 status.textContent = "INTERVIEW";
//                 status.classList.remove("bg-[#EEF4FF]", "bg-red-100", "text-red-600");
//                 status.classList.add("bg-green-100", "text-green-600");

//                 interviewNum.textContent = parseInt(interviewNum.textContent) + 1;
//             }
//         }

//         // 🔹 REJECT BUTTON
//         if (e.target.closest(".reject-btn")) {
//             if (status.textContent !== "REJECTED") {
//                 if (status.textContent === "INTERVIEW") {
//                     interviewNum.textContent = parseInt(interviewNum.textContent) - 1;
//                 }

//                 status.textContent = "REJECTED";
//                 status.classList.remove("bg-[#EEF4FF]", "bg-green-100", "text-green-600");
//                 status.classList.add("bg-red-100", "text-red-600");

//                 rejectedNum.textContent = parseInt(rejectedNum.textContent) + 1;
//             }
//         }

//         // 🔹 DELETE BUTTON
//         if (e.target.closest(".delete-btn")) {
//             // reduce counters if needed
//             if (status.textContent === "INTERVIEW") {
//                 interviewNum.textContent = parseInt(interviewNum.textContent) - 1;
//             } else if (status.textContent === "REJECTED") {
//                 rejectedNum.textContent = parseInt(rejectedNum.textContent) - 1;
//             }

//             card.remove();
//             updateTotal();
//         }

//     });

//     // 🔹 Filter Buttons
//     interviewListBtn.addEventListener("click", () => {
//         document.querySelectorAll(".sub-div").forEach(card => {
//             const statusEl = card.querySelector(".status-cng");
//             const status = statusEl ? statusEl.textContent : "";
//             card.style.display = status === "INTERVIEW" ? "block" : "none";
//         });
//     });

//     rejectListBtn.addEventListener("click", () => {
//         document.querySelectorAll(".sub-div").forEach(card => {
//             const statusEl = card.querySelector(".status-cng");
//             const status = statusEl ? statusEl.textContent : "";
//             card.style.display = status === "REJECTED" ? "block" : "none";
//         });
//     });

//     allJobBtn.addEventListener("click", () => {
//         document.querySelectorAll(".sub-div").forEach(card => {
//             card.style.display = "block";
//         });
//     });

// });