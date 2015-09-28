(function() {
    var sliderbox = document.querySelector(".sliderbox");
    var slider = document.querySelector(".slider");
    var slides;
    var slidesQuantity;
    var prevSlide = document.querySelector(".arrow-prev");
    var nextSlide = document.querySelector(".arrow-next");
    var index = 0;
    var slideContent = "";


    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
      if (xhr.status == 200) {
        var sliderData = JSON.parse(xhr.responseText);
        renderSlide(sliderData.images);
        slides = document.querySelectorAll(".slideElement");
        slidesQuantity = slides.length;
        listeners();

      }
    };
    xhr.open("GET", "images.json", true);
    xhr.send(null);

    function renderSlide(slidesArray) {
      slidesArray.forEach(createSlide);
      sliderbox.innerHTML = slideContent;
    };

    function createSlide(element) {
      slideContent += "<div class='slideElement'>";
      slideContent += '<img src="' + element.path + '" ';
      slideContent += 'alt ="' + element.title + '" />';
      slideContent += '<div class="caption">';
      slideContent += '<span>' + element.id + '</span>';
      slideContent += '<h4>' + element.title + '</h4>';
      slideContent += '<p>' + element.descr + '</p>';
      slideContent += '</div></div>';
    }




    function move(newIndex) {
      var currentSlide = slides[newIndex];
      sliderbox.style.left = "-" + currentSlide.offsetLeft + "px";
    }

    function listeners() {
      nextSlide.addEventListener("click", function() {
      index++;
      nextSlide.style.display = "block";

      if (index == slidesQuantity - 1) {
        // index = slidesQuantity - 1;
        nextSlide.style.display = "none";
      }
      move(index);
    });

    prevSlide.addEventListener("click", function() {
      index--;
      prevSlide.style.display = "block";

      if (index == 0) {
        index = 0;
        prevSlide.style.display = "none";
      }
      move(index);
    });
    }
    

    



  }

)();
