
// --- DOM Elements ---
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const showLoginBtn = document.getElementById('show-login');
        const showSignupBtn = document.getElementById('show-signup');
        const profileView = document.getElementById('profile-view');
        const authContainer = document.getElementById('auth-container');
        const loadingSpinner = document.getElementById('loading');
        const loginMessage = document.getElementById('login-message');
        const signupMessage = document.getElementById('signup-message');
        const userName= document.getElementById("signup-username");
        const userEmail= document.getElementById("signup-email");
        const password= document.getElementById("signup-password");
        const createAccountBtn= document.getElementById("signup-submit-btn");
        const loginEmail= document.getElementById("login-email");
        const loginPassword= document.getElementById("login-password");
        const loginBtn= document.getElementById("login-submit-btn");
     const url="https://e-commerce-server-25cx.onrender.com";


        // use event to track button and input.
showSignupBtn.addEventListener('click', function() {
    userName.value = '';
    userEmail.value = '';
    password.value = '';
    signupMessage.style.display = 'none';
    showSignupBtn.classList.remove('tab-inactive');
    showSignupBtn.classList.add('tab-active');
    showLoginBtn.classList.remove('tab-active');
    showLoginBtn.classList.add('tab-inactive');
    loginForm.style.display= "none";
    signupForm.style.display= "block";
 
}
);
createAccountBtn.addEventListener("click", async (e)=>{
    e.preventDefault();
console.log(userEmail,userName,password.value)

    try{
    const response=await axios.post(`${url}/api/auth/signup`,{
        userName: userName.value,
        email: userEmail.value,
        password: password.value
    });
 console.log("Sign Up successful:", response.data);
    // window.location='login.html';
}
catch(error){
    console.log("Sign Up Error:", error.message );
    signupMessage.textContent = error.response && error.response.data ? error.response.data.message : "Sign Up failed. Check console for details.";

}
})

loginBtn.addEventListener("click", async(e)=>{

    e.preventDefault();
    try{
    const response=await axios.post(`${url}/api/auth/login`,{
        email: loginEmail.value,
        password: loginPassword.value   

});


console.log("Login successful:", response.data);
window.location='profilePage.html';


    }

    catch(error){
        console.log("Login Error:", error);
        loginMessage.textContent = error.response && error.response.data ? error.response.data.message : "Login failed. Check console for details.";
    }
});


showLoginBtn.addEventListener('click', function() {
    showSignupBtn.classList.remove('tab-active');
    showSignupBtn.classList.add('tab-inactive');
    showLoginBtn.classList.remove('tab-inactive');
    showLoginBtn.classList.add('tab-active');

    loginForm.style.display="block";
    signupForm.style.display="none";

});
