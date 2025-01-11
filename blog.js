<!-- Blog Section -->
<section id="blog" class="blog-section">
  <div class="container">
    <h2>Latest Blog Posts</h2>
    <div id="blog-posts" class="blog-posts">
      <!-- Blog posts will be dynamically inserted here -->
    </div>
  </div>
</section>

<script>
// JavaScript to dynamically load blog posts
const blogPosts = [
  {
    title: "How to Build a Portfolio Website",
    description: "Learn how to create a stunning portfolio website using HTML, CSS, and JavaScript.",
    link: "post1.html",
  },
  {
    title: "10 Tips for Becoming a Better Developer",
    description: "Check out these 10 tips to improve your coding skills and become a better developer.",
    link: "post2.html",
  },
  {
    title: "Understanding JavaScript Asynchronous Programming",
    description: "A deep dive into JavaScript's asynchronous features and how to use them effectively.",
    link: "post3.html",
  },
];

const blogContainer = document.getElementById('blog-posts');

// Loop through the blogPosts array and create HTML for each post
blogPosts.forEach(post => {
  const blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');
  
  blogPost.innerHTML = `
    <h3><a href="${post.link}">${post.title}</a></h3>
    <p>${post.description}</p>
    <a href="${post.link}" class="read-more">Read More</a>
  `;
  
  blogContainer.appendChild(blogPost);
});
</script>
