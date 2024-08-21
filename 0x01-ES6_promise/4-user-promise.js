export default function signUpUser(firstName, lastName) {
  const dm = {
    firstName,
    lastName,
  };
  const rp = Promise.resolve(dm);
  return rp;
}
