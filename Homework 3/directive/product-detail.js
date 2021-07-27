$(function(){
    // Get the value of number input
    num = $('input[type="number"]').val();
    // cartQuantity = 0;
   

    // Click [-] button, decrease the number
    $("#minus").click(function() {
        // alert("No!");
        if (num > 0) num--;
        else num;
        // console.log(num);
        $('input[type="number"]').val(num)
    });   

    // Click [+] button, increase the number
    $("#add").click(function() {
        // alert("Yes!");
        num++;
        // console.log(num);
        $('input[type="number"]').val(num)
    }); 
    
   

  });

  let cartQuantity = 0;
  const cartHeader = document.getElementById("cart-header");
  console.log(cartHeader); // NULL

const addBtn = document.getElementById("add-cart-btn");
// console.log(addBtn); // OK
addBtn.addEventListener("click", function(){
    cartQuantity++;
    cartHeader.textContent = cartQuantity;
})