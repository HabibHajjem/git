     ///button like//////
var btnLike = document.querySelectorAll('.likeBtn');
for(var values of btnLike){
    values.addEventListener('click',like);
}
function like(){
    var icon=event.target;
    var iconClass=icon.getAttribute('class');
    if(iconClass=="bi bi-heart")
    icon.setAttribute('class','bi bi-heart-fill');
    else
    icon.setAttribute('class','bi bi-heart');
}
/////////quantity increment, decrement and control
var plusBtn= document.querySelectorAll('.plusBtn');
var minusBtn= document.querySelectorAll('.minusBtn');
var input=document.querySelectorAll('.quantity');
for(var values of plusBtn){
    values.addEventListener('click',plus);
}
for(var values of minusBtn){
    values.addEventListener('click',minus);
}
for(var values of input){
    values.addEventListener('change',control);
}

function plus(){
    var x =event.target.previousElementSibling;
    var price=event.target.nextElementSibling;
    x.value = parseInt(x.value)+1;
    price.firstChild.innerHTML=50*x.value;
    Sum();
}

function minus(){
    var x = event.target.nextElementSibling;
    var price=event.target.nextElementSibling.nextElementSibling.nextElementSibling;
    if(x.value == 1)
    alert("veuillez entrer un nombre supérieur à zéro");
    else{
    x.value=parseInt(x.value)-1;
    price.firstChild.innerHTML=50*x.value;
    Sum();
    }
}
function control(){
    var price=event.target.nextElementSibling.nextElementSibling;
    if(event.target.value<=0)
    {
    alert('entrer un nombre superieur à zero');
    event.target.value= 1;
    price.firstChild.innerHTML=50*event.target.value;
    }
    else{
        price.firstChild.innerHTML=50*event.target.value;
        Sum();
    }
}
/////////delete product///////////
var delBtn=document.querySelectorAll('.delBtn');
for(var values of delBtn){
    values.addEventListener('click',remove);
}
function remove(){
    var child = event.target.parentNode.parentNode;
    var parent=child.parentNode;
    parent.removeChild(child);
    event.target.parentNode.previousElementSibling.firstChild.innerHTML = '0';
    Sum();
    deleteTotal();
}
///////////Total Products//////////
var pricePrd=document.querySelectorAll('.price');
var total=document.getElementById('total');
Sum();

function Sum(){
    total.innerHTML='0';
for(var values of pricePrd){
    total.innerHTML=parseInt(total.innerHTML)+parseInt(values.innerHTML);
}
}
function deleteTotal(){
    var listProduct=document.getElementById('listProduct');
    var container=document.getElementById('container');
   if(listProduct.innerHTML.trim().length==0)
   container.removeChild(container.lastElementChild);
}