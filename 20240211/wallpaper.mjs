function solution(wallpaper) {
  const pos = {
    luy: null,
    lux: null,
    rdy: 0,
    rdx: 0,
  };

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] !== "#") continue;
      pos.lux = pos.lux === null || j < pos.lux ? j : pos.lux;
      pos.luy = pos.luy === null || i < pos.luy ? i : pos.luy;
      pos.rdx = j + 1 > pos.rdx ? j + 1 : pos.rdx;
      pos.rdy = i + 1 > pos.rdy ? i + 1 : pos.rdy;
    }
  }

  return pos;
}

const wallpaper = [".#...", "..#..", "...#."];

console.log(solution(wallpaper));
