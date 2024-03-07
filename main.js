const product = [
  {
    id: 1,
    image: "./pizza.jpg",
    title: "cheese pizza",
    price: 250,
  },
  {
    id: 2,
    image: "./img1.jpg",
    title: "Burger",
    price: 100,
  },
  {
    id: 3,
    image: "./crepe.jpg",
    title: "Crepe",
    price: 80,
  },
  {
    id: 4,
    image: "./shawarma.jpg",
    title: "shawarma",
    price: 90,
  },
  {
    id: 5,
    image: "./fried.jpg",
    title: "Fried Chicken",
    price: 120,
  },
];

const hamburgarLink = document.querySelector(".links");
const listMenu = document.querySelector("header ul");
const search = document.querySelector("main input");

hamburgarLink.onclick = function () {
  if (listMenu.classList.contains("active")) {
    listMenu.classList.remove("active");
    return;
  }
  listMenu.classList.add("active");
};

displayItem(product);

search.addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = product.filter(function (product) {
    return product.title.toLocaleLowerCase().includes(searchData);
  });
  displayItem(filterData);
});

function displayItem(items) {
  document.querySelector(".main").innerHTML = items
    .map(function (item) {
      const { image, title, price } = item;
      return ` <div class="pizza">
                <img src=${image} alt=${title} />
                <p>${title}</p>
                <p>${price}</p>
           </div> `;
    })
    .join("");
}
