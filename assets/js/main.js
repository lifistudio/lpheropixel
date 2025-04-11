// -------------- Toggle Button --------------
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// -------------- Scroll Navbar --------------
const scrollHeader = () => {
  const header = document.getElementById("navbar");

  if (this.scrollY >= 50) {
    header.classList.add("bg-black", "bg-opacity-80");
  } else {
    header.classList.remove("bg-black", "bg-opacity-80");
  }
};

window.addEventListener("scroll", scrollHeader);

// portfolio
const portfolioItems = [
  {
    id: 1,
    title: "4Bit Craft",
    date: "July 2019",
    image: "assets/img/4bit_craft.jpeg",
    description:
      "Turn your Minecraft into a super cute game! Everything seems tiny: every block, every mob, every tree.",
    builders:
      "affe481 - koin1 - BigKingHD - Chonike - FlyingZera - hackerpotter - M1ller_ - sebsy - VyseHD - WoIstMeineSocke - Youseles",
  },
  {
    id: 2,
    title: "More Allays",
    date: "July 2019",
    image: "assets/img/more_allays.jpeg",
    description:
      "Explore new places, be somebody different, and discover new ways to play with community creations from Minecraft Marketplace.",
    builders:
      "affe481 - koin1 - BigKingHD - Chonike - FlyingZera - hackerpotter - M1ller_ - sebsy - VyseHD - WoIstMeineSocke - Youseles",
  },
  {
    id: 3,
    title: "Giant TNT",
    date: "July 2019",
    image: "assets/img/giant_tnt.jpg",
    description: "Another description for Western World project.",
    builders: "Builder list goes here",
  },
  {
    id: 4,
    title: "Pastel Paradise",
    date: "July 2019",
    image: "assets/img/pastelparadise.jpg",
    description: "Another description for any project.",
    builders: "Builder list goes here",
  },
  {
    id: 5,
    title: "Zombie Bunker",
    date: "July 2019",
    image: "assets/img/zombie_bunker.jpg",
    description: "Another description for any project.",
    builders: "Builder list goes here",
  },
  {
    id: 6,
    title: "More Creepers",
    date: "July 2019",
    image: "assets/img/more_creepers.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione harum expedita obcaecati? Beatae, quam laudantium!.",
    builders: "Builder list goes here",
  },
];

// document.addEventListener("DOMContentLoaded", function () {
//   const portfolioContainer = document.getElementById("portfolio-container");
//   const modal = document.getElementById("portfolio-modal");
//   const modalContent = document.getElementById("modal-content");

//   portfolioItems.forEach((item) => {
//     const portfolioItem = document.createElement("div");
//     portfolioItem.className = "flex justify-center";
//     portfolioItem.innerHTML = `
        // <button data-modal-target="portfolio-modal" data-modal-toggle="portfolio-modal"
        //   class="block text-white bg-[#202020] font-medium rounded-lg text-sm px-2 py-3 text-center w-[90%] hover:opacity-70 duration-300 hover:border-[#379600] hover:border-[1px] hover:space-y-2 portfolio-item"
        //   type="button" data-id="${item.id}">
        //   <span class="flex flex-col p-2 items-center justify-start">
        //     <img src="${item.image}" alt="" class="w-[95%] h-[60%] mb-5 rounded-sm">
        //     <p class="font-semibold text-xl text-left w-full px-2 mb-1">${item.title}</p>
        //     <p class="text-xs text-left w-full px-2 text-[#A5A5A5]">${item.date}</p>
        //   </span>
        // </button>
//       `;
//     portfolioContainer.appendChild(portfolioItem);
//   });

//   document.querySelectorAll(".portfolio-item").forEach((button) => {
//     button.addEventListener("click", function () {
//       const itemId = parseInt(this.getAttribute("data-id"));
//       const item = portfolioItems.find((i) => i.id === itemId);

//       if (item) {
//         modalContent.innerHTML = `
            // <h1 class="text-center">${item.title}</h1>
            // <p class="text-xs text-center text-[#A5A5A5] mb-6">${item.date}</p>
            // <img src="${item.image}" alt="" class="w-full mb-5 rounded-sm">
            // <p class="text-sm text-start text-[#A5A5A5] mb-6">${item.description}</p>
            // <p class="text-sm text-[#A5A5A5] mb-6">Builder: ${item.builders}</p>
//           `;
//       }
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const portfolioContainer = document.getElementById("portfolio-container");
  const modal = document.getElementById("portfolio-modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.querySelector('[data-modal-hide="portfolio-modal"]');

  // Create portfolio items
  portfolioItems.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "flex justify-center";
    portfolioItem.innerHTML = `
        <button data-modal-target="portfolio-modal" data-modal-toggle="portfolio-modal"
          class="block text-white bg-[#202020] font-medium rounded-lg text-sm px-2 py-3 text-center w-[90%] hover:opacity-70  hover:border-[#379600] hover:border-[1px] hover:space-y-2 portfolio-item transition-all duration-300 ease-in-out"
          type="button" data-id="${item.id}">
          <span class="flex flex-col p-2 items-center justify-start">
            <img src="${item.image}" alt="" class="w-[95%] h-[60%] mb-5 rounded-sm">
            <p class="font-semibold text-xl text-left w-full px-2 mb-1">${item.title}</p>
            <p class="text-xs text-left w-full px-2 text-[#A5A5A5]">${item.date}</p>
          </span>
        </button>
    `;
    portfolioContainer.appendChild(portfolioItem);
  });

  // Handle modal open
  document.querySelectorAll(".portfolio-item").forEach((button) => {
    button.addEventListener("click", function() {
      const itemId = parseInt(this.getAttribute("data-id"));
      const item = portfolioItems.find((i) => i.id === itemId);

      if (item) {
        modalContent.innerHTML = `
          <h1 class="text-center">${item.title}</h1>
            <p class="text-xs text-center text-[#A5A5A5] mb-6">${item.date}</p>
            <img src="${item.image}" alt="" class="w-full mb-5 rounded-sm">
            <p class="text-sm text-start text-[#A5A5A5] mb-6">${item.description}</p>
            <p class="text-sm text-[#A5A5A5] mb-6">Builder: ${item.builders}</p>
        `;
        
        // Show modal with animation
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      }
    });
  });

  // Handle modal close
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 300);
  });

  // Close when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 300);
    }
  });
});
