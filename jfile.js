function toggleSection(sectionId) {
  var elements = document.getElementsByClassName("sections");
  
  console.log(sectionId);
  
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === sectionId) {
      elements[i].classList.remove("hidden");
    } else {
      elements[i].classList.add("hidden");
    }
  }
}
