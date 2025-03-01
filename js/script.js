
// Theme
// document.querySelector(".theme-img").addEventListener("click", function(){
        // console.log('click')
// })
// 
    // const colors=['red', 'green', 
    // 'yellow', 'blue', 'pink', 'purple', 'gray', 'orange', 'cyan'
    // ]
//  Math.floor(Math.randor()*5) 
//  body.style.backgroundColor=colors[sum] ;
//    sum++;
//    if(sum>=colors.length){
    // sum=0
   
// })
const d=new Date();
let days=["Sun", "Mon", "Tues", "Wed", "Fri", "Sat"];
document.getElementById("name-date").innertext=days[d.getDay()];
document.getElementById("current-date").innerText=d.toLocaleDateString();


function changeThemeColor(){
    const randomColor='#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=randomColor;
    document.querySelector('.theme-img').addEventListener('click', changeThemeColor)
}

// blog part

document.getElementById("qa").addEventListener("click", function(){
    window.location.href="../questionAnswer.html"
});


// Task

const completeButtons=document.querySelectorAll(".complete-btn");
for(let i=0; i<completeButtons.length; i++){
    const completeBtn=completeButtons[i];
    completeBtn.addEventListener('click', function(event){
    alert('you are succesfully completed');
    const taskAssigned=parseInt(document.getElementById('decrease').innerText);
    const newTaskAssigned=Math.max(0,taskAssigned-1);
    document.getElementById('decrease').innerText=newTaskAssigned;
    const completeTask=parseInt(document.getElementById('increase').innerText);
    const newCompletedTask=Math.max(0,completeTask+1)
    document.getElementById('increase').innerText=newCompletedTask;

    // Activity log

    const parent=event.target.parentElement.parentElement;
    const title=parent.children[1].innerText;
    const log=document.getElementById('log');
    const times=new Date().toLocaleTimeString();
    const activity=document.createElement('p');
    log.innerHTML=
    `<p class=" bg-[#F4F7FF] p-3 rounded-[8px] mt-4">You have completed the task <span class="font-[700]">${title}</span> at ${times}</p>`;
     activity.appendChiled(log);

    });


}

