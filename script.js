 const images = [
    {
      src: "../img/1.jpeg",
      alt: "Image 1"
    },
    {
      src: "/img/2.jpeg",
      alt: "Image 2"
    },
    {
      src: "/img/3.jpeg",
      alt: "Image 3"
    },
    {
      src: "/img/4.jpeg",
        alt: "Image 4"
    },
    {
      src: "/img/5.jpeg",
      alt: "Image 5"
    },
    {
      src: "/img/6.jpeg",
      alt: "Image 6"
    },
    {
      src: "/img/7.jpeg",
      alt: "Image 7"
    },
    {
      src: "/img/8.jpeg",
      alt: "Image 8"
    },
    {
      src: "/img/9.jpeg",
      alt: "Image 9"
    },
    {
      src: "/img/10.jpeg",
      alt: "Image 10"
    },
    {
      src: "/img/11.jpeg",
      alt: "Image 11"
    },
    {
      src: "/img/12.jpeg",
      alt: "Image 12"
    },
    {
      src: "/img/13.jpeg",
      alt: "Image 13"
    },
    {src: "/img/14.JPG",
        alt: "Image 14"
    },
    {
      src: "/img/15.JPG",
      alt: "Image 15"
    }
    
  ];

  let currentIndex = 0;
  const imageEl = document.getElementById("carousel-image");
  const counterEl = document.getElementById("carousel-counter");
  const prevBtn = document.querySelector(".arrow.left");
  const nextBtn = document.querySelector(".arrow.right");

  function updateCarousel() {
    imageEl.src = images[currentIndex].src;
    imageEl.alt = images[currentIndex].alt;
    counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  nextBtn.addEventListener("click", () => {
    nextImage();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevImage();
    resetAutoSlide();
  });

  // Auto slide
  let autoSlide = setInterval(nextImage, 5000);

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextImage, 5000);
  }

  // Init
  updateCarousel();
