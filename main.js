alert('hi');
/*let doctor_dwn_icn     = document.getElementById('searche-holder-container');
let location_dwn_icn   = document.getElementById('down-icon-2');
let service_dwn_icn    = document.getElementById('down-icon-3');
let doctors_list       = document.getElementsByClassName('doctors-list');
//let locations_list     = document.getElementsByclassName ('locations_list');
//let services_list      = document.getElementsByclassName ('services_list');
doctor_dwn_icn.addEventListener('mouseover', function(){ 
    doctors_list.style.color ='black' ;
});
location_dwn_icn.addEventListener('mouseover', function(){ 
    location_dwn_icn.style.color = "white";
});
service_dwn_icn.addEventListener('mouseover', function(){ 
    service_dwn_icn.style.color = "white";
});
//location_down_icon.addEventListener('click', location_list);
//service_down_icon.addEventListener ('click', service_list);*/


let h1    = document.getElementById('h1');
let list  = document.getElementById('list');
let listS = document.getElementById('listS');

h1.addEventListener('click', function(){
   list.style.visibility="visible";
   
});
listS.addEventListener('click',function(){
      h1.innerHTML = listS.innerText;
});


























