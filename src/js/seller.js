const addProduct=document.querySelector(".form-submit-btn");
const totalEarning=document.querySelector("#total-earnings").value;
const toast=document.querySelector(".toast");
const del=document.querySelector("#delete");
const totalOrders=document.querySelector("#total-orders").value;
const url="https://e-commerce-server-25cx.onrender.com";
const totalListedOrders=document.querySelector("#total-products").value;

del.addEventListener("click",()=>{
  toast.classList.add("hide");
});

addProduct.addEventListener("click", async()=>{


  const productName=document.querySelector("#product-name").value;

  const about=document.querySelector("#product-desc").value;

  const price=document.querySelector("#product-price").value;

  const discount=document.querySelector("#product-discount").value;

  const image=document.querySelector("#product-image").value;




  
  try{
    const response=await axios.post(`${url}/api/seller/addProduct`,
  {
    productName,
    about,
    price,
    discount,
    image,
  });

  if(response.data.sucess===true){
    toast.classList.remove("hide");
    setTimeout(()=>{
      toast.classList.add("hide");
    },6000);
}

}

catch(error){
  console.log("error in message",error.message);
}
});


  
