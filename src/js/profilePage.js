const order=document.querySelector('#orders');
const credentials=document.querySelector('#credentials');
const address=document.querySelector('#address');
const favourite=document.querySelector('#favourites');
const payment=document.querySelector('#payments');
const displayDiv=document.querySelector('.displayDiv');
const orders_heading=document.querySelector('#orders_heading');

displayDiv.innerHTML=`
<h1 id="greeting">Welcome to your profile</h1>
<p id="notice">Here you can view and manage your account details, orders, addresses, payment methods, and more.</p>
`;

order.addEventListener('click',()=>{
    window.location.href='order.html';

});

favourite.addEventListener('click',()=>{
window.location='favourite.html';
});

payment.addEventListener('click',()=>{
window.location='payment.html';
})