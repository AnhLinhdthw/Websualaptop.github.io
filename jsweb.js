window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky")
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



let slideIndext = 1;
showSlidess(slideIndext);

// Next/previous controls
function plusSlidess(n) {
  showSlidess(slideIndext += n);
}

// Thumbnail image controls
function currentSlidess(n) {
  showSlidess(slideIndext = n);
}

function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  if (n > slides.length) {slideIndext = 1}
  if (n < 1) {slideIndext = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidess, 2000); // Change image every 2 seconds

  slides[slideIndex-1].style.display = "block";
}

//Tìm kiém
function timkiem(){
	var input=document.getElementById("search");
	var filter = input.value.toUpperCase();
	var goiy=document.getElementById("goiy");
	var li = goiy.getElementsByTagName("li");
	document.getElementById("goiy").style.display="block";
	for(var i=0;i<li.length;i++){
		var a = li[i].getElementsByTagName("a")[0];
		var txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
	}
	if(filter==""){
		document.getElementById("goiy").style.display="none";
	}
}


