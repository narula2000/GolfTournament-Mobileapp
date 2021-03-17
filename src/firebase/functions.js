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
          dummyId.length < 4 && // Eliminate valid userId
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
  const holesSnap = await database.ref(path).once('value');
  return holesSnap.val();
};

const checkTournament = async (_adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}`;
  const database = firebase.database();
  const tournament = await database.ref(path).once('value');
  return tournament.exists();
};

const fetchSpecificHoles = async (
  userId,
  _adminId,
  _tournamentId,
  holeNumber
) => {
  const path = `admin/${_adminId}/${_tournamentId}/${userId}/holes/${holeNumber}/`;
  const database = firebase.database();
  const holeSnap = await database.ref(path).once('value');
  return holeSnap.val();
};

const fetchUserScore = async (userId, _adminId, _tournamentId) => {
  let score;
  const holes = await fetchHoles(userId, _adminId, _tournamentId);
  holes.forEach((hole) => {
    score += hole.score;
  });
  return score;
};

const fetchAllUserIds = async (_adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const usersSnap = await database.ref(path).once('value');
  return Object.keys(usersSnap.val());
};

const fetchValidUserIds = async (_adminId, _tournamentId) => {
  const validUsers = [];
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const usersSnap = await database.ref(path).once('value');
  Object.keys(usersSnap.val()).forEach((userId) => {
    if (userId.length > 3) validUsers.push(userId);
  });
  return validUsers;
};

export default {
  renameUserId,
  fetchHoles,
  fetchSpecificHoles,
  fetchUserScore,
  fetchAllUserIds,
  fetchValidUserIds,
  checkTournament,
};
