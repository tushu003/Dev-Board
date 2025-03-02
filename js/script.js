// Current date

const d=new Date();
let days=["Sun", "Mon", "Tues", "Wed", "Fri", "Sat"];
document.getElementById("name-date").innertext=days[d.getDay()];
document.getElementById("current-date").innerText=d.toDateString();

// blog part

document.getElementById("qa").addEventListener("click", function(){
    window.location.href="../questionAnswer.html"
});


// Task

const completeButtons=document.querySelectorAll(".complete-btn");
for(let i=0; i<completeButtons.length; i++){
    const completeBtn=completeButtons[i];
    completeBtn.addEventListener('click', function(event){
    alert('Board updated succesfully');

    const decreaseElement=document.getElementById("decrease");
    const increaseElement=document.getElementById("increase");
    if(decreaseElement && increaseElement){
    const taskAssigned=parseInt(document.getElementById('decrease').innerText);
    const newTaskAssigned=Math.max(0,taskAssigned-1);
    console.log(newTaskAssigned)
    document.getElementById('decrease').innerText=newTaskAssigned;
    const completeTask=parseInt(document.getElementById('increase').innerText);
    const newCompletedTask=completeTask+1;
    
    document.getElementById('increase').innerText=newCompletedTask;
    }
    const parent=event.target.parentElement.parentElement;
    const title=parent.children[1]?.innerText;
    const log=document.getElementById('log');
    const times=new Date().toLocaleTimeString();
    const activity=document.createElement('p');
    activity.innerHTML=
    `<p class=" bg-[#F4F7FF] p-3 rounded-[8px] mt-4">You have completed the task <span class="font-[700]">${title}</span> at ${times}</p>`;
     log.appendChild(activity);
    

    let newTaskAssigned = 0;

    if (decreaseElement) {
    let taskAssigned = parseInt(decreaseElement.innerText);
    newTaskAssigned = Math.max(0, taskAssigned );
    decreaseElement.innerText = newTaskAssigned;

    const button = event.target;
    button.disabled = true;
    button.style.backgroundColor = "#c0c0c0";

    // Check if all tasks are completed
    if (newTaskAssigned === 0){
            alert("Congrats!! You have completed all the current tasks");
    }
}
     

    });


}

// clear history

document.getElementById("clear-button").addEventListener("click",function(){
    log.innerHTML=""
})

