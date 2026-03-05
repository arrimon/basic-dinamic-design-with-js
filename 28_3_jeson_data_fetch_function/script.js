// console.log('JESON SCRIPTS connected')
// fetch('https://jsonplaceholder.typicode.com/todos/5')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err)
//     })




const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/100')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(err); 
        })
    }


// Load post
const loadPost = () =>{
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(baseUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            displayPost(json);
        })
} 

const displayPost = (post) => {
    post.forEach((post) => {
        console.log(post)
    });
}