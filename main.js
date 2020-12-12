<script>
    var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function myFunction() {
	  var x = document.getElementById("myTopnav");
	  if (x.className === "main") {
	    x.className += " responsive";
	  } else {
	    x.className = "main";
	  }
	}
</script>