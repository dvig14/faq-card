const questions=document.querySelectorAll('.ques-ans');
questions.forEach((ques)=>{
 ques.addEventListener('click',()=>{
    if(ques.classList.contains('active')){
    ques.classList.toggle('active');
   }
   else{
    questions.forEach((ques)=>ques.classList.remove('active'));
    ques.classList.add('active');
   }
 })
})