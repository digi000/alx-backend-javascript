import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([result, ur]) => {
      console.log(`${result.body} ${ur.firstName} ${ur.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
