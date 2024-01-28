// DataComponent.js
export const contactData = {
  title: "Contact Us",
  lines: [
    { iconClass: "fa-solid fa-phone", text: "+374-94136745" },
    { iconClass: "fa-solid fa-envelope", text: "polytechnic@gmail.com" },
    { iconClass: "fa-brands fa-facebook", text: "polytechnic" },
  ],
};

export const aboutData = {
  title: "About Us",
  lines: [
    { iconClass: "fa-solid fa-location-dot", text: "105 Teryan St, Yerevan" },
    { iconClass: "fa-solid fa-address-card", text: "Mer masin" },
  ],
};

export const companyData = {
  title: "Our Company",
  lines: [
    { iconClass: "fa-solid fa-newspaper", text: "News", link: "/news" },
    { iconClass: "fa-solid fa-road", text: "Roadmap", link: "/roadmap" },
    {
      iconClass: "fa-solid fa-address-card",
      text: "About Us",
      link: "/about-us",
    },
    { iconClass: "fa-solid fa-phone", text: "Get in touch", link: "/contact" },
  ],
};
