
export function fetchTodo(id) {
    return fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      .then((response) => response.json())
}
