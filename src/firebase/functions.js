import firebase from 'firebase/app';
import 'firebase/database';

const checkTournament = async (_adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}`;
  const database = firebase.database();
  const tournament = await database.ref(path).once('value');
  return tournament.exists();
};

const renameUserId = async (userId, _phonenumber, _adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const users = await database.ref(path).once('value');
  Object.keys(users).forEach((dummyId) => {
    if (
      dummyId.length < 4 && // Eliminate valid userId
      users[dummyId].phonenumber !== undefined &&
      users[dummyId].phonenumber === _phonenumber
    ) {
      users[userId] = users[dummyId];
      delete users[dummyId]; // Delete old key
    }
  });
};

const fetchHoles = async (userId, _adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/${userId}/holes/`;
  const database = firebase.database();
  const holesSnap = await database.ref(path).once('value');
  return holesSnap.val();
};

const fetchSpecificHole = async (
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
  let userScore = 0;
  const holes = await fetchHoles(userId, _adminId, _tournamentId);
  Object.keys(holes).forEach((hole) => {
    userScore += holes[hole].score;
  });
  return userScore;
};

const fetchAllUserId = async (_adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const usersSnap = await database.ref(path).once('value');
  return Object.keys(usersSnap.val());
};

const fetchValidUserId = async (_adminId, _tournamentId) => {
  const validUsers = [];
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const usersSnap = await database.ref(path).once('value');
  Object.keys(usersSnap.val()).forEach((userId) => {
    if (userId.length > 3) validUsers.push(userId);
  });
  return validUsers;
};

const fetchTournament = async (_adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const holesSnap = await database.ref(path).once('value');
  return holesSnap.val();
};

const fetchValidUserInfo = async (_adminId, _tournamentId) => {
  const validIds = await fetchValidUserId(_adminId, _tournamentId);
  const tournamentInfo = await fetchTournament(_adminId, _tournamentId);
  const validUsers = {};

  Object.keys(tournamentInfo).forEach((userId) => {
    if (validIds.includes(userId)) validUsers[userId] = tournamentInfo[userId];
  });

  return validUsers;
};

const updateHoleInfo = async (
  userId,
  _adminId,
  _tournamentId,
  holeNumber,
  holeData
) => {
  const path = `admin/${_adminId}/${_tournamentId}/${userId}/holes/${holeNumber}/`;
  const database = firebase.database();
  await database.ref(path).set(holeData);
};

export default {
  renameUserId,
  fetchHoles,
  fetchSpecificHole,
  fetchUserScore,
  fetchAllUserId,
  fetchValidUserId,
  checkTournament,
  fetchTournament,
  fetchValidUserInfo,
  updateHoleInfo,
};
