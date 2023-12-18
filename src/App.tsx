import React from 'react';
import logo from './logo.svg';
import background from './img/background.svg';
import './css/svg.css';

import Lender from "./tsx/lender";

import json from "./data.json"

import { template__Data } from "./template"

var Data: template__Data[] = json

function App() {
  const [operating_levers, set_operating_levers] = React.useState<number[]>([])
  const [route, set_route] = React.useState<number[]>([])
  const [use, set_use] = React.useState<number[]>([])
  const [train, set_train] = React.useState<number[]>([])
  const [course, set_course] = React.useState<number[][]>([])

  type template_can_levers = {
    name: number;
    route: number[];
    use: number[];
  }

  const can_levers: template_can_levers[][] = [
    [
      {
        name: 0,
        route: [4, 6, 8],
        use: [2]
      }
    ],
    [
      {
        name: 1,
        route: [5, 7, 9],
        use: [3]
      }
    ],
    [
      {
        name: 2,
        route: [10, 12],
        use: [6]
      },
      {
        name: 4,
        route: [21, 22, 12],
        use: [11, 6]
      },
      {
        name: 8,
        route: [31, 34, 22, 12],
        use: [16, 3, 11, 6]
      }
    ],
    [
      {
        name: 5,
        route: [20, 23, 13],
        use: [10, 7]
      },
      {
        name: 3,
        route: [11, 13],
        use: [7]
      },
      {
        name: 9,
        route: [33, 13],
        use: [7]
      }
    ],
    [
      {
        name: 0,
        route: [4, 18, 20, 24],
        use: [2, 10]
      },
      {
        name: 1,
        route: [5, 19, 21, 24],
        use: [3, 11]
      }
    ],
    [
      {
        name: 7,
        route: [27, 28, 29],
        use: [14]
      }
    ],
    [
      {
        name: 6,
        route: [28, 27],
        use: [14]
      },
      {
        name: 8,
        route: [31, 30, 27],
        use: [16, 14]
      }
    ],
    [
      {
        name: 7,
        route: [27, 30, 31, 32],
        use: [14, 16]
      },
      {
        name: 1,
        route: [5, 19, 34, 31, 32],
        use: [3, 11, 16]
      }
    ],
    
  ]

  const [time, set_time] = React.useState<number>(118)
  React.useEffect(() => {
    setTimeout(function(){
      set_time(time + 1)
    }, 500);
    console.log(time)

    for (let d: number = 0; d < Data.length; d++) {
      for (let c: number = 0; c < Data[d].content.length; c++) {
        if (Data[d].content[c].time === time) {
          set_train([...train, Data[d].in[0]])
        }
      }
    }
  }, [time])

  const destination = ((destination: number) => {
    // let can_lever: number[] = can_levers[destination]
    let indexOf: number = -1
    let i:number = -1
    while (indexOf === -1) {
      i++
      if (can_levers[destination].length <= i) {break}
      indexOf = operating_levers.indexOf(can_levers[destination][i].name)
    }
    
    if (indexOf !== -1) {
      console.log(can_levers[destination][i].name + "てこ")
      console.log(destination + "着点")

      let some: boolean = can_levers[destination][i].use.some((value: number) => use.includes(value));
      if (some !== true) {
        set_route(route.concat(can_levers[destination][i].route));
        set_use(use.concat(can_levers[destination][i].use));
        set_course([...course, [destination,]])
      }
    }
  })

  

  return (
    <div className="App">
      <Lender
        time={time}
        operating_levers={operating_levers}
        set_operating_levers={set_operating_levers}
        route={route}
        use={use}
        train={train}
        destination={destination}
        Data={Data}
      />
    </div>
  );
}

export default App;
