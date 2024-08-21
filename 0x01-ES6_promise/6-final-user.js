import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const hp = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
  return hp;
}
export default handleProfileSignup;
