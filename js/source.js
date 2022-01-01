
///pain add functions
const painButton = document.getElementById(`painAdd`);
painButton.onclick = function () {
    // When the user clicks on the button, open the modal
    const modal = document.getElementById("modalPain");

    modal.style.display = "flex";

    // Get the <span> element that closes the modal
    const close = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    close.onclick = function () {
      modal.style.display = "none";

    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
  
      }
    }
    console.log(`register pain`);
};


//mobility add functions
const mobiButton = document.getElementById(`mobilityAdd`);
mobiButton.onclick = function () {
    const modal = document.getElementById("modalMobility");
    modal.style.display = "flex";
    const close = document.getElementsByClassName("close")[1];
    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    };
console.log(`register mobility`);
};