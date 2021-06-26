// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


//Step 1 Select/traget the items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job= document.getElementById("job");
const info = document.getElementById("info");

//Step 2 Select Targe buttons

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


//Set the starting item
let currentItems = 0;

//  load initial items

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItems);
  
  // console.log("shake and Bake");
})


//show person based on item

function showPerson() {
  const item = reviews[currentItems];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItems++;
  // if currentItms is bigger than review array length minus 1 which will be the actual length of the array 0,1,2,3 total 4, ie 4-1 = 3rd items of the array

  if (currentItems > reviews.length - 1) {
    currentItems = 0;
  }
  showPerson(currentItems);
})
prevBtn.addEventListener("click", function () {
  currentItems--;

  // if current items is less than 0, than current items will be on the 4-1 3rd array.
  if (currentItems < 0) {
    currentItems = reviews.length - 1;
  }
  showPerson(currentItems);
})

randomBtn.addEventListener("click", function () {
  currentItems = Math.floor(Math.random() * reviews.length)
  showPerson();
  // currentItems++;
  // showPerson(currentItems);
  // console.log(currentItems);
})