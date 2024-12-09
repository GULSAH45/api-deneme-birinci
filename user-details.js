const fetchUserDetails = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");

  const userDetails = document.getElementById("user-details-container");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userData = await response.json();

    const userCard = `
            <div class="card ">
                <h2>${userData.name}</h2>
                <div class="section">
                    <i class="fa fa-user"></i>
                    <span>User Name:</span> ${userData.username}
                </div>
                <div class="section">
                    <i class="fa fa-envelope"></i>
                    <span>Email:</span> ${userData.email}
                </div>
                <div class="section">
                    <i class="fa fa-phone"></i>
                    <span>Phone:</span> ${userData.phone}
                </div>
                <div class="section">
                    <i class="fa fa-location-dot"></i>
                    <span>Address:</span> ${userData.address.street}, ${userData.address.city}
                </div>
                <div class="section">
                    <i class="fa fa-building"></i>
                    <span>Company:</span> ${userData.company.name}
                </div>
                <div class="section">
                    <i class="fa fa-globe"></i>
                    <span>Website:</span> <a href="http://${userData.website}" target="_blank">${userData.website}</a>
                </div>
            </div>
        
        `;
    userDetails.innerHTML = userCard;
  } catch (error) {
    console.error("Veriler alınırken bir hata oluştu:", error);
    userDetails.innerHTML = "<p>Veriler yüklenemedi.</p>";
  }
};

// Fonksiyonu çağırmayı unutmayın
fetchUserDetails();
