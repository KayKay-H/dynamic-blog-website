document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");

    // Fetch posts from Local Storage
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Display posts
    if (posts.length === 0) {
        postsContainer.innerHTML = "<p>No blog posts available.</p>";
    } else {
        postsContainer.innerHTML = posts.map(post => `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.content.substring(0, 100)}...</p>
                <a href="post.html?id=${post.id}">Read More</a>
            </div>
        `).join("");
    }
});
