const mainimg = document.getElementById("mainimg");
const thumbnail = document.querySelectorAll(".thumbnail img");

thumbnail.forEach(function(thumbnail){
    thumbnail.addEventListener("click",function(){
        mainimg.src=thumbnail.src;
    });
});

const minus = document.getElementById("minus");
const count = document.getElementById("count");
const plus = document.getElementById("plus");
const cartBtn = document.getElementById("cartBtn");

let quantity = 1;

plus.addEventListener("click",function() {
    quantity++;
    count.textContent=quantity;
});
minus.addEventListener("click",function(){
    if(quantity>1)
    {
        quantity--;
        count.textContent=quantity;
    }
});
cartBtn.addEventListener("click",function(){
    alert("已加入購物車！");
});
