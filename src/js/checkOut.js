   const productName=document.getElementById("productName");
   const quantity=document.querySelector("#quantity");
   const price=document.querySelector(".item-price");
   const image=document.querySelector("#product_image");
   const productId=localStorage.getItem("productId");
   const total=document.querySelector("#total");
   const subTotal=document.querySelector("#subTotal");
   const tax=document.querySelector("#tax");
   const pay_btn=document.querySelector(".pay-btn");

  
   

window.onload=()=>{
  productDetails();
}



const productDetails=async()=>{

  try{
const response=await axios.post ("https://e-commerce-server-25cx.onrender.com/api/products/getProductDetails",{productId});

const product=response.data.product;

appendProductDetails(product)


  }
  catch(error){
    console.log("Error fetching product details:", error.message);
  }

}

function appendProductDetails(product){
productName.textContent=product.productName;
price.textContent="$"+(product.price-product.price*(product.discount/100));
image.src=product.image;


const pricingDetails={
  price:(product.price-product.price*(product.discount/100)),
  tax:25
}

paymentDetails(pricingDetails);

}

//sub-total=itemprice
//tax=25
//total=sub-total+tax


function paymentDetails(pricingDetails){



subTotal.textContent=`$${pricingDetails.price}`;
tax.textContent=`$${pricingDetails.tax}`;
total.textContent=`$${pricingDetails.price+pricingDetails.tax}`;
pay_btn.textContent=`Pay ${total.textContent}`;
}



