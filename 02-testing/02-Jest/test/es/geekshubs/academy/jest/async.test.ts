const fetchTodo = require('./fetchData');

describe('async tests', () => {


  test('test using done', (done) => {
    fetchTodo(1)
      .then((data) => {
        expect(data.id).toBe(1);
        done();
      })
      .catch((error) => done(error));
  });

  test('test using promise', () => {
    return fetchTodo(1).then((data) => {
      expect(data.id).toBe(1);
    });
  });
  test('test using async function', async () => {
    const data = await fetchTodo(1);
    expect(data.id).toBe(1);
  });
});
