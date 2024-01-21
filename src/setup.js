const content = document.querySelector("#content");
function setup() {
  console.log("setup called");
  content.innerHTML = "";

  // const header = document.createElement("header");
  // header.classList.add("header");
  // content.appendChild(header);

  // const nav = document.createElement("nav");
  // nav.classList.add("nav");
  // header.appendChild(nav);

  // const navList = document.createElement("ul");
  // navList.classList.add("nav-list");
  // nav.appendChild(navList);

  // const navItems = ["Home", "Menu", "Contact"];
  // navItems.forEach(item => {
  //   const navItem = document.createElement("li");
  //   const a = document.createElement("a");
  //   a.href = `${item.toLocaleLowerCase()}.html`;
  //   a.innerHTML = item;
  //   a.id = item.toLocaleLowerCase();
  //   navItem.appendChild(a);
  //   navList.appendChild(navItem);
  // });

  const main = document.createElement("main");
  main.classList.add("main");
  const div = document.createElement("div");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Tokyo's Breakfast Cafe";
  div.appendChild(title);

  for (let i = 0; i < 3; i++) {
    const review = document.createElement("div");
    review.classList.add("review");

    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Lorem ipsum dolor sit amet";
    review.appendChild(paragraph);
    div.appendChild(review);
  }
  main.appendChild(div);
  content.appendChild(main);

  // const footer = document.createElement("footer");
  // footer.classList.add("footer");

  // for (let i = 0; i < 3; i++) {
  //   const paragraph = document.createElement("p");
  //   paragraph.classList.add("footer-paragraph");
  //   paragraph.innerHTML = "tokyo cafe";
  //   footer.appendChild(paragraph);
  // }

  // div.appendChild(footer);
  // content.appendChild(footer);
}

export default setup;

//find out why menu tab is refreshed when clicking the button
