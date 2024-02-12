function solution(park, routes) {
  let pointer = {
    y: 0,
    x: 0,
  };

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i].at(j) === "S") {
        pointer.x = j;
        pointer.y = i;
      }
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const di = routes[i].at(0);
    const move = Number(routes[i].at(-1));
    let temp = { ...pointer };

    for (let j = 0; j < move; j++) {
      if (di === "E") {
        pointer.x += 1;
      }

      if (di === "S") {
        pointer.y += 1;
      }

      if (di === "W") {
        pointer.x -= 1;
      }

      if (di === "N") {
        pointer.y -= 1;
      }

      const afterMove = park[pointer.y][pointer.x];

      if ((afterMove !== "S" && afterMove !== "O") || afterMove === "X") {
        pointer = temp;
        break;
      }
    }
  }

  return Object.values(pointer);
}

const park = ["OOOOO", "OOOOO", "OOSOO", "OOOOO", "OOOOO"];
const routes = ["E 2", "W 2", "S 2", "N 3"];

console.log(solution(park, routes));
