function initMap() {
  const mapOptions = {
    center: { lat: 0, lng: 0 }, // Set your desired map center coordinates
    zoom: 12 // Set the initial zoom level
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

document.addEventListener('DOMContentLoaded', function () {
  const mapIcon = document.querySelector('.map-icon');
  const popupCard = document.querySelector('.popup-card');
  const closeIcon = document.querySelector('.close-icon');

  mapIcon.addEventListener('click', function () {
    popupCard.classList.toggle('hidden');
  });

  closeIcon.addEventListener('click', function () {
    popupCard.classList.add('hidden');
  });
});

// Search
$(document).ready(function () {
  $(".search-button").click(function () {
    const destination = $(".editor").val();
    showDestinationOnMap(destination);
  });
});

function showDestinationOnMap(destination) {
  // Use the destination value to show it on the map
  // Implement your logic here to display the destination on the map
  console.log("Showing destination on the map:", destination);
}

$(document).ready(function () {
  $(".conts").click(function () {
    if ($(this).text() === "Overview") {
      $(".section-4").toggleClass("hidden");
      $(".section-5").toggleClass("hidden");
    }
  });
});

// Icons color change
const box = document.querySelectorAll('.box');

box.forEach((boxes) => {
  boxes.addEventListener('click', function () {
    box.forEach((b) => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// const boxClickableElements = document.getElementsByClassName('box-clickable');
// for (let i = 0; i < boxClickableElements.length; i++) {
//   boxClickableElements[i].addEventListener('click', function () {
//     const travelMode = this.querySelector('i').textContent;
//     handleBoxClick(travelMode);
//   });
// }

// function getIconForMode(mode) {
//   if (mode === 'walking') {
//     return 'directions_walk';
//   } else if (mode === 'car') {
//     return 'directions_car';
//   } else if (mode === 'bicycle') {
//     return 'directions_bike';
//   } else if (mode === 'bus') {
//     return 'directions_bus';
//   } else {
//     return '';
//   }
// }
