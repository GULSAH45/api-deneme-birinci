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
           <a class="btn btn-danger" href="user-details.html?userId=${user.id}">More Information</a>
</div>

<div class="section">
           <a class="btn btn-danger" href="posts.html?postId=${user.id}">GO Post</a>
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

// Search bar fonksiyonu
document
  .querySelector("#myInput")
  .addEventListener("input", async function searchInput() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const searchQuery = this.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery)
    );

    const userCards = filteredUsers
      .map((user) => {
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
    <a class="btn btn-danger" href="user-details.html?userId=${user.id}">More Information</a>
</div>
   </div>
 `;
      })
      .join(""); // Tüm kartları birleştirmek için join ek

    document.querySelector("#user-container").innerHTML = userCards; // Sonuçları ekrana yazdırıyoruz.
  });
