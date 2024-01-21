function menuSetup() {
  console.log("menu called");

  const content = document.querySelector("#content");

  content.innerHTML = "";

  // Create main element
  const mainElement = document.createElement("main");

  // Create div element
  const mainDiv = document.createElement("div");

  // Create h2 element with class "title"
  const titleHeader = document.createElement("h2");
  titleHeader.className = "title";
  titleHeader.textContent = "Menu";

  // Append h2 to div
  mainDiv.appendChild(titleHeader);

  // Menu items
  const menuItems = [
    {
      category: "Beverages",
      items: [
        { name: "honey tea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
        { name: "honey tea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
        { name: "honey tea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
      ],
    },
    {
      category: "Sides",
      items: [
        { name: "honey tea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
        { name: "honey tea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
        { name: "honey tea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
      ],
    },
    {
      category: "Sides",
      items: [
        { name: "Toast and Jam", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
        {
          name: "Fruit mix",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis esse corrupti expedita delectus tempore molestiae ut distinctio dolorem suscipit perspiciatis.",
        },
        { name: "Salad", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
      ],
    },
    {
      category: "Main Dishes",
      items: [
        { name: "Waffles", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
        {
          name: "Pancakes",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis esse corrupti expedita delectus tempore molestiae ut distinctio dolorem suscipit perspiciatis.",
        },
        { name: "French Toast", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
      ],
    },
  ];

  // Iterate through menu items
  menuItems.forEach(menuItem => {
    // Create div with class "menu-item"
    const menuItemDiv = document.createElement("div");
    menuItemDiv.className = "menu-item";

    // Create h3 for category
    const categoryHeader = document.createElement("h3");
    categoryHeader.textContent = menuItem.category;

    // Append category h3 to menu-item div
    menuItemDiv.appendChild(categoryHeader);

    // Iterate through items in the category
    menuItem.items.forEach(item => {
      // Create div with class "beverage", "sides", or "main" based on the category
      const itemDiv = document.createElement(menuItem.category === "Main Dishes" ? "div" : "div");
      itemDiv.className = menuItem.category.toLowerCase();

      // Create h3 for item name
      const itemNameHeader = document.createElement("h3");
      itemNameHeader.textContent = item.name;

      // Create p for item description
      const itemDescriptionParagraph = document.createElement("p");
      itemDescriptionParagraph.textContent = item.description;

      // Append name and description to item div
      itemDiv.appendChild(itemNameHeader);
      itemDiv.appendChild(itemDescriptionParagraph);

      // Append item div to menu-item div
      menuItemDiv.appendChild(itemDiv);
    });

    // Append menu-item div to main div
    mainDiv.appendChild(menuItemDiv);
  });

  // Append div to main
  mainElement.appendChild(mainDiv);

  // Append main element to the document body or any other desired location
  content.appendChild(mainElement);
}

export default menuSetup;
