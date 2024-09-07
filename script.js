const signInbtnlink= document.querySelector('.signInbtnlink');
const signupbtnlink= document.querySelector('.signupbtnlink');
const wrapper = document.querySelector('.wrapper');

signupbtnlink.addEventListener('click',() => {
    wrapper.classList.toggle('active');
});
signInbtnlink.addEventListener('click',() => {
    wrapper.classList.toggle('active');

});
console.log("shailesh yadav");