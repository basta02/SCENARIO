function showModal() {
  document.getElementById("popup-modal").style.display = "block";
}

function hideModal() {
  document.getElementById("popup-modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("popup-modal");
  if (event.target === modal) {
    hideModal();
  }
}
