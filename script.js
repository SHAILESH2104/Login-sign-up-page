const signInbtnlink = document.querySelector('.signInbtnlink');
const signupbtnlink = document.querySelector('.signupbtnlink');
const wrapper = document.querySelector('.wrapper');

signupbtnlink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('active');
});

signInbtnlink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.remove('active');
});

console.log("Shailesh Yadav");