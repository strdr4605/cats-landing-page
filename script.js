const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");

function openCatDialog(catElement) {
  const dialog = catElement.getElementsByTagName("dialog")[0];
  dialog.open = true;

  const closeBtn = dialog.getElementsByClassName("close-dialog")[0];

  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dialog.open = false;
  });
}

cat1.addEventListener("click", function () {
  openCatDialog(cat1);
});

cat2.addEventListener("click", function () {
  openCatDialog(cat2);
});

cat3.addEventListener("click", function () {
  openCatDialog(cat3);
});
