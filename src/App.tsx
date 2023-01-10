import React from 'react';
import logo from './logo.svg';
import background from './img/background.svg';
import './css/svg.css';

import Lender from "./tsx/lender";

function App() {
  const [operating_levers, set_operating_levers] = React.useState<number[]>([])
  const [route, set_route] = React.useState<number[]>([])
  const [use, set_use] = React.useState<number[]>([])

  type template_can_levers = {
    name: number;
    route: number[];
    // use: number[];
  }

  const can_levers: template_can_levers[][] = [
    [
      {
        name: 0,
        route: [4, 6, 8]
      }
    ],
    [
      {
        name: 1,
        route: [5, 7, 9]
      }
    ],
    [
      {
        name: 2,
        route: [10, 12]
      },
      {
        name: 4,
        route: [21, 22, 12]
      },
      {
        name: 8,
        route: [31, 34, 22, 12]
      }
    ],
    [
      {
        name: 5,
        route: [20, 23, 13]
      },
      {
        name: 3,
        route: [11, 13]
      },
      {
        name: 9,
        route: [33, 13]
      }
    ],
    [
      {
        name: 0,
        route: [4, 18, 20, 24]
      },
      {
        name: 1,
        route: [5, 19, 21, 24]
      }
    ],
    [
      {
        name: 7,
        route: [27, 30, 31, 32]
      },
      {
        name: 1,
        route: [5, 19, 34, 31, 32]
      }
    ],
    [
      {
        name: 6,
        route: [28, 27]
      },
      {
        name: 8,
        route: [31, 30, 27]
      }
    ],
    [
      {
        name: 7,
        route: [27, 28, 29]
      }
    ],
  ]

  const destination = ((destination: number) => {
    // let can_lever: number[] = can_levers[destination]
    let indexOf: number = -1
    let i:number = -1
    while (indexOf == -1) {
      i++
      if (can_levers[destination].length <= i) {break}
      indexOf = operating_levers.indexOf(can_levers[destination][i].name)
    }
    if (indexOf != -1) {
      console.log(operating_levers[indexOf] + "てこ")
      console.log(destination + "着点")
      route.concat(can_levers[destination][indexOf].route)
      set_route(route.concat(can_levers[destination][i].route));
    }
  })

  return (
    <div className="App">
      <Lender
        operating_levers={operating_levers}
        set_operating_levers={set_operating_levers}
        route={route}
        destination={destination}
      />
    </div>
  );
}

export default App;
