import logo from "./assets/logo.jpg";

function generateContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  // Create main element
  const mainElement = document.createElement("main");

  // Create div element
  const mainDiv = document.createElement("div");

  // Create h2 element with class "logo-header"
  const header = document.createElement("h2");
  header.className = "logo-header";
  header.textContent = "Contact us ";

  // Create img element with class "logo" and id "logo"
  const logoImg = document.createElement("img");
  logoImg.className = "logo";
  logoImg.id = "logo";
  logoImg.src = logo;
  logoImg.alt = "logo";

  // Append img to h2
  header.appendChild(logoImg);

  // Append h2 to div
  mainDiv.appendChild(header);

  // Create div with class "contact-item"
  const contactItemDiv = document.createElement("div");
  contactItemDiv.className = "contact-item";

  // Create three contact-info divs
  ["Address", "Phone", "Email"].forEach(title => {
    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.className = "contact-info";

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");

    // Set different content based on the title
    switch (title) {
      case "Address":
        p.textContent = "1234 Main St\nCity, State 12345";
        break;
      case "Phone":
        p.textContent = "123-456-7890";
        break;
      case "Email":
        p.textContent = "tokyocafe@gmail.com";
        break;
    }

    // Append h3 and p to contact-info div
    contactInfoDiv.appendChild(h3);
    contactInfoDiv.appendChild(p);

    // Append contact-info div to contact-item div
    contactItemDiv.appendChild(contactInfoDiv);
  });

  // Append contact-item div to main div
  mainDiv.appendChild(contactItemDiv);

  // Append div to main
  mainElement.appendChild(mainDiv);

  // Append main element to the document body or any other desired location
  content.appendChild(mainElement);
}

export default generateContact;
