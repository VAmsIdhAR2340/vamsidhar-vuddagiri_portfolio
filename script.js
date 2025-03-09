const projects = [
  {
    title: "Ethical AI text watermarking",
    description: "Formulated approaches to solve ethical AI challenges using well-defined algorithms and data sources, focusing on honesty and ethics domains, and developed a watermarking algorithm for a 1.1B parameter model to detect AI-generated text.",
    link: "NA"
    
  },
  {
    title: "Agentic-AI-Powered Research Assistant ",
    description: "Engineered a agentic-AI system with comprehensive explanations by combining AI-generated content from multiple research papers.",
    link: "https://github.com/VAmsIdhAR2340?tab=repositories"
    
  },
  {
    title: "Reinforcement Learning for IoT",
    description: "Proposed and developed a unique model combining IoT, Reinforcement Learning, and network theory, showcasing innovation in interdisciplinary research and published the findings in IEEE transactions to contribute to the research community.",
    link: "https://github.com/VAmsIdhAR2340?tab=repositories"
    
  },
  {
    title: "Watermarking for Code",
    description: "Developed a Text-Watermarking for Code to identify if the given is  code is coming from AI-generated text or a human-written text.",
    link: "https://github.com/VAmsIdhAR2340?tab=repositories"
    
  },
];
// Load Projects Dynamically
const projectContainer = document.getElementById('project-container');
projects.forEach(project => {
 projectContainer.innerHTML += `
   <div class='col-md-4'>
     <div class='card shadow-sm'>
       <div class='card-body'>
         <h5>${project.title}</h5>
         <p>${project.description}</p>
         <a href='${project.link}' target='_blank' class='btn btn-primary'>View Project</a>
       </div>
     </div>
   </div>`;
});

// Equalize Card Heights
window.addEventListener('load', () => {
 const cards = document.querySelectorAll('.card');
 let maxHeight = 0;

 // Find the tallest card
 cards.forEach(card => {
   const cardHeight = card.offsetHeight;
   if (cardHeight > maxHeight) {
     maxHeight = cardHeight;
   }
 });

 // Apply the tallest height to all cards
 cards.forEach(card => {
   card.style.height = `${maxHeight}px`;
 });
});

// GSAP Animations on Page Load
window.addEventListener('load', () => {

 // Navbar Animation
 gsap.from('.navbar', {duration:1, y:-50, opacity:0, ease:'power2.out'});

 // Profile Image Animation
 gsap.to('.profile-img', {duration:1, scale:1.1, opacity:1, ease:'elastic.out(1,0.6)', delay:.5});

 // Sections Fade-in Animation
 gsap.utils.toArray('.animated-section').forEach(section => {
   gsap.to(section,{
     scrollTrigger:{
       trigger:section,
       start:'top bottom-=100',
     },
     duration:.8,
     y:-20,
     opacity:1,
     ease:'power2.out'
   });
 });

 // Cards Stagger Animation
 gsap.to('.card',{
   scrollTrigger:{
     trigger:'#projects',
     start:'top bottom-=100',
   },
   duration:.6,
   y:-20,
   opacity:1,
   stagger:.2,
   ease:'power2.out'
 });

});

// Scroll Progress Bar Animation
document.body.insertAdjacentHTML('afterbegin','<div id=scroll-progress></div>');
window.addEventListener('scroll',()=>{
 const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
 const scrolled=(window.scrollY/height)*100;
 document.getElementById('scroll-progress').style.width=scrolled+'%';
});
