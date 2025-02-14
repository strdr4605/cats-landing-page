const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");

cat1.addEventListener("click", function () {
  console.log("clicked on cat1");

  const dialog = cat1.getElementsByTagName("dialog")[0];
  console.log(dialog);
  dialog.open = true;

  const closeBtn = dialog.getElementsByClassName("close-dialog")[0];

  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dialog.open = false;
  });
});

cat2.addEventListener("click", function () {
  console.log("clicked on cat2");
});

cat3.addEventListener("click", function () {
  console.log("clicked on cat3");
});
