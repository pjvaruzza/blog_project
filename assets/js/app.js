

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up"); //selects the scroll to top button with the id attribute to it in the html. We used the querySelector() method here. You can also use the getElementById() method.

//click eventListener to get the user’s click action and exploit the scrollTo part of the windows object to make the button functional.
scrollUp.addEventListener("click", () => {
  //scrolls to the top left smoothly
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


//**** HAMBURGER MENU *****
// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu"); //selects the menu bars
const ul = document.querySelector("nav ul"); // selects the list items (nav links all together)
const nav = document.querySelector("nav"); // selects the container itself (the nav element)

burger.addEventListener("click", () => {  //adding a click eventListener to the hamburger menu bar,
  ul.classList.toggle("show");  //using the toggle method to remove and add the class of show.
});



// Close hamburger menu when a link is clicked
// Select nav links
const navLink = document.querySelectorAll(".nav-link"); //the nav links have a class of nav-link from the HTML. So I selected all of them with that class and put them in a variable called navLink. We did this with the querySelectorAll() method.

navLink.forEach((link) =>   //looped through all the links with the forEach array method
  link.addEventListener("click", () => {  //listened for a click event on all of them.
    ul.classList.remove("show");  //then I used the remove() method provided by the DOM to remove the class of show any time any of the nav menu items are clicked. This will take all the list items out of the viewport.
  })
);
