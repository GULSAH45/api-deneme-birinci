(async function fetchAndDisplayUsers() {
  const container = document.getElementById("user-container");

  try {
    // Veriyi çek
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    // user ları işlemek için map
    const userCards = users.map((user) => {
      // Kart içeriği
      return `
          <div class="card">
            <h2>${user.name}</h2>
            <div class="section">
              <i class="fa fa-user"></i>
              <span>User Name:</span> ${user.username}
            </div>
            <div class="section">
              <i class="fa fa-envelope"></i>
              <span>Email:</span> ${user.email}
            </div>
            <div class="section">
              <i class="fa fa-phone"></i>
              <span>Phone:</span> ${user.phone}
            </div>
            <div class="section">
              <i class="fa fa-location-dot"></i>
              <span>Address:</span> ${user.address.street}, ${user.address.city}
            </div>
            <div class="section">
              <i class="fa fa-building"></i>
              <span>Company:</span> ${user.company.name}
            </div>
            <div class="section">
              <i class="fa fa-globe"></i>
              <span>Website:</span> <a href="http://${user.website}" target="_blank">${user.website}</a>
            </div>
          </div>
        `;
    });

    // Kartları birleştir ve sayfaya ekle
    container.innerHTML = userCards.join("");
  } catch (error) {
    console.error("Veriler alınırken bir hata oluştu:", error);
    container.innerHTML = "<p>Veriler yüklenemedi.</p>";
  }
})();
