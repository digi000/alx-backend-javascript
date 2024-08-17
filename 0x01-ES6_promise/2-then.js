export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const attr = {
        status: 200,
        body: 'success',
      };
      return attr;
    })
    .then(() => {
      const error = new Error();
      return error;
    })
    .then(() => {
      console.log('Got a response from the API');
    });
}
