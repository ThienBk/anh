// // fetch('https://jsonplaceholder.typicode.com/todos')
// //     .then(res => {
// //         return res.json();
// //     }).then(data => {
// //         console.log(data)
// //     })


// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => {
//         return res.json();
//         //JSON.parse: JSON -> javaScript types
//     })
//     .then(posts => {
//         console.log(posts)
//         var htmls = posts.map((post) => {
//             return `
//             <ul>
//                 <li> ${post.title} </li>
//             </ul>`
//         })
//         var htmls = htmls.join('')
//         document.getElementsByClassName('container')[0].innerHTML = htmls
//     })
//     .catch(err => {
//         alert('Error')
//     })