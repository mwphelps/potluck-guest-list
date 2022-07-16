const addGuestButton = document.querySelector('.invite');
const guestInputLabel = document.querySelector('.add-guest label');
const guestInput = document.querySelector('.add-guest input');
const guestList = document.querySelector('.guest-list');
const guestCount = document.querySelector('.attendance');
const guestFull = document.querySelector('.alert');
const assignButton = document.querySelector('.assign');
const assignedItems = document.querySelector('.assigned-items');

// code for adding people to list
addGuestButton.addEventListener('click', function () {
  const guest = guestInput.value;
  if (guest !== '') {
    addToList(guest);
    clearInput();
    updateGuestCount();
  }
});

//function to clear input box after adding people to list.
//(called in addGuestButton function)
const clearInput = function () {
  const inputClear = '';
  guestInput.value = inputClear;
};

//function to add name to list.
//(called in addGuestButton function)
const addToList = function (guest) {
  const listItem = document.createElement('li');
  listItem.innerText = guest;
  guestList.append(listItem);
};

//function to update and limit number of guest coming to 8.
//(called in addGuestButton function)
const updateGuestCount = function () {
  const guests = guestList.querySelectorAll('.guest-list li');
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add('hide');
    guestInput.classList.add('hide');
    guestInputLabel.classList.add('hide');
    guestFull.classList.remove('hide');
  }
};

// function to assign random items to guest coming to the potluck
// (called when assignButton is clicked)
const assignItems = function () {
  const potluckItems = [
    'chicken',
    'hummus',
    'fruit',
    'drinks',
    'potato salad',
    'cookies',
    'ice',
    'paper products',
    'burgers & buns',
    'hot dogs & buns',
    'dessert',
    'condoments',
    'chips & dips'
  ];
  const allGuests = guestList.querySelectorAll('.guest-list li');
  console.log(allGuests);
  for (const guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    const randomPotluckItem = potluckItems[randomPotluckIndex];
    const listItem = document.createElement('li');
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

//Event listener for click on assign dishes button that runs assignItems function and then disables button.
assignButton.addEventListener('click', function () {
  assignItems();
  assignButton.disabled = true;
});
