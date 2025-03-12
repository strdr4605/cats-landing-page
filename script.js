const catObject1 = {
  name: "Poppy",
  description:
    "The cat, also referred to as the domestic cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae.",
  imageSrc: "https://placecats.com/300/200",
};

const cats = [
  catObject1,
  {
    name: "Neo",
    description:
      "Quisque a sollicitudin metus. Vivamus non porta leo, nec pharetra tellus.",
    imageSrc: "https://placecats.com/neo/300/200",
  },
  {
    name: "Millie",
    description:
      "Pellentesque tortor lacus, tristique nec posuere nec, interdum a eros.Pellentesque tortor lacus, tristique nec posuere nec, interdum a eros.",
    imageSrc: "https://placecats.com/millie/300/200",
  },
  {
    name: "Bella",
    description: "Bella is a nice cat",
    imageSrc: "https://placecats.com/bella/300/200",
  },
  {
    name: "Neo 2",
    description: "A quick and simple service for getting pictures of cats for use as placeholders in your designs or code. Just put your image size (width & height) after our URL and you'll get a placeholder.",
    imageSrc: "https://placecats.com/neo_2/300/200"
  }
];

console.log(cats);

function showCats() {
  const catsContainer = document.getElementsByClassName("cats-container")[0];

  for (let i = 0; i < cats.length; i++) {
    const currentCat = cats[i];

    const catContainer = document.createElement("div");
    catContainer.classList.add("cat-container");

    catContainer.innerHTML = `
    <img src="${currentCat.imageSrc}" class="cat-img" alt="${currentCat.name}" />
          <p>${currentCat.name}</p>
          <dialog>
            <div class="dialog-content">
              <img
                class="dialog-img"
                src="${currentCat.imageSrc}"
                alt="${currentCat.name}"
              />
              <h3>${currentCat.name}</h3>
              <p>${currentCat.description}</p>
            </div>
            <button class="close-dialog">X</button>
          </dialog>
    `;

    catContainer.addEventListener("click", function () {
      openCatDialog(catContainer);
    });

    catsContainer.appendChild(catContainer);
  }
}

showCats();

function openCatDialog(catElement) {
  const dialog = catElement.getElementsByTagName("dialog")[0];
  dialog.open = true;

  const closeBtn = dialog.getElementsByClassName("close-dialog")[0];

  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dialog.open = false;
  });
}
