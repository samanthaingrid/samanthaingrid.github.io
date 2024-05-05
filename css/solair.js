function myFunction() {
  let x = document.getElementById("nav");
  if (x.className === "nav_link") {
    x.className += " responsive";
  } else {
    x.className = "nav_link";
  }

  }
