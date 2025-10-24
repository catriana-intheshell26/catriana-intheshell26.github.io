function mostrarVideo() {
    const container = document.getElementById("videoContainer");
    const iframe = document.getElementById("videoFrame");

    if (container.style.display === "block") {
      container.style.display = "none";
      iframe.src = "";
    } else {
      container.style.display = "block";
      iframe.src = "https://www.youtube.com/embed/m5rx-Cjd-Mc?autoplay=1";
    }
  }