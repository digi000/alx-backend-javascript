export default function uploadPhoto(filename) {
  const error = new Error(`${filename} cannot be processed`);
  const rp = Promise.reject(error);
  return rp;
}
