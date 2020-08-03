import { db, auth } from '../../../src/firebase';

export function getTweetsFromDb() {
  db.collection("tweets")
    .get()
    .then((snapshot) => {
      console.log(snapshot.docs);
    })
    .catch(error => console.log(error));
}
