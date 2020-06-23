var our_services=document.querySelector('.our-services');
var dropdown_services=document.querySelector('.dropdown-services');
our_services.addEventListener('mouseover',function(){
    console.log("hi");
    dropdown_services.style.display="flex";
   
});



dropdown_services.addEventListener('mouseover',function(){
    console.log("hi");
    dropdown_services.style.display="flex";
   
});
dropdown_services.addEventListener('mouseout',function(){
    console.log("hi");
    dropdown_services.style.display="none";
   
});

