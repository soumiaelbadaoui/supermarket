// footer.js

// Fetch and include the footer HTML
fetch("footer.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  })
  .catch((error) => console.error("Error fetching footer:", error));
