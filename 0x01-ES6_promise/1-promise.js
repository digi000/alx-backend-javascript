export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      const attr = {
        status: 200,
        body: 'Success',
      };
      resolve(attr);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
  return promise;
}
