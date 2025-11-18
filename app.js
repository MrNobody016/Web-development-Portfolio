document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const projects = [
    {
      title: "<h3>Anime Relics: E-Commerce Mobile App  Design Prototype (Collaborative)</h3>",
      desc: `Anime Relics is a collaborative mobile e-commerce prototype designed to deliver a smooth, visually engaging shopping experience for anime fans. 
            I worked on the UX flow, interface layout, and interactive components, ensuring the app feels intuitive, fast, and enjoyable from browsing to checkout.`,
      link: "https://shorturl.at/FyJNY"
    },
  ];

  const list = document.getElementById('projects-list');
  if (list) {
    projects.forEach(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <p><a href="${p.link}" target="_blank" rel="noopener noreferrer">Details</a></p>
      `;
      list.appendChild(div);
    });
  }

   const education = [
    {
      title: "<h3>Ajenkya D.Y. Patil University</h3>",
      desc: `Bachelor of Computer Application in Media and IT <br>
      Current CGPA: 9.18 <br>
      (2023 - 2026)
      `,
    },
    {
      title: "<h3>Vasant Vihar High School and Junior College</h3>",
      desc: `11th-12th <br>
      Grade Percentage: 80% <br>
      (2021 - 2023)
      `,
    },
  ];

  const list2 = document.getElementById('education-list');
  if (list2) {
    education.forEach(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
      `;
      list2.appendChild(div);
    });
  }

  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', () => {
      formMessage.textContent = "✅ Thank you! Your message is being sent securely.";
      formMessage.style.color = "green";
    });
  }

  const toggle = document.createElement('button');
  toggle.textContent = '🌓';
  toggle.classList.add('theme-toggle');
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
});
