const items = [
  {
    id: 1,
    img: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    job: "UX Engineer",
    text: `“ I’ve been interested in coding for a while but never taken the jump,
            until now. I couldn’t recommend this course enough. I’m now in the job
            of my dreams and so excited about the future. ”`,
  },
  {
    id: 2,
    img: "./images/image-john.jpg",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
       The depth the instructors go into is incredible. I now feel so confident about 
       starting up as a professional developer. ”`,
  },
  {
    id: 3,
    img: "./images/image-jon.jpg",
    name: "John Smilga",
    job: "Teacher",
    text: `“ I’ve been interested in coding for a while but never taken the jump,
       until now. I couldn’t recommend this course enough. I’m now in the job
       of my dreams and so excited about the future. ”`,
  },
  {
    id: 4,
    img: "./images/image-brad.jpg",
    name: "Brad Traversy",
    job: "Instructor",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
       The depth the instructors go into is incredible. I now feel so confident about 
       starting up as a professional developer. ”`,
  },
];
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const img = document.getElementById("person-img");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", showPerson());

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > items.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = items.length - 1;
  }
  showPerson();
});

function showPerson() {
  const item = items[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}
