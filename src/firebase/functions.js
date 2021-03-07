import firebase from 'firebase/app';
import 'firebase/database';

const renameUserId = (userId, _phonenumber, _adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  database.ref(path).on('value', (snap) => {
    const users = snap.val();
    if (users !== undefined && users != null) {
      const dummyIds = Object.keys(users);
      dummyIds.forEach((dummyId) => {
        if (
          users.dummyId.phonenumber !== undefined &&
          users.dummyId.phonenumber === _phonenumber
        ) {
          // Clone old key values to new UserID
          users[userId] = users[dummyId];
          delete users[dummyId]; // Delete old key
        }
      });
    }
  });
};

export default renameUserId;
