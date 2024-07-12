let sidenav = 0;
let termination = 0;
let temp;
let currentPaper;
let currentCategory=1;
function user(){
    window.addEventListener("blur", () => {
        if(new URL(window.location['href']).hostname!=''){
            showAlert(`You should change window ${termination+1} time, please stop move otherwise your exam should cancel.`);
            termination++;
        }
    });
    window.addEventListener("focus", () => {
        if(new URL(window.location['href']).hostname!=''){
            if(termination>3 && termination<5){
                alert("Your exam is cancelled for unwanted movement!");
            }
        }
    });
    setExamData();
    if(deviceCheck()!=2){
        toggleSidenav();
    }
}
function questionList(){
    temp = '';
    let start,end;
    if(currentPaper.section[0][0]==exam.questions.length-1){
        start = 0;
        end = exam.questions.length;
    }else{
        start = currentCategory==1?0:currentPaper.section[currentCategory-2][0];
        end = currentPaper.section[currentCategory-1][0];
    }
    for(let i=start; i<end; i++){ 
        if(solveList[i][2]!=null){
            temp += `<div class="question-item btn bg-green" onclick="populate(${i+1})">${i+1}</div>`;
        }else{
            if(solveList[i][1]!=null){
                temp += `<div class="question-item btn bg-red" onclick="populate(${i+1})">${i+1}</div>`;
            }else{
                temp += `<div class="question-item btn bg-white" onclick="populate(${i+1})">${i+1}</div>`;
            }
        }
    }
    document.querySelector(".question-list").innerHTML = temp;
}
function toggleSidenav(){
    if(sidenav==0){
        if(deviceCheck()!=2){
            document.querySelector(".right-component").style.width = "0%";
            document.querySelector(".sidenav-toggler").style.position = "absolute";
            document.querySelector(".sidenav-toggler").style.top = "58%";
            document.querySelector(".sidenav-toggler").style.left = "90%";
            setTimeout(()=>{
                document.querySelector(".right-component").style.display = "none";
            },1000);
        }else{
            document.querySelector(".right-component").style.width = "0%";
            document.querySelector(".left-component").style.width = "100%"; 
            document.querySelector(".sidenav-toggler").style.position = "absolute";
            document.querySelector(".sidenav-toggler").style.top = "58%";
            document.querySelector(".sidenav-toggler").style.left = "98%";
        }
        document.querySelector(".sidenav-toggler").innerHTML = '<i class="fa fa-arrow-left"></i>';
        sidenav++;
    }else{
        if(deviceCheck()!=2){
            document.querySelector(".right-component").style.display = "block";
            document.querySelector(".right-component").style.width = "70%";
            document.querySelector(".sidenav-toggler").style.position = "absolute";
            document.querySelector(".sidenav-toggler").style.top = "58%";
            document.querySelector(".sidenav-toggler").style.left = "22%";
        }else{
            document.querySelector(".right-component").style.width = "20%";
            document.querySelector(".left-component").style.width = "80%";
            document.querySelector(".sidenav-toggler").style.position = "absolute";
            document.querySelector(".sidenav-toggler").style.top = "58%";
            document.querySelector(".sidenav-toggler").style.left = "78%";
        }
        document.querySelector(".sidenav-toggler").innerHTML = '<i class="fa fa-arrow-right"></i>';
        sidenav--;
    }
}
function showAlert(messsge){
    document.querySelector(".alert").style.display = "block";
    document.getElementById("alert-message").innerHTML = messsge;
    setTimeout(()=>{
        document.querySelector(".alert").style.top = "8%";
    },100);
}
function closeAlert(){
    document.querySelector(".alert").style.top = "-8%";
    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none";
    },1000);
}
function printOptionSheet(choices,number){
    temp = '';
    let a;
    for(let i=0; i<choices.length; i++){
        if(solveList[number][2]==choices[i] && solveList[number][2]!=null){
            a = "checked='true'";
        }else{
            a = '';
        }
        temp += `
        <div class="form-group option">
            <input type="radio" id="option${i+1}" name="option" value="${choices[i]}" onclick="guess(${i+1});" ${a==''?a:a} />
            <label for="option${i+1}" id="choice${i+1}">${choices[i]}</label>
        </div>`;
    }
    document.querySelector('.options').innerHTML = temp;
}
function setPapersUrl(){
    for(let i=0; i<paper.length; i++){
        root.innerHTML += `<script src="./database/${paper[i]}.min.js" crossorigin="anonymous"></script>`;
    }
}
function setPaperData(){
    setTimeout(()=>{
        questions1 = currentPaper.set1;
        questions2 = currentPaper.set2;
        questions3 = currentPaper.set3;  
        root.innerHTML = root.innerHTML.replaceAll("{paper.name}",currentPaper.name);
        root.innerHTML = root.innerHTML.replaceAll("{question.fullmarks}",currentPaper.fullmarks);
        randomPaperChoose();
    },1000);
}
function displayCategores(){
    temp = '';
    for(let i=0; i<currentPaper.section.length; i++){
        temp += `<span class="btn" id="category${i+1}" onclick="swapSection(${i+1});">category-${i+1}</span>`;
    }
    document.getElementById('category-list').innerHTML = temp;
    swapSection(1);
}
function swapSection(id){
    for(let i=0; i<currentPaper.section.length; i++){
        document.getElementById('category'+(i+1)).classList.remove("active");
    }
    document.getElementById('category'+id).classList.add("active");
    currentCategory = id;
    let priviusLisit = (currentCategory<=1?0:currentPaper.section[currentCategory-2][0]);
    document.getElementById('side-cateno').textContent = `Category ${id}, (${currentPaper.section[currentCategory-1][0]-priviusLisit}/${exam.questions.length})`;
    document.getElementById('positive-marks').textContent = currentPaper.section[currentCategory-1][2];
    document.getElementById('negative-marks').textContent = currentPaper.section[currentCategory-1][3]>0?'-'+currentPaper.section[currentCategory-1][3]:currentPaper.section[currentCategory-1][3];
    questionList();
}
function deviceCheck(){
    const details = navigator.userAgent;
	let regexp = /android|iphone|kindle|ipad/i;
    let regexc = /windows|linux|macintosh/i;
	let isMobileDevice = regexp.test(details);
    let isComputer = regexc.test(details);
	if(isMobileDevice){ 
        return 0; 
    }else{
        if(isComputer){
            return 2;
        }
        return 1;
    }
}
function setExamData(){
    currentPaper = geography;
    setPapersUrl();
    setPaperData();
    setTimeout(()=>{
        reorderSection();
        questionList();
        populate(1);
        exam.examTimerStart();
    },1000);
}