const products=document.querySelectorAll("#product_image");

const user=document.querySelector(".fa-user");
const btn_seller=document.querySelector(".btn-seller");
const hearts=document.querySelectorAll(".fa-heart");
const productWrapper=document.querySelector(".products");
const buy=document.querySelectorAll("#buy");
// buy.forEach(item=>{
//     item.addEventListener("click",()=>{
//         window.location='./src/pages/checkOut.html'
//     });
// })
const url="https://e-commerce-server-25cx.onrender.com";


products.forEach(product=>{
    product.addEventListener("click",()=>{
console.log("clicked")
window.location='./src/pages/productDetails.html';

    })
})

window.onload=()=>{
loadProducts();
    document.querySelector('.loader').classList.add('hidden');
}

user.addEventListener("click",()=>{

    window.location='./src/pages/profilePage.html'


})

btn_seller.addEventListener("click",()=>{
    window.location="./src/pages/seller.html"
})


const openPage=async(id)=>{
    localStorage.setItem("productId",id)
    window.location='./src/pages/checkOut.html';


}

const addToFav=async()=>{
    
     hearts.classList.toggle("fa-beat-fade")
        hearts.classList.toggle("favourite");

}



const loadProducts=async()=>{
    try{
const response=await axios.post(`${url}/api/products/loadProducts`);

response.data.products.forEach(product=>{
    productWrapper.innerHTML+=`

<div class="product" data-aos="zoom-in" data-aos-duration="1500">
<div class="product_image" >
<img src='${product.image}' alt="" id="product_image">
</div>
<div class="about">
<span id="product_name" >${product.productName} | ${product.about}</span>
<span id="original_price">Price:${product.price}</span>
<span id="current_price">Price:${product.price-(product.price*(product.discount/100))}</span> 
</div>
<div class="order">
<span id="favourite"  onclick="addToFav()"><i class="fa-solid fa-heart fa-beat-fade"></i></span>

<button id="buy" onclick="openPage('${product._id}')" >Buy <i class="fa-solid fa-bag-shopping"></i></button>
<button id="addToCart">Add to <i class="fa-solid fa-cart-shopping"></i></button>
</div>
</div>`


});


    }
    catch(error){
        console.log("error in loading products",error.message);
    }
}



