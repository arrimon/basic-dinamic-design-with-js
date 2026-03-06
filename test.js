// Normal way. print first Hello , Test then Json Data
// const funcData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


//     console.log('Hello');
//     console.log('Test');
// }

// funcData();



// Async way. print first Hello, hen Json Data, then Test (print Controll in our hand)
// const funcAsyData = async () => {
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');


//     console.log('Hello');
//     const json = await res.json();
//     console.log(json)
//     console.log('Test');
// }

const funcAsyData = async () => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    const urls = 'https://jsonplaceholder.typicode.com/todos/1';
    const res = await fetch(urls);

    const data = await res.json();

    console.log(data)

    console.log('Hello');
    console.log('Test');
}

funcAsyData()