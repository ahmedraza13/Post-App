


window.createPost = function () {
    getAllPost();
    let postTitle = document.querySelector("#postTitle").value;
    let postText = document.querySelector("#postText").value;

    // baseUrl/api/v1/post
    axios
      .post(`post`, {
        title: postTitle,
        text: postText,
      })
      .then(function (response) {
        console.log(response.data)
        getAllPost();
      })
      .catch(function (error) {
        // handle error
        console.log(error.data);
      });
  };

  window.getAllPost = function () {
    // baseUrl/api/v1/post
    axios
      .get(`posts`)
      .then(function (response) {
        let posts = response.data;
       
        
      
       // Assuming you have an array called `posts` with post objects

for (let i = 0; i < posts.length; i++) {
let card = document.createElement('div'); // Create a new div for each post
card.classList.add('post-card'); // Optional: Add a CSS class for styling, if needed

let id = document.createElement('h3');
let title = document.createElement('h2');
let text = document.createElement('p');

id.innerHTML = 'Id: ' + posts[i].id;
title.innerHTML = 'Title: ' + posts[i].title;
text.innerHTML =  'Text: ' + posts[i].text;

card.appendChild(id);
card.appendChild(title);
card.appendChild(text);

document.querySelector('#container').appendChild(card); // Assuming you have a container element to hold all the post cards
}

       
        // title.innerHTML = response.data[0].title;
        // text.innerHTML = response.data[0].text;
      })
      .catch(function (error) {
        // handle error
        console.log(error.data);
      });
  };