var form =document.querySelector("form");
var story =document.querySelector("p");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var input =document.querySelectorAll("input");
    var mark = document.querySelectorAll("mark");
    var data ={};
    var msg ="HAPPY VALENTINE'S DAY AND ENJOY THE STORY";
    var h1 =document.querySelector("h1");
    
    for(var i=0; i<input.length-1 ;++i){
        data[input[i].getAttribute("class")]=input[i].value;
    
        
    }
    for(var j=0; j<mark.length ;++j){
        
        mark[j].innerHTML = data[mark[j].getAttribute("class")];
        
    }
    
  form.setAttribute("class",'hide');
  story.setAttribute("class",'');
  h1.innerHTML =msg;    
    
});