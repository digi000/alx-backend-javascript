export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      const attr = {
        status: 200,
        body: 'success',
      };
      return attr;
    })
    .catch(() => {
      const error = new Error();
      return error;
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
