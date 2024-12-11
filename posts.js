const fetchAndDisplayPosts = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("postId");

  const postContainer = document.getElementById("posts");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const postData = await response.json();

    const postCard = `
            <div class="card ">
                <h2>${postData.title}</h2>
            <div class="section"> ${postData.body}
                </div>
           </div>
  
         
        `;
    postContainer.innerHTML = postCard;
  } catch (error) {
    console.error("Hata:", error);
  }
};

fetchAndDisplayPosts();
