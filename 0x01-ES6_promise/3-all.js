import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const [photoResult, userResult] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
export default handleProfileSignup;
