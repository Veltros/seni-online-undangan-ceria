
// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Initialize current year for footer copyright
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Header Scroll Effect
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  // Audio setup
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  let isPlaying = false;
  
  // Handle music toggle
  musicToggle.addEventListener('click', function() {
    if (isPlaying) {
      bgMusic.pause();
      musicToggle.classList.remove('playing');
      musicToggle.innerHTML = '<span class="music-icon">♪</span>';
    } else {
      bgMusic.play().catch(e => {
        console.log('Audio play failed:', e);
        alert('Silahkan klik layar untuk memulai musik');
      });
      musicToggle.classList.add('playing');
      musicToggle.innerHTML = '<span class="music-icon">■</span>';
    }
    isPlaying = !isPlaying;
  });
  
  // Auto-play workaround (wait for user interaction)
  document.body.addEventListener('click', function() {
    if (bgMusic && !isPlaying && bgMusic.paused) {
      // Only try to auto-play once after user interaction
      const playPromise = bgMusic.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          isPlaying = true;
          musicToggle.classList.add('playing');
          musicToggle.innerHTML = '<span class="music-icon">■</span>';
        }).catch(error => {
          console.log('Auto-play prevented:', error);
        });
      }
    }
  }, { once: true });
  
  // Scroll handler for sticky header
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
  // Mobile Menu Toggle
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close mobile menu when clicking on links
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
  
  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and content
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      
      // Add active class to current button and content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Gallery filter functionality
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const galleryGrid = document.getElementById('galleryGrid');
  
  if (galleryGrid && galleryTabs.length > 0) {
    galleryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Remove active class from all tabs
        document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
        
        // Add active class to current tab
        this.classList.add('active');
        
        // Filter gallery items
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
          if (category === 'semua' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Form submission
  const registrationForm = document.getElementById('registrationForm');
  const toast = document.getElementById('toast');
  
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show toast notification
      toast.classList.add('show');
      
      // Hide toast after 3 seconds
      setTimeout(function() {
        toast.classList.remove('show');
      }, 3000);
      
      // Reset form
      registrationForm.reset();
    });
  }
  
  // Populate Schedule Data
  const scheduleData = {
    hari1: [
      {
        time: "09:00 - 10:30",
        title: "Pembukaan & Sambutan",
        description: "Pembukaan acara oleh MC dan sambutan dari Kepala Sekolah SMK Ceria",
        presenter: "Panitia OSIS"
      },
      {
        time: "10:30 - 12:00",
        title: "Pertunjukan Musik Tradisional",
        description: "Penampilan gamelan dan alat musik tradisional lainnya",
        presenter: "Kelompok Musik Tradisional"
      },
      {
        time: "13:00 - 14:30",
        title: "Pertunjukan Tari Daerah",
        description: "Tarian tradisional dari berbagai daerah di Indonesia",
        presenter: "Klub Tari SMK Ceria"
      },
      {
        time: "15:00 - 16:30",
        title: "Teater Modern",
        description: "Pertunjukan drama modern bertema 'Mimpi Tanpa Batas'",
        presenter: "Klub Teater"
      },
      {
        time: "16:30 - 18:00",
        title: "Pameran Seni Rupa",
        description: "Pameran karya seni rupa siswa SMK Ceria",
        presenter: "Jurusan Desain Grafis"
      }
    ],
    hari2: [
      {
        time: "09:00 - 10:30",
        title: "Workshop Seni Lukis",
        description: "Workshop teknik lukis dasar untuk pemula",
        presenter: "Guru Seni Rupa"
      },
      {
        time: "10:30 - 12:00",
        title: "Fashion Show Kreasi",
        description: "Peragaan busana kreasi siswa jurusan tata busana",
        presenter: "Jurusan Tata Busana"
      },
      {
        time: "13:00 - 14:30",
        title: "Pertunjukan Band Sekolah",
        description: "Penampilan band-band terbaik SMK Ceria",
        presenter: "Ekstrakurikuler Musik"
      },
      {
        time: "15:00 - 16:30",
        title: "Pentas Seni Modern",
        description: "Kolaborasi modern dance dan live music",
        presenter: "Kolaborasi Siswa"
      },
      {
        time: "16:30 - 18:00",
        title: "Penutupan & Pengumuman",
        description: "Pengumuman pemenang kompetisi dan penutupan acara",
        presenter: "Kepala Sekolah & OSIS"
      }
    ]
  };
  
  // Render schedule cards
  function renderSchedule() {
    const day1Container = document.querySelector('#hari1 .schedule-cards');
    const day2Container = document.querySelector('#hari2 .schedule-cards');
    
    if (day1Container) {
      scheduleData.hari1.forEach(item => {
        day1Container.appendChild(createScheduleCard(item));
      });
    }
    
    if (day2Container) {
      scheduleData.hari2.forEach(item => {
        day2Container.appendChild(createScheduleCard(item));
      });
    }
  }
  
  // Create schedule card element
  function createScheduleCard(data) {
    const card = document.createElement('div');
    card.className = 'schedule-card';
    
    card.innerHTML = `
      <div class="schedule-time">${data.time}</div>
      <div class="schedule-content">
        <h3 class="schedule-title">${data.title}</h3>
        <p>${data.description}</p>
        <div class="schedule-presenter">
          <svg width="16" height="16" viewBox="0 0 24 24" class="icon">
            <use href="#icon-user"></use>
          </svg>
          <span>${data.presenter}</span>
        </div>
      </div>
    `;
    
    return card;
  }
  
  // Gallery data
  const galleryData = [
    {
      image: "/placeholder.svg",
      title: "Tari Saman",
      category: "tari",
      description: "Pertunjukan tari Saman dari Aceh"
    },
    {
      image: "/placeholder.svg",
      title: "Orkestra Gamelan",
      category: "musik",
      description: "Pertunjukan musik gamelan Jawa"
    },
    {
      image: "/placeholder.svg",
      title: "Drama Ramayana",
      category: "teater",
      description: "Pentas teater cerita Ramayana"
    },
    {
      image: "/placeholder.svg",
      title: "Lukisan Pemandangan Tradisional",
      category: "lukisan",
      description: "Karya seni lukis pemandangan tradisional"
    },
    {
      image: "/placeholder.svg",
      title: "Tari Pendet",
      category: "tari",
      description: "Pertunjukan tari Pendet dari Bali"
    },
    {
      image: "/placeholder.svg",
      title: "Konser Angklung",
      category: "musik",
      description: "Pertunjukan musik menggunakan alat musik Angklung"
    },
    {
      image: "/placeholder.svg",
      title: "Lukisan Abstrak",
      category: "lukisan",
      description: "Karya seni lukis dengan gaya abstrak modern"
    },
    {
      image: "/placeholder.svg",
      title: "Teater Wayang Wong",
      category: "teater",
      description: "Pertunjukan teater tradisional Wayang Wong"
    }
  ];
  
  // Render gallery items
  function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (galleryGrid) {
      galleryData.forEach(item => {
        galleryGrid.appendChild(createGalleryItem(item));
      });
    }
  }
  
  // Create gallery item element
  function createGalleryItem(data) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', data.category);
    
    item.innerHTML = `
      <img src="${data.image}" alt="${data.title}">
      <div class="gallery-overlay">
        <h3 class="gallery-title">${data.title}</h3>
        <p class="gallery-category">${data.description}</p>
      </div>
    `;
    
    return item;
  }
  
  // Initialize schedule and gallery
  renderSchedule();
  renderGallery();
});
