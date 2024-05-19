import '../styles/main.css'
import {restaurants} from '../public/data/DATA.json'

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}


document.addEventListener('DOMContentLoaded', function() {
  // Fetch restaurant data from DATA.json
  
      const restaurantList = document.querySelector('.restaurant-list');
      restaurants.forEach(restaurant => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');

        const restaurantImage = document.createElement('img');
        restaurantImage.src = restaurant.pictureId;
        restaurantImage.alt = restaurant.name;

        const restaurantName = document.createElement('h3');
        restaurantName.textContent = restaurant.name;

        const restaurantCity = document.createElement('p');
        restaurantCity.textContent = `City: ${restaurant.city}`;

        const restaurantRating = document.createElement('p');
        restaurantRating.textContent = `Rating: ${restaurant.rating}`;

        restaurantItem.appendChild(restaurantImage);
        restaurantItem.appendChild(restaurantName);
        restaurantItem.appendChild(restaurantCity);
        restaurantItem.appendChild(restaurantRating);

        restaurantList.appendChild(restaurantItem);
      });
   

  // Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

   // Fungsi untuk mengecek lebar viewport
  function checkViewportWidth() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 768) {
      // Tampilkan navigation drawer pada layar seluler
      navMenu.classList.remove('show');
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    } else {
      // Tampilkan menu navigasi secara langsung pada layar desktop
      navMenu.classList.add('show');
      navToggle.removeEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    }
  }

  // Skip to Content Link
  const skipLink = document.querySelector('.skip-link');

  skipLink.addEventListener('click', event => {
    event.preventDefault();
    const mainContent = document.querySelector('#main');
    mainContent.focus();
  });
});