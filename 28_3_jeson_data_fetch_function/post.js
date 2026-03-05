// Load post
const loadPost = () =>{
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    // fetch url
    fetch(baseUrl)
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            displayPost(json);
        })
} 

// Display Post
// const displayPost = (post) => {
//     // console.log(post);

//     // way 1 to loop
//     // for( let i = 0; i < post.length; i++){
//     //     console.log(post[i]);
//     // }

//     // way 2 to loop
//     // for(let po of post){
//     //     console.log(po)
//     // }


//     // 1. get the container
//     const getContents = document.getElementById('post-contents');
//     // console.log(getContents)
    

//     // way 3 to loop we use this
//     post.forEach(post => {
//         // console.log(post)
//         const createLi = document.createElement("li");
//         createLi.innerText = post.title

//         // Add li intro container
//         getContents.appendChild(createLi)
//     });

// }

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

// DisplayPost with card
const displayPost=(post) => {
    // 1. get the container and empty container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ""; // make postContainer empty
    post.forEach(post => {
        // 2. create Element
        const postCard = document.createElement('div');
        postCard.innerHTML = `
            <div class="post-card bg-slate-300 rounded-md card-body h-40 md:h-50 overflow-hidden">
                <h2 class="card-title">${post.title}</h2>
                <p class="overflow-y-auto">${post.body}</p>
            </div>
        `

        // 3. Append or add to  the container
        postContainer.appendChild(postCard)
    });
}

loadPost();