function solution(players, callings) {
  const rank = {};

  for (let i = 0; i < players.length; i++) {
    rank[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    let player_rank = rank[callings[i]];

    if (player_rank === 0) {
      continue;
    }

    let temp = players[player_rank];

    players[player_rank] = players[player_rank - 1];
    players[player_rank - 1] = temp;

    rank[players[player_rank]] = player_rank;
    rank[players[player_rank - 1]] = player_rank - 1;
  }

  return players;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["poe", "mine", "kai", "kai", "kai", "mine", "mumu"];

console.log(solution(players, callings));
