// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Initialize Typed.js
const typed = new Typed('.text2', {
  strings: ['Prompt Engineer', 'Context Engineer', 'Web Developer', 'n8n Automation Expert'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

// Initialize Vanilla-Tilt
VanillaTilt.init(document.querySelectorAll(".prompt, .web-d, .n8n, .context, .service-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

// Navbar Logic
const menu = document.getElementById("menu1");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  const icon = menu.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});

// Particles.js Configuration
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00f3ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00f3ff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Dynamic Text Updates (keeping original logic but cleaning it up)
document.getElementById("logo2").textContent = "< Sanghaar >";
document.getElementById("home").textContent = "< Home >";
document.getElementById("about").textContent = "< About >";
document.getElementById("skills").textContent = "< Skills >";
document.getElementById("services").textContent = "< Services >";
document.getElementById("contact").textContent = "< Contact >";
// Loading Screen Logic
document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const progressBar = document.getElementById("progress-bar");
  const loader = document.getElementById("loader");
  const accessMsg = document.getElementById("access-msg");

  const messages = [
    "Initializing Development Environment...",
    "Loading AI Context Models...",
    "Compiling HTML, CSS & JavaScript...",
    "Training Prompt Engineering Algorithms...",
    "Rendering Portfolio Components...",
    "Optimizing User Experience...",
    "Deploying Creative Solutions...",
    "Welcome to My Portfolio!"
  ];

  let messageIndex = 0;
  let progress = 0;
  const totalDuration = 6000; // 6 seconds total
  const messageIntervalTime = totalDuration / messages.length;

  // Disable scrolling during load
  document.body.style.overflow = "hidden";

  // Message Interval
  const messageInterval = setInterval(() => {
    if (messageIndex < messages.length) {
      const line = document.createElement("div");
      line.textContent = `> ${messages[messageIndex]}`;
      bootText.appendChild(line);
      bootText.scrollTop = bootText.scrollHeight;
      messageIndex++;
    } else {
      clearInterval(messageInterval);
    }
  }, messageIntervalTime);

  // Progress Bar Animation
  const progressInterval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(progressInterval);
      showAccessGranted();
    }
  }, totalDuration / 100);

  function showAccessGranted() {
    accessMsg.style.display = "block";
    setTimeout(() => {
      loader.classList.add("fade-out");
      document.body.style.overflow = "auto"; // Re-enable scrolling
      
      // Trigger AOS refresh to ensure animations play correctly after loader
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }, 1000); // Show "Access Granted" for 1 second before fading out
  }
});  

