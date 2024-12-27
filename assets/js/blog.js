//LS pull data(getItem), note datatype: array(object array)
//Process the array data with a for loop
//dynamically(buildElement) code to html
//Display each Post (grouping/object)
//when blog.html opens anything in current storage should be displayed


// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backButton = document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM
// const blog = document.createElement(blogPosts);
// document.body.appendChild(blog)

const buildElement = function (type, text, parent) {
    const tag = document.createElement(type);
    console.log(tag);

    tag.textContent = text;
    console.log(text);

    parent.appendChild(tag);
    console.log(tag);

    return tag;
}

// TODO: Create a function that handles the case where there are no blog posts to display
// function displayBlogPosts(posts) {

function noPosts() {
    console.log("No posts available.");
}
const blogPosts = [
    { title: "Post 1", content: "This is the first post." },
    { title: "Post 2", content: "This is the secondpost." }
];
// }
// let 

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBloglist() {

    const blogs = localStorage.getItem('blogList')
    const blogLists = JSON.parse(blogs)
    //return blogLists || [];
    console.log(blogLists)

    if (!blogLists.length) {
        noPosts();
        return
    }

    for (const post of blogLists) {
        const blogArticle = buildElement('article', null, mainEl);

        buildElement('h2', post.title, blogArticle);
        buildElement('blockquote', post.content, blogArticle);
        buildElement('p', `Post by: ${post.username}`, blogArticle);

        blogArticle.classList.add('card')
    }

};
// if (blogPosts && blogPosts.length>0) {
//     blogPosts.posts.forEach(post => {
//         console.log('Title:${post.title}');
//         console.log('Content:${post.content}');
//     })

// } else{
//     noPosts();


// TODO: Call the `renderBlogList` function
//console.log("Calling renderBlogList with posts:");
//console.log("\nCalling renderBlogList with no posts:");

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
//let backButton = document.querySelector("backButton");

renderBloglist();

backButton.addEventListener("click", function() {
    redirectPage("index.html");
});