import firebase from 'firebase/app';
import 'firebase/database';

const checkTournament = async (_adminId, _tournamentId) => {
  const path = `tournament/`;
  const database = firebase.database();
  const tournamentListRef = await database.ref(path).once('value');
  if (tournamentListRef.exists()) {
    const tournamentList = tournamentListRef.val();
    let flag = false;
    Object.keys(tournamentList).forEach((key) => {
      if (tournamentList[key].id === _tournamentId) flag = true;
    });
    return flag;
  }
  return false;
};

const renameUserId = async (userId, _phonenumber, _adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/`;
  const database = firebase.database();
  const usersRef = await database.ref(path).once('value');
  const users = usersRef.val();
  Object.keys(users).forEach((dummyId) => {
    if (
      dummyId.length < 4 && // Eliminate valid userId
      users[dummyId].phonenumber !== undefined &&
      users[dummyId].phonenumber === _phonenumber
    ) {
      users[userId] = users[dummyId];
      delete users[dummyId];
    }
  });
  console.log(users);
  await database.ref(path).set(users);
};

const fetchHoles = async (userId, _adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/${userId}/holes/`;
  const database = firebase.database();
  const holesSnap = await database.ref(path).once('value');
  return holesSnap.val();
};

const fetchUserName = async (userId, _adminId, _tournamentId) => {
  const path = `admin/${_adminId}/${_tournamentId}/${userId}/`;
  const database = firebase.database();
  const holesSnap = await database.ref(path).once('value');
  const user = holesSnap.val();
  return user.name;
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

const fetchValidUserScore = async (userId, _adminId, _tournamentId) => {
  let userScore = 0;
  const holes = await fetchHoles(userId, _adminId, _tournamentId);
  Object.keys(holes).forEach((hole) => {
    if (holes[hole].updateDate !== holes[hole].createDate) {
      userScore += holes[hole].score;
    }
  });
  return userScore;
};

const fetchValidUserStroke = async (userId, _adminId, _tournamentId) => {
  let userStroke = 0;
  const holes = await fetchHoles(userId, _adminId, _tournamentId);
  Object.keys(holes).forEach((hole) => {
    if (holes[hole].updateDate !== holes[hole].createDate)
      userStroke += holes[hole].stroke;
  });
  return userStroke;
};

const fetchAllUserIds = async (_adminId, _tournamentId) => {
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
    if (userId.length > 3 && userId !== 'name' && userId !== 'isComplete')
      validUsers.push(userId);
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
  fetchUserName,
  fetchSpecificHole,
  fetchValidUserScore,
  fetchValidUserStroke,
  fetchAllUserIds,
  fetchValidUserId,
  checkTournament,
  fetchTournament,
  fetchValidUserInfo,
  updateHoleInfo,
};
