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

const boxClickableElements = document.getElementsByClassName('box-clickable');
for (let i = 0; i < boxClickableElements.length; i++) {
  boxClickableElements[i].addEventListener('click', function () {
    const travelMode = this.querySelector('i').textContent;
    handleBoxClick(travelMode);
  });
}

function handleBoxClick(mode) {
  // Clear previous information
  const infoContainer = document.getElementById('info-container');
  infoContainer.innerHTML = '';

  // Get the selected travel mode
  const selectedMode = mode.toLowerCase();

  // Get the selected place name
  const placeName = document.getElementById('place-name').value;

  // Get the distance and time for the selected travel mode
  let distance, time;
  if (handleBoxClick(mode) == 1) {
  
    if (selectedMode === 'walking') {
      distance = '2 km';
      time = '25 minutes';
    } else if (selectedMode === 'car') {
      distance = '5 km';
      time = '10 minutes';
    } else if (selectedMode === 'bicycle') {
      distance = '3 km';
      time = '15 minutes';
    } else if (selectedMode === 'bus') {
      distance = '7 km';
      time = '30 minutes';
    } else {
      distance = 'N/A';
      time = 'N/A';
    }
  }
  // Create the new element
  const newElement = document.createElement('div');
  newElement.classList.add('travel-info');

  // Create the icon element for the selected mode
  const iconElement = document.createElement('i');
  iconElement.classList.add('material-icons');
  iconElement.textContent = getIconForMode(selectedMode);

  // Create the heading for the place name
  const placeNameHeading = document.createElement('h3');
  placeNameHeading.textContent = placeName;

  // Create paragraphs for the distance and time
  const distanceParagraph = document.createElement('p');
  distanceParagraph.textContent = 'Distance: ' + distance;

  const timeParagraph = document.createElement('p');
  timeParagraph.textContent = 'Time: ' + time;

  // Append the icon, place name heading, distance, and time to the new element
  newElement.appendChild(iconElement);
  newElement.appendChild(placeNameHeading);
  newElement.appendChild(distanceParagraph);
  newElement.appendChild(timeParagraph);

  // Insert the new element before Section 4
  const section4 = document.querySelector('#t_time .section-4');
  const section5 = document.querySelector('#t_time .section-5');
  section4.parentNode.insertBefore(newElement, section4);

  // Shift Sections 4 and 5 upwards
  const tabContentHeight = document.querySelector('.tab-content').offsetHeight;
  const totalSectionsHeight = section4.offsetHeight + section5.offsetHeight;
  const remainingHeight = tabContentHeight - totalSectionsHeight;

  const topMargin = Math.max(0, remainingHeight / 2);
  section4.style.marginTop = topMargin + 'px';
  section5.style.marginTop = topMargin + 'px';
}

function getIconForMode(mode) {
  if (mode === 'walking') {
    return 'directions_walk';
  } else if (mode === 'car') {
    return 'directions_car';
  } else if (mode === 'bicycle') {
    return 'directions_bike';
  } else if (mode === 'bus') {
    return 'directions_bus';
  } else {
    return '';
  }
}
