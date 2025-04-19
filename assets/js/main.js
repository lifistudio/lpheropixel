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
    image: [
      "assets/img/4bit_craft.jpeg",
      "assets/img/4bit2.jpg",
      "assets/img/4bit3.jpg",
      "assets/img/4bit4.jpg",
    ],
    description:
      "Turn your Minecraft into a super cute game! Everything seems tiny: every block, every mob, every tree.<br><br>- Super cute 4x4 pack<br>- 4x4 blocks, items, mobs and more<br>- Faithful to vanilla textures<br>- 1.20 Resource Pack",
    builders:
      "affe481 - koin1 - BigKingHD - Chonike - FlyingZera - hackerpotter - M1ller_ - sebsy - VyseHD - WoIstMeineSocke - Youseles",
  },
  {
    id: 2,
    title: "More Allays",
    date: "July 2019",
    image: [
          "assets/img/more_allays.jpeg",
          "assets/img/more_allays2.jpg",
          "assets/img/more_allays3.jpg",
          "assets/img/more_allays4.jpg",
    ],
    description:
      "+ 16 cute Allays added!<br> <br>+ Allay Dungeons &amp; Temples<br><br>+ 10 Allay skins included<br><br> ++ Multiplayer &amp; Singleplayer friendly<br><br><br>Start your Minecraft survival adventure! Many new Allays are waiting for you: Enderman Allay, Axolotl Allay, Warden Allay and many more! Free them from the dungeons and temples. Tame them and they will become your loyal pets!",
    builders:
      "affe481 - koin1 - BigKingHD - Chonike - FlyingZera - hackerpotter - M1ller_ - sebsy - VyseHD - WoIstMeineSocke - Youseles",
  },
  {
    id: 3,
    title: "Giant TNT",
    date: "17 February 2025 ",
    image: [
      "assets/img/giant_tnt.jpg",
      "assets/img/giant_tnt2.jpg",
      "assets/img/giant_tnt3.jpg",
      "assets/img/giant_tnt4.jpg",
    ],
    description: "Description: Do you need the most extreme? These TNTs not only destroy bases, but also entire villages and large cities. Have fun with them! <br><br>Over 40 different Giant TNTs Maximum destruction and explosions Tornado, meteor, 5,000x and more TNTs!<br><br>++ Use it on your world! <br>++ Multiplayer friendly!<br>",
    builders: "Builder list goes here",
  },
  {
    id: 4,
    title: "Pastel Paradise",
    date: "July 2019",
    image: [
      "assets/img/pastelparadise.jpg",
      "assets/img/pastelparadise2.jpg",
      "assets/img/pastelparadise3.jpg",
      "assets/img/pastelparadise4.jpg",
    ],
    description: "Immerse yourself in the soothing beauty of pastel textures and colors.<br><br>+ 1.21 Tricky Trials textures update<br>+ Everything retextured in pastel style<br>+ New mob, animal and boss models<br>+ Texture block variations<br>+ Animated ores<br>+ Attention to detail<br><br>++ Use this texture pack in your world!<br>++ Watch the trailer! ++",
    builders: "Builder list goes here",
  },
  {
    id: 5,
    title: "Zombie Bunker",
    date: "July 2019",
    image: [
      "assets/img/zombie_bunker.jpg",
      "assets/img/zombiew_bunker2.jpg",
      "assets/img/zombiew_bunker3.jpg",
      "assets/img/zombiew_bunker4.jpg",
    ],
    description: "Protect your friends and yourself from a Zombie Apocalypse in a high security base! Your underground bunker has everything you need to survive. Press buttons and activate the anti-zombie walls!<br><br>+ Activatable safety walls<br>+ Secret bunker<br>+ Secure base<br>+ Zombie apocalypse<br>+ Custom zombies<br>++ Multiplayer and singleplayer",
    builders: "Builder list goes here",
  },
  {
    id: 6,
    title: "More Creepers",
    date: "July 2019",
    image: [
      "assets/img/more_creepers.jpg",
      "assets/img/more_creepers2.jpg",
      "assets/img/more_creepers3.jpg",
      "assets/img/more_creepers4.jpg",
    ],
    description: "BOOOM! Add more unique Creepers to your world or realms project.<br><br>+ 10 ultimate Creeper<br>+ Amazing explosions<br>+ Collect creeper heads<br><br>++ Use it in YOUR WORLD! ++",
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


// document.addEventListener("DOMContentLoaded", function () {
//   const portfolioContainer = document.getElementById("portfolio-container");
//   const modal = document.getElementById("portfolio-modal");
//   const modalContent = document.getElementById("modal-content");
//   const closeBtn = document.querySelector('[data-modal-hide="portfolio-modal"]');

//   // Create portfolio items
//   portfolioItems.forEach((item) => {
//     const portfolioItem = document.createElement("div");
//     portfolioItem.className = "flex justify-center";
//     portfolioItem.innerHTML = `
//         <button data-modal-target="portfolio-modal" data-modal-toggle="portfolio-modal"
//           class="block text-white bg-[#202020] font-medium rounded-lg text-sm px-2 py-3 text-center w-[90%] hover:opacity-70  hover:border-[#379600] hover:border-[1px] hover:space-y-2 portfolio-item transition-all duration-300 ease-in-out"
//           type="button" data-id="${item.id}">
//           <span class="flex flex-col p-2 items-center justify-start">
//             <img src="${item.image}" alt="" class="w-[95%] h-[60%] mb-5 rounded-sm">
//             <p class="font-semibold text-xl text-left w-full px-2 mb-1">${item.title}</p>
//             <p class="text-xs text-left w-full px-2 text-[#A5A5A5]">${item.date}</p>
//           </span>
//         </button>
//     `;
//     portfolioContainer.appendChild(portfolioItem);
//   });

//   // Handle modal open
//   document.querySelectorAll(".portfolio-item").forEach((button) => {
//     button.addEventListener("click", function() {
//       const itemId = parseInt(this.getAttribute("data-id"));
//       const item = portfolioItems.find((i) => i.id === itemId);

//       if (item) {
//         modalContent.innerHTML = `
//           <h1 class="text-center">${item.title}</h1>
//             <p class="text-xs text-center text-[#A5A5A5] mb-6">${item.date}</p>
//             <img src="${item.image}" alt="" class="w-full mb-5 rounded-sm">
//             <p class="text-sm text-start text-[#A5A5A5] mb-6">${item.description}</p>
//             <p class="text-sm text-[#A5A5A5] mb-6">Builder: ${item.builders}</p>
//         `;
        
//         // Show modal with animation
//         modal.classList.remove('hidden');
//         document.body.style.overflow = 'hidden'; // Prevent scrolling
//         setTimeout(() => {
//           modal.classList.add('show');
//         }, 10);
//       }
//     });
//   });

//   // Handle modal close
//   closeBtn.addEventListener('click', function() {
//     modal.classList.remove('show');
//     setTimeout(() => {
//       modal.classList.add('hidden');
//       document.body.style.overflow = 'auto'; // Re-enable scrolling
//     }, 300);
//   });

//   // Close when clicking outside
//   modal.addEventListener('click', function(e) {
//     if (e.target === modal) {
//       modal.classList.remove('show');
//       setTimeout(() => {
//         modal.classList.add('hidden');
//         document.body.style.overflow = 'auto';
//       }, 300);
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const portfolioContainer = document.getElementById("portfolio-container");
  const modal = document.getElementById("portfolio-modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.querySelector('[data-modal-hide="portfolio-modal"]');

  // Membuat item portofolio
  portfolioItems.forEach((item) => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "flex justify-center";
    portfolioItem.innerHTML = `
        <button data-modal-target="portfolio-modal" data-modal-toggle="portfolio-modal"
          class="block text-white bg-[#202020] font-medium rounded-lg text-sm px-2 py-3 text-center w-[90%] hover:opacity-70  hover:border-[#379600] hover:border-[1px] hover:space-y-2 portfolio-item transition-all duration-300 ease-in-out"
          type="button" data-id="${item.id}">
          <span class="flex flex-col p-2 items-center justify-start">
            <img src="${item.image[0]}" alt="" class="w-[95%] h-[60%] mb-5 rounded-sm">
            <p class="font-semibold text-xl text-left w-full px-2 mb-1">${item.title}</p>
            <p class="text-xs text-left w-full px-2 text-[#A5A5A5]">${item.date}</p>
          </span>
        </button>
    `;
    portfolioContainer.appendChild(portfolioItem);
  });

  // Menangani pembukaan modal
  document.querySelectorAll(".portfolio-item").forEach((button) => {
    button.addEventListener("click", function() {
      const itemId = parseInt(this.getAttribute("data-id"));
      const item = portfolioItems.find((i) => i.id === itemId);

      if (item) {
        const images = item.image.map((img) => `<img src="${img}" alt="" class="w-full mb-5 rounded-sm">`).join('');
        modalContent.innerHTML = `
          <h1 class="text-center">${item.title}</h1>
          <p class="text-xs text-center text-[#A5A5A5] mb-6">${item.date}</p>
          <div class="image-slider">
            ${images}
          </div>
          <p class="text-sm text-start text-[#A5A5A5] mb-6">${item.description}</p>
          <p class="text-sm text-[#A5A5A5] mb-6">Builder: ${item.builders}</p>
        `;

        // Inisialisasi slider
        initSlider();

        // Menampilkan modal dengan animasi
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Mencegah scrolling
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      }
    });
  });

  // Menangani penutupan modal
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto'; // Mengaktifkan kembali scrolling
    }, 300);
  });

  // Menutup saat mengklik di luar modal
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 300);
    }
  });

  // Inisialisasi fungsionalitas slider
//   function initSlider() {
//     const images = modalContent.querySelectorAll('.image-slider img');
//     let currentIndex = 0;

//     // Sembunyikan semua gambar kecuali yang pertama
//     images.forEach((img, index) => {
//         img.style.display = index === 0 ? 'block' : 'none';
//     });

//     // Membuat tombol navigasi dengan ikon
//     const prevButton = document.createElement('button');
//     prevButton.innerHTML = '<i class="ri-arrow-left-line"></i>'; // Ikon panah kiri
//     prevButton.className = 'slider-button bg-[#379600] text-white p-2 rounded-l-md hover:bg-[#3b6b1f] transition-all duration-300 absolute top-60 left-20';

//     const nextButton = document.createElement('button');
//     nextButton.innerHTML = '<i class="ri-arrow-right-line"></i>'; // Ikon panah kanan
//     nextButton.className = 'slider-button bg-[#379600] text-white p-2 rounded-r-md hover:bg-[#3b6b1f] transition-all duration-300';

//     // Menambahkan tombol ke modal
//     modalContent.appendChild(prevButton);
//     modalContent.appendChild(nextButton);

//     // Menangani klik tombol "Sebelumnya"
//     prevButton.addEventListener('click', function() {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
//         updateSlider();
//     });

//     // Menangani klik tombol "Selanjutnya"
//     nextButton.addEventListener('click', function() {
//         currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
//         updateSlider();
//     });

//     // Fungsi untuk memperbarui tampilan slider
//     function updateSlider() {
//         images.forEach((img, index) => {
//             img.style.display = index === currentIndex ? 'block' : 'none';
//         });
//     }
// }

function initSlider() {
  const images = modalContent.querySelectorAll('.image-slider img');
  let currentIndex = 0;

  images.forEach((img, index) => {
      img.style.display = index === 0 ? 'block' : 'none';
  });

  const prevButton = document.createElement('button');
  prevButton.innerHTML = '<i class="ri-arrow-left-line"></i>'; // Ikon panah kiri
  prevButton.className = 'slider-button bg-[#379600] text-white p-2 rounded-l-md hover:bg-[#3b6b1f] transition-all duration-300 absolute left-5 transform -translate-y-1/2';

  const nextButton = document.createElement('button');
  nextButton.innerHTML = '<i class="ri-arrow-right-line"></i>'; // Ikon panah kanan
  nextButton.className = 'slider-button bg-[#379600] text-white p-2 rounded-r-md hover:bg-[#3b6b1f] transition-all duration-300 absolute right-5 transform -translate-y-1/2';

  modalContent.appendChild(prevButton);
  modalContent.appendChild(nextButton);

  function adjustButtonPosition() {
      if (window.innerWidth <= 768) { 
          prevButton.style.top = '35%'; 
          nextButton.style.top = '35%'; 
      } else {
          prevButton.style.top = '40%'; 
          nextButton.style.top = '40%'; 
      }
  }

  adjustButtonPosition();

  window.addEventListener('resize', adjustButtonPosition);

  prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      updateSlider();
  });

  nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      updateSlider();
  });

  function updateSlider() {
      images.forEach((img, index) => {
          img.style.display = index === currentIndex ? 'block' : 'none';
      });
  }
}
});