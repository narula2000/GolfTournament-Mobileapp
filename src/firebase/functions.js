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

const fetchHoles = async (userId, _adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/${userId}/holes/`;
  const database = firebase.database();
  const snap = await database.ref(path).once('value');
  const holes = snap.val();
  return holes;
};

const fetchSpecificHoles = async (
  userId,
  _adminId,
  _tournamentId,
  holeNumber
) => {
  const path = `admin/${_adminId}/${_tournamentId}/${userId}/holes/${holeNumber}/`;
  const database = firebase.database();
  const snap = await database.ref(path).once('value');
  const hole = snap.val();
  return hole;
};

const fetchUserScore = async (userId, _adminId, _tournamentId) => {
  let score;
  const holes = fetchHoles(userId, _adminId, _tournamentId);
  holes.forEach((hole) => {
    score += hole.score;
  });
  return score;
};

export default {
  renameUserId,
  fetchHoles,
  fetchSpecificHoles,
  fetchUserScore,
};
