const POSTS_API_URL = 'https://dummyjson.com/posts';
const PRODUCTS_API_URL = 'https://dummyjson.com/products';
const TODOS_API_URL = 'https://dummyjson.com/todos';

const fetchBtn = document.getElementById("fetch-data-btn");

// Define the functions that fetch the data from the APIs
function promiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(POSTS_API_URL)
        .then(response => response.json())
        .then(data => {
          const tbody = document.querySelector('#posts-table-body');
          tbody.innerHTML = '';
          for(let post = 0; post < data.posts.length; post++){
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${data.posts[post].id}</td><td>${data.posts[post].title}</td><td>${data.posts[post].body}</td>`;
            tbody.appendChild(tr);
          };
          resolve(true);
        })
        .catch(error => reject(error));
    }, 1000);
  });
}

function promiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(PRODUCTS_API_URL)
        .then(response => response.json())
        .then(data => {
          const tbody = document.querySelector('#products-table-body');
          tbody.innerHTML = '';
          for(let product = 0; product < data.products.length; product++){
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${data.products[product].id}</td><td>${data.products[product].title}</td><td>${data.products[product].price}</td><td><img src="${data.products[product].images[0]}"></td>`;
            tbody.appendChild(tr);
          };
          resolve(true);
        })
        .catch(error => reject(error));
    }, 2000);
  });
}

function promiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(TODOS_API_URL)
        .then(response => response.json())
        .then(data => {
          const tbody = document.querySelector('#todos-table-body');
          tbody.innerHTML = '';
          for(let todo = 0; todo < data.todos.length; todo++){
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${data.todos[todo].id}</td><td>${data.todos[todo].todo}</td><td>${data.todos[todo].completed}</td>`;
            tbody.appendChild(tr);
          };
          resolve(true);      
        })
        .catch(error => reject(error));
    }, 3000);
  });
}


const getData = () => {
  promiseAPI1()
    .then((res) => {
      if (res) {
        return promiseAPI2();
      }
    })
    .then((res) => {
      if (res) {
        return promiseAPI3();
      }
    })
    .catch((error) => console.log(error));
};

fetchBtn.addEventListener('click', getData);