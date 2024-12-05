const initialCards = [
  {
    name: "Georgie",
    link: "https://unsplash.com/photos/a-close-up-of-a-dog-with-a-mountain-in-the-background-ALG0gP4GDbw",
  },
  {
    name: "Living Space",
    link: "https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-staircase-PuTKvRO7Fjs",
  },
  {
    name: "Wandering",
    link: "https://unsplash.com/photos/a-man-is-walking-down-a-cobblestone-street-dGJEFS8wTFw",
  },
  {
    name: "Transport",
    link: "https://unsplash.com/photos/a-black-sports-car-driving-down-a-road-Ls0ZPURpoDE",
  },
  {
    name: "Rechage",
    link: "https://unsplash.com/photos/a-table-topped-with-a-notebook-and-a-cup-of-tea-b1nKa1IAzI0",
  },
  {
    name: "Ending a End",
    link: "https://unsplash.com/photos/a-group-of-people-walking-across-a-bridge-fF1DWEA1qB8",
  },
];

const profileEditButton = document.querySelector(".profile__edit-btn");

const editModal = document.querySelector("#edit-modal");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");

function openModal() {
  editModal.classList.add("modal_opened");
}
function closeModal() {
  editModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);

editModalCloseBtn.addEventListener("click", closeModal);
