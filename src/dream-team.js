module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let team = [];
    members.map(item => typeof item === 'string' ? team.push(item.trim()[0].toUpperCase()) : false)
    return team.sort().join('');
  }

  return false

};