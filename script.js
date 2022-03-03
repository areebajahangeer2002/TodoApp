//getting all required elements
const inputbox = document.querySelector(".inputfeild input");
        const Addbtn = document.querySelector(".inputfeild  button");
        const todoList = document.querySelector(".todoList");
        const deleteAllBtn = document.querySelector(".footer button");


        inputbox.onkeyup = () =>{
            let userData = inputbox.value;  //geting user enter value
            if(userData.trim() !=0){ //if user value aren't space
            Addbtn.classList.add("active"); //active the add buton
            }
           else{
            Addbtn.classList.remove("active"); //unactive the add buton
           }
        }
        showTasks(); //calling showtasks function

//if user click on the add buttton
Addbtn.onclick = ()=>{
    let userData = inputbox.value;  //getting user enter value
    let getlocalstorage = localStorage.getItem("new todo");  //getting localstorage
    if(getlocalstorage == null){  //if local storage is null
        listArr = []; //creating blank array 
    }else{
        listArr = JSON.parse(getlocalstorage); //transforming json string into a js object 
    } 
    
listArr.push(userData); //pushing or add userdata    
localStorage.setItem("new todo",JSON.stringify(listArr)); //transforming js object into a json object
  showTasks(); //calling show task function
  Addbtn.classList.remove("active"); //unactive the add buton
}

//function to ad task list inside ul
function showTasks(){
    let getlocalstorage = localStorage.getItem("new todo");  //getting localstorage
    if(getlocalstorage == null){  //if local storage is null
        listArr = []; //creating blank array 
    }else{
        listArr = JSON.parse(getlocalstorage); //transforming json string into a js object 
    } 
    const pendingnumb = document.querySelector(".pendingnumb");
    pendingnumb.textContent = listArr.length; //passing the value in pendingNumb 
if(listArr.length > 0){//if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the clearall button
}else{
    deleteAllBtn.classList.remove("active");//unactive the clearall button
} 
    let newLiTag = '';
listArr.forEach((element, index) => {
    newLiTag  += ` <li> ${element}<span onclick="deleteTask(${index})";><i class="fa fa-trash"></span></i></li>`;
});
todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
inputbox.value = ""; //once task added leave the input feild blank
}

//delete task function
function deleteTask(index){
    let getlocalstorage = localStorage.getItem("new todo");
    listArr = JSON.parse(getlocalstorage);  
    listArr.splice(index,1); //delete or remove the particular indexed li
    //after remove the li again update the local storage
   
localStorage.setItem("new todo",JSON.stringify(listArr)); //transforming js object into a json object
  showTasks(); //calling show task function
}

//delete all tasks function
deleteAllBtn.onclick = ()=>{
     listArr = []; //empty an array
  //after delete all task again the local storage  
    localStorage.setItem("new todo",JSON.stringify(listArr)); //transforming js object into a json object
  showTasks(); //calling show task function
} 