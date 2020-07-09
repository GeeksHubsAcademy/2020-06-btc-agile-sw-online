import { fetch } from "node-fetch";
import { fetchTodo } from "../../../../../src/es/geekshubs/academy/jest/fetchData";


jest.mock('node-fetch');

fetch.mockImplementation(async () => ({json:()=> ({id:1 }) }));

test('without mock', async ()=> {
    const  todo = await fetchTodo(1);
    expect(todo.id).toBe(1);
})