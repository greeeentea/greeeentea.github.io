function showTitle() {
  var title = document.getElementsByTagName("title")[1].text.toUpperCase();
  var desc = document.getElementById("text");
  desc.innerHTML = title;

  setTimeout(function () {
    desc.innerHTML = "";
  }, 5000);
}
