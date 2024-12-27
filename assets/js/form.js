//click the button -- it takes the separate entries(form)
//group entries(object - key pair values) then add it to a list(array)
//array send it to LS
///get it from LS
//process the list(array) - for loop always to proc



// TODO: Create a variable that selects the form element
const formElement = document.getElementById("blogform")


formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    formSub()
});


// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSub() {
    //gathering the separate entries values
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    // window.location.href= 'blogPosts';


    // TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
    if (!username || !title || !content) {
        const errorMessage = document.getElementById("error");
        // errorMessage.style.display= "block";
        errorMessage.textContent = "Please complete form.";
        return;
    }
    // else {
    //     document.getElementById("error").style.display= "none";
    const blogPost = ({
        username: username,
        title: title,
        content: content,
    });
    console.log(blogPost);
    
    let blogList= [] 
    blogList.push(blogPost)
    
    let storePost= JSON.parse(localStorage.getItem("blogList"))
    console.log(storePost)
      
    if (localStorage.getItem("blogList")) {
        storePost.push(blogPost)
        localStorage.setItem("blogList", JSON.stringify(storePost));
       // populateStorage();
    } else {
       // setStyles();
       localStorage.setItem("blogList", JSON.stringify(blogList));
    // const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []

    }
    //localStorage.setItem("blogList", JSON.stringify(storePost));
    window.location.href = "blog.html";
    }

