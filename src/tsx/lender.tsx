import React from 'react';
import './../css/svg.css';

import { template__Data } from "./../template"

import img from "./../img/Interlocking-Sim.svg"

var white: string = "#ffffee"
var black: string = "#767676"
var back: string = "#43625B"
var red: string = "#C9242F"
var yellow: string = "#E3B144"
var orange: string = "#C16543"

// var orange: string = "#003F6C"
var water: string = "#00859E"
var mikan: string = "#CA6A1F"
var green: string = "#2E8B57"
var uguisu: string = "#7BAB4F"
var bluegreen: string = "#009786"

var blue: string = "#003F6C"

var Destination_Switch: any[] = [
]

type Lender_props = {
  time: number;
  operating_levers: number[];
  set_operating_levers: any;
  route: number[];
  use: number[];
  train: number[];
  destination: any;
  Data: any;
}

function Lender(props: Lender_props) {
  var Data: template__Data[] = props.Data

  const course = ((index: number) => {
    let indexOf: number = props.operating_levers.indexOf(index)
    if (indexOf === -1) {
      props.set_operating_levers((prevState: number[]) => ([...prevState, index]));
    } else {
      props.set_operating_levers((prevState: number[]) => prevState.filter((value: number) => value !== index))
    }
  })

  const changer = ((value: number | null) => {
    if (typeof value === 'number') {
      let time: string =
      "10:" +
      ("00" + Math.floor(value % 3600 / 60)).slice(-2) + ":" +
      ("00" + Math.floor(value % 60)).slice(-2)
      return time
    } else {
      return 0
    }
  })


  return (
    <>
      <header>
        <img src={img} alt="Interlocking-Sim" />
        <button>Pause</button>
      </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 225" width={1000} height={450}>
        {/* 背景 */}
        <g> 
          {/* <rect fill={white} className="cls-9" width="500" height="225"/> */}
          <path fill={white} d="M0,0 V225 H500 V0 H0 Z"/>
          <rect fill={back} x="5" y="5" width="490" height="170"/>
        </g>
        {/* 時刻 */}
        <rect className="cls-13" x="212.5" y="10" width="75" height="15" />
        <text className="time" x="250" y="22.5" fill={red} textAnchor="middle">{changer(props.time)}</text>

        <text className="cls-8" transform="translate(472.5 128.85)"><tspan x="0" y="0">田舎線</tspan><tspan x="-2.5" y="5">田舎方面</tspan></text>
        <text className="cls-4" transform="translate(24 37.04)"><tspan x="0" y="0">停止</tspan></text>
        <g>
          <text className="cls-12" transform="translate(20 88.85)"><tspan className="cls-2"><tspan x="0" y="0">上り本線</tspan></tspan><tspan className="cls-2" x="0" y="5">都</tspan><tspan className="cls-36" x="5" y="5">　</tspan><tspan className="cls-2" x="10" y="5">方面</tspan></text>
          <text className="cls-11" transform="translate(25 93.89)"><tspan x="0" y="0">会</tspan></text>
        </g>
        <g>
          <text className="cls-12" transform="translate(470 38.85)"><tspan className="cls-2"><tspan x="0" y="0">下り本線</tspan></tspan><tspan className="cls-36" x="0" y="5">　</tspan><tspan className="cls-2" x="5" y="5">外方面</tspan></text>
          <text className="cls-11" transform="translate(470 43.89)"><tspan x="0" y="0">郊</tspan></text>
        </g>
        <g>
          <text className="cls-4" transform="translate(469 17.04)"><tspan x="0" y="0">電源</tspan></text>
          <circle className="cls-18" cx="475" cy="25" r="1"/>
        </g>
        <path className="cls-9" d="M249.5,36.75v6.5h-69v-6.5h69m.5-.5h-70v7.5h70v-7.5h0Z"/>
        <path className="cls-9" d="M254.5,76.75v16.5h-69v-8.5h-5v-8h74m.5-.5h-75v9h5v8.49h70s0-17.49,0-17.49h0Z"/>
        <path className="cls-9" d="M254.5,126.75v7.75h-5v8.75h-69v-16.5h74m.5-.5h-75v17.5h70v-8.75h5v-8.75h0Z"/>
        <text className="cls-4" transform="translate(468 167.29)"><tspan x="0" y="0">上本</tspan></text>
        <text className="cls-4" transform="translate(20 167.29)"><tspan x="0" y="0">下本</tspan></text>
        <text className="cls-4" transform="translate(438 167.29)"><tspan x="0" y="0">田舎</tspan></text>
        
        
        {/* 下り都会方面 */}
        <g>
          <Rail points="14 47.5 10 45.5 10 47.5 5 47.5 5 52.5 10 52.5 10 54.5 14 52.5 75 52.5 75 47.5 14 47.5" color={orange} use={props.use} index={0} />
        </g>
        {/* 01 */}
        <g>
          <Rail points="118.54 52.5 107.5 52.5 107.5 57.5 116.46 57.5 123.23 64.27 126.77 60.73 118.54 52.5" color={uguisu} use={props.use} index={2} />
          <Rail points="75 47.5 150 47.5 150 52.5 75 52.5 75 47.5" color={uguisu} use={props.use} index={2} />
          <text className="cls-4" transform="translate(108.18 63.04)"><tspan x="0" y="0">01</tspan></text>
        </g>
        {/* 1 */}
        <g>
          <Rail points="231 47.5 150 47.5 150 52.5 231 52.5 231 54.5 235 52.5 235 47.5 231 45.5 231 47.5" color={red} use={props.use} index={4} />
          <Rail points="240 47.5 350 47.5 350 52.5 240 52.5 240 47.5" color={red} use={props.use} index={4} />
          <text className="cls-4" transform="translate(235.34 52.29)"><tspan x="0" y="0">1</tspan></text>
        </g>
        {/* 04 */}
        <g>
          <Rail points="381.46 52.5 392.5 52.5 392.5 57.5 383.54 57.5 376.77 64.27 373.23 60.73 381.46 52.5" color={uguisu} use={props.use} index={6} />
          <Rail points="350 47.5 425 47.5 425 52.5 350 52.5 350 47.5" color={uguisu} use={props.use} index={6} />
          <text className="cls-4" transform="translate(383.18 63.04)"><tspan x="0" y="0">04</tspan></text>
        </g>
        {/* 下り郊外方面 */}
        <g>
          <Rail points="490 47.5 486 45.5 486 47.5 425 47.5 425 52.5 486 52.5 486 54.5 490 52.5 495 52.5 495 47.5 490 47.5" color={orange} use={props.use} index={8} />
        </g>
        {/* 03 */}
        <g>
          <Rail points="135 67.5 133.54 67.5 126.77 60.73 123.23 64.27 131.46 72.5 135 72.5 180 72.5 180 67.5 135 67.5" color={bluegreen} use={props.use} index={10} />
          <Rail points="137.5 72.5 136.46 72.5 125.73 83.23 129.27 86.77 138.54 77.5 147.5 77.5 147.5 72.5 137.5 72.5" color={bluegreen} use={props.use} index={10} />
          <text className="cls-4" transform="translate(138.18 83.04)"><tspan x="0" y="0">03</tspan></text>
        </g>
        {/* 2 */}
        <g>
          <Rail points="244 67.5 244 65.5 240 67.5 240 72.5 244 74.5 244 72.5 305 72.5 305 67.5 244 67.5" color={red} use={props.use} index={12} />
          <Rail points="231 67.5 180 67.5 180 72.5 231 72.5 231 74.5 235 72.5 235 67.5 231 65.5 231 67.5" color={red} use={props.use} index={12} />
          <text className="cls-4" transform="translate(235.34 72.29)"><tspan x="0" y="0">2</tspan></text>
        </g>
        {/* 上り郊外方面 */}
        <g>
          <Rail points="490 97.5 490 95.5 486 97.5 425 97.5 425 102.5 486 102.5 490 104.5 490 102.5 495 102.5 495 97.5 490 97.5" color={orange} use={props.use} index={1} />
        </g>
        {/* 05 */}
        <g>
          <Rail points="285 97.5 425 97.5 425 102.5 285 102.5 285 97.5" color={green} use={props.use} index={3} />
          <Rail points="374.27 83.23 383.54 92.5 392.5 92.5 392.5 97.5 382.5 97.5 381.46 97.5 370.73 86.77 374.27 83.23" color={green} use={props.use} index={3} />
          <Rail points="325.73 83.23 329.27 86.77 306.77 109.27 303.23 105.73 325.73 83.23" color={green} use={props.use} index={3} />
          <text className="cls-4" transform="translate(383.18 91.54)"><tspan x="0" y="0">05</tspan></text>
        </g>
        {/* 3 */}
        <g>
          <Rail points="285 97.5 244 97.5 244 95.5 240 97.5 240 102.5 244 104.5 244 102.5 285 102.5 285 97.5" color={red} use={props.use} index={5} />
          <Rail points="165 97.5 235 97.5 235 102.5 165 102.5 165 97.5" color={red} use={props.use} index={5} />
          <text className="cls-4" transform="translate(235.34 102.29)"><tspan x="0" y="0">3</tspan></text>
        </g>
        {/* 02 10 */}
        <g>
          <Rail points="165 122.5 146.46 122.5 131.46 107.5 122.5 107.5 122.5 102.5 133.54 102.5 148.54 117.5 165 117.5 165 122.5" color={green} use={props.use} index={7} />
          <Rail points="75 97.5 165 97.5 165 102.5 75 102.5 75 97.5" color={green} use={props.use} index={7} />
          <Rail points="125.73 83.23 116.46 92.5 107.5 92.5 107.5 97.5 117.5 97.5 118.54 97.5 129.27 86.77 125.73 83.23" color={green} use={props.use} index={7} />
          <text className="cls-4" transform="translate(108.18 91.54)"><tspan x="0" y="0">02</tspan></text>
          <text className="cls-4" transform="translate(123.18 113.04)"><tspan x="0" y="0">10</tspan></text>
        </g>
        {/* 上り都会方面 */}
        <g>
          <Rail points="14 97.5 14 95.5 10 97.5 5 97.5 5 102.5 10 102.5 14 104.5 14 102.5 75 102.5 75 97.5 14 97.5" color={orange} use={props.use} index={9} />
        </g>
        {/* 06 07 */}
        <g>
          <Rail points="365 67.5 366.46 67.5 373.23 60.73 376.77 64.27 368.54 72.5 365 72.5 305 72.5 305 67.5 365 67.5" color={bluegreen} use={props.use} index={11} />
          <Rail points="362.5 72.5 363.54 72.5 374.27 83.23 370.73 86.77 361.46 77.5 352.5 77.5 352.5 72.5 362.5 72.5" color={bluegreen} use={props.use} index={11} />
          <Rail points="337.5 72.5 336.46 72.5 325.73 83.23 329.27 86.77 338.54 77.5 347.5 77.5 347.5 72.5 337.5 72.5" color={bluegreen} use={props.use} index={11} />
          <text className="cls-4" transform="translate(353.18 83.04)"><tspan x="0" y="0">06</tspan></text>
          <text className="cls-4" transform="translate(338.18 83.04)"><tspan x="0" y="0">07</tspan></text>
        </g>
        {/* 田舎方面 */}
        <g>
          <Rail points="370 147.5 495 147.5 495 152.5 370 152.5 370 147.5" color={orange} use={props.use} index={13} />
          <polygon points="465 154.5 461 152.5 461 147.5 465 145.5 465 154.5" fill={black}/>
          <polygon points="490 152.5 486 154.5 486 145.5 490 147.5 490 152.5" fill={black} />
          <polyline className="cls-35" points="486 147.5 486 145.5 490 147.5 492 147.5"/>
          <polyline className="cls-35" points="486 152.5 486 154.5 490 152.5 492 152.5"/>
          <polyline className="cls-35" points="465 147.5 465 145.5 461 147.5 459 147.5"/>
          <polyline className="cls-35" points="465 152.5 465 154.5 461 152.5 459 152.5"/>
        </g>
        {/* 09 */}
        <g>
          <Rail points="326.46 147.5 337.5 147.5 337.5 142.5 328.54 142.5 316.77 130.73 313.23 134.27 326.46 147.5" color={bluegreen} use={props.use} index={14} />
          <Rail points="295 147.5 370 147.5 370 152.5 295 152.5 295 147.5" color={bluegreen} use={props.use} index={14} />
          <text className="cls-4" transform="translate(328.18 141.54)"><tspan x="0" y="0">09</tspan></text>
        </g>
        {/* 5 */}
        <g>
          <Rail points="244 145.5 240 147.5 240 152.5 244 154.5 244 152.5 295 152.5 295 147.5 244 147.5 244 145.5" color={blue} use={props.use} index={15} />
          <Rail points="231 145.5 231 147.5 180 147.5 180 152.5 231 152.5 231 154.5 235 152.5 235 147.5 231 145.5" color={blue} use={props.use} index={15} />
          <text className="cls-4" transform="translate(235.34 152.29)"><tspan x="0" y="0">5</tspan></text>
        </g>
        {/* 08 */}
        <g>
          <Rail points="298.54 117.5 287.5 117.5 287.5 112.5 296.46 112.5 303.23 105.73 306.77 109.27 298.54 117.5" color={uguisu} use={props.use} index={16} />
          <Rail points="300 122.5 301.46 122.5 313.23 134.27 316.77 130.73 303.54 117.5 300 117.5 255 117.5 255 122.5 300 122.5" color={uguisu} use={props.use} index={16} />
          <text className="cls-4" transform="translate(288.18 111.54)"><tspan x="0" y="0">08</tspan></text>
        </g>
        {/* 4 */}
        <g>
          <Rail points="244 122.5 255 122.5 255 117.5 244 117.5 244 115.5 240 117.5 240 122.5 244 124.5 244 122.5" color={blue} use={props.use} index={17} />
          <Rail points="231 117.5 165 117.5 165 122.5 231 122.5 231 124.5 235 122.5 235 117.5 231 115.5 231 117.5" color={blue} use={props.use} index={17} />
          <text className="cls-4" transform="translate(235.34 122.29)"><tspan x="0" y="0">4</tspan></text>
        </g>
        
        <Lamp x={30} y={50} rotate={0} index={0} route={props.route} train={props.train} />
        <Lamp x={60} y={50} rotate={0} index={2} route={props.route} train={props.train} />
        <Lamp x={90} y={50} rotate={0} index={4} route={props.route} train={props.train} />
        <Lamp x={135} y={50} rotate={0} index={6} route={props.route} train={props.train} />
        <Lamp x={205} y={50} rotate={0} index={8} route={props.route} train={props.train} />
        <Lamp x={365} y={50} rotate={0} index={10} route={props.route} train={props.train} />
        <Lamp x={410} y={50} rotate={0} index={12} route={props.route} train={props.train} />
        <Lamp x={440} y={50} rotate={0} index={14} route={props.route} train={props.train} />
        <Lamp x={470} y={50} rotate={0} index={16} route={props.route} train={props.train} />
        <Lamp x={125} y={62.5} rotate={45} index={18} route={props.route} train={props.train} />
        <Lamp x={165} y={70} rotate={0} index={20} route={props.route} train={props.train} />
        <Lamp x={375} y={62.5} rotate={-45} index={22} route={props.route} train={props.train} />

        <Lamp x={470} y={100} rotate={0} index={1} route={props.route} train={props.train} />
        <Lamp x={440} y={100} rotate={0} index={3} route={props.route} train={props.train} />
        <Lamp x={410} y={100} rotate={0} index={5} route={props.route} train={props.train} />
        <Lamp x={365} y={100} rotate={0} index={7} route={props.route} train={props.train} />
        <Lamp x={205} y={100} rotate={0} index={9} route={props.route} train={props.train} />
        <Lamp x={150} y={100} rotate={0} index={11} route={props.route} train={props.train} />
        <Lamp x={90} y={100} rotate={0} index={13} route={props.route} train={props.train} />
        <Lamp x={60} y={100} rotate={0} index={15} route={props.route} train={props.train} />
        <Lamp x={30} y={100} rotate={0} index={17} route={props.route} train={props.train} />
        <Lamp x={372.5} y={85} rotate={45} index={19} route={props.route} train={props.train} />
        <Lamp x={320} y={70} rotate={0} index={21} route={props.route} train={props.train} />
        <Lamp x={127.5} y={85} rotate={-45} index={23} route={props.route} train={props.train} />

        <Lamp x={205} y={70} rotate={0} index={24} route={props.route} train={props.train} />

        <Lamp x={445} y={150} rotate={0} index={25} route={props.route} train={props.train} />
        <Lamp x={415} y={150} rotate={0} index={26} route={props.route} train={props.train} />
        <Lamp x={355} y={150} rotate={0} index={27} route={props.route} train={props.train} />
        <Lamp x={310} y={150} rotate={0} index={28} route={props.route} train={props.train} />
        <Lamp x={205} y={150} rotate={0} index={29} route={props.route} train={props.train} />
        <Lamp x={315} y={132.5} rotate={45} index={30} route={props.route} train={props.train} />
        <Lamp x={270} y={120} rotate={0} index={31} route={props.route} train={props.train} />
        <Lamp x={205} y={120} rotate={0} index={32} route={props.route} train={props.train} />
        <Lamp x={140} y={112.5} rotate={45} index={33} route={props.route} train={props.train} />
        <Lamp x={317.5} y={95} rotate={-45} index={34} route={props.route} train={props.train} />

        {/* 行き止まり */}
        <rect className="cls-9" x="176.5" y="146.5" width="7" height="7"/>

        {/* 装飾 */}
        <g>
          <g>
            <rect className="cls-19" x="124.5" y="187" width="106" height="31"/>
            <path className="cls-20" d="M230,187.5v30H125v-30h105m1-1H124v32h107v-32h0Z"/>
          </g>
          <g>
            <rect className="cls-9" x="127" y="189.5" width="26" height="26"/>
            <path className="cls-17" d="M152.5,190v25h-25v-25h25m1-1h-27v27h27v-27h0Z"/>
          </g>
          <g>
            <rect className="cls-19" x="234.5" y="187" width="31" height="31"/>
            <path className="cls-20" d="M265,187.5v30h-30v-30h30m1-1h-32v32h32v-32h0Z"/>
          </g>
          <g>
            <circle className="cls-21" cx="250" cy="202.5" r="13"/>
            <path className="cls-17" d="M250,190c6.9,0,12.5,5.6,12.5,12.5s-5.6,12.5-12.5,12.5-12.5-5.6-12.5-12.5,5.6-12.5,12.5-12.5m0-1c-7.44,0-13.5,6.06-13.5,13.5s6.06,13.5,13.5,13.5,13.5-6.06,13.5-13.5-6.06-13.5-13.5-13.5h0Z"/>
          </g>
          <line className="cls-24" x1="140" y1="207.5" x2="147.5" y2="194.51"/>
          <rect className="cls-21" x="127.5" y="205" width="25" height="10"/>
          <circle className="cls-17" cx="140" cy="207.5" r=".5"/>
        </g>

        {/* 列車番号 */}
        <g>
          <rect className="cls-13" x="442.5" y="76.25" width="25" height="7.5" transform="translate(910 160) rotate(180)"/>
          <rect className="cls-13" x="442.5" y="86.25" width="25" height="7.5" transform="translate(910 180) rotate(180)"/>
        </g>
        {/* 列車番号 */}
        <g>
          <rect className="cls-13" x="417.5" y="126.25" width="25" height="7.5" transform="translate(860 260) rotate(180)"/>
          <rect className="cls-13" x="417.5" y="136.25" width="25" height="7.5" transform="translate(860 280) rotate(180)"/>
        </g>
        {/* 列車番号 */}
        <g>
          <rect className="cls-13" x="32.5" y="56.25" width="25" height="7.5" transform="translate(90 120) rotate(180)"/>
          <rect className="cls-13" x="32.5" y="66.25" width="25" height="7.5" transform="translate(90 140) rotate(180)"/>
        </g>

        {/* 列車番号 */}
        <rect className="cls-13" x="192.5" y="36.25" width="25" height="7.5" transform="translate(410 80) rotate(180)"/>
        <rect className="cls-13" x="192.5" y="76.25" width="25" height="7.5" transform="translate(410 160) rotate(180)"/>
        <rect className="cls-13" x="192.5" y="86.25" width="25" height="7.5" transform="translate(410 180) rotate(180)"/>
        <rect className="cls-13" x="192.5" y="126.25" width="25" height="7.5" transform="translate(410 260) rotate(180)"/>
        <rect className="cls-13" x="192.5" y="136.25" width="25" height="7.5" transform="translate(410 280) rotate(180)"/>

        {/* 接近スイッチ */}
        <circle className="cls-30" cx="485" cy="165" r="3.5"/>
        <circle className="cls-30" cx="15" cy="165" r="3.5"/>
        <circle className="cls-30" cx="455" cy="165" r="3.5"/>

        {/* nl */}
        <g>
          <text className="cls-6" transform="translate(254.28 139.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(259.3 141.68)"><tspan x="0" y="0">R</tspan></text>
        </g>

        {/* 信号 */}
        <g>
          <path className="cls-13" d="M167.25,75h-5c-1.66,0-3,1.34-3,3s1.34,3,3,3h5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          <path className="cls-13" d="M167.25,125h-5c-1.66,0-3,1.34-3,3s1.34,3,3,3h5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          <path className="cls-13" d="M272.25,109h-5c-1.66,0-3,1.34-3,3s1.34,3,3,3h5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          <path className="cls-13" d="M272.25,59h-5c-1.66,0-3,1.34-3,3s1.34,3,3,3h5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          <path className="cls-13" d="M272.25,39h-5c-1.66,0-3,1.34-3,3s1.34,3,3,3h5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          <path className="cls-13" d="M272.25,139h-5c-1.66,0-3,1.34-3,3s1.34,3,3,3h5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          <g>
            <path className="cls-13" d="M93.75,39h-7.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h7.5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
            <path className="cls-13" d="M98.75,32h-7.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h7.5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          </g>
          <g>
            <path className="cls-13" d="M413.75,112h-7.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h7.5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
            <path className="cls-13" d="M413.75,105h-7.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h7.5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
            <path className="cls-13" d="M408.75,119h-7.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h7.5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          </g>
          <g>
            <path className="cls-13" d="M358.75,154h-7.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h7.5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
            <path className="cls-13" d="M353.75,161h-7.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h7.5c1.66,0,3-1.34,3-3s-1.34-3-3-3Z"/>
          </g>
        </g>

        <Time x={15} y={192.5} switch={"l"} Data={Data} index={1} />
        <Time x={300} y={192.5} switch={"r"} Data={Data} index={2} />
        <Time x={405} y={192.5} switch={"r"} Data={Data} index={0} />

        {/* <rect className="cls-13" x="120" y="83.5" width="15" height="3" transform="translate(-22.76 115.05) rotate(-45)"/> */}
        {/* <rect className="cls-13" x="367.5" y="61" width="15" height="3" transform="translate(65.64 283.47) rotate(-45)"/> */}
        {/* <rect className="cls-13" x="365" y="83.5" width="15" height="3" transform="translate(169.21 -238.5) rotate(45)"/> */}
        {/* <rect className="cls-13" x="307.5" y="131" width="15" height="3" transform="translate(185.95 -183.93) rotate(45)"/> */}
        {/* <rect className="cls-13" x="117.5" y="61" width="15" height="3" transform="translate(80.81 -70.08) rotate(45)"/> */}
        
        {/* ncr */}
        <g>
          <text className="cls-6" transform="translate(69.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(74.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(79.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="80" cy="13" r="1"/>
          <circle className="cls-13" cx="70" cy="13" r="1"/>
          <text className="cls-6" transform="translate(84.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(89.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(94.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="95" cy="13" r="1"/>
          <circle className="cls-13" cx="85" cy="13" r="1"/>
          <text className="cls-6" transform="translate(99.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(104.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(109.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="110" cy="13" r="1"/>
          <circle className="cls-13" cx="100" cy="13" r="1"/>
        </g>
        <g>
          <text className="cls-6" transform="translate(389.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(394.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(399.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="400" cy="13" r="1"/>
          <circle className="cls-13" cx="390" cy="13" r="1"/>
          <text className="cls-6" transform="translate(404.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(409.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(414.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="415" cy="13" r="1"/>
          <circle className="cls-13" cx="405" cy="13" r="1"/>
          <text className="cls-6" transform="translate(419.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(424.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(429.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="430" cy="13" r="1"/>
          <circle className="cls-13" cx="420" cy="13" r="1"/>
        </g>
        <g>
          <text className="cls-6" transform="translate(359.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(364.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(369.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="370" cy="13" r="1"/>
          <circle className="cls-13" cx="360" cy="13" r="1"/>
          <text className="cls-6" transform="translate(329.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(334.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(339.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="340" cy="13" r="1"/>
          <circle className="cls-13" cx="330" cy="13" r="1"/>
          <text className="cls-6" transform="translate(344.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(349.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(354.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="355" cy="13" r="1"/>
          <circle className="cls-13" cx="345" cy="13" r="1"/>
        </g>
        <g>
          <text className="cls-6" transform="translate(129.28 16.68)"><tspan x="0" y="0">N</tspan></text>
          <text className="cls-6" transform="translate(134.3 14.68)"><tspan x="0" y="0">C</tspan></text>
          <text className="cls-6" transform="translate(139.3 16.68)"><tspan x="0" y="0">R</tspan></text>
          <circle className="cls-13" cx="140" cy="13" r="1"/>
          <circle className="cls-13" cx="130" cy="13" r="1"/>
        </g>

        {/* 着点スイッチ */}
        <g>
          <Switch x={225} y={50} func={props.destination} color={white} stroke={black} index={0} />
          <Switch x={225} y={100} func={props.destination} color={white} stroke={black} index={1} />
          <Switch x={425} y={50} func={props.destination} color={white} stroke={black} index={2} />
          <Switch x={75} y={100} func={props.destination} color={white} stroke={black} index={3} />
          <Switch x={225} y={70} func={props.destination} color={white} stroke={black} index={4} />
          <Switch x={225} y={150} func={props.destination} color={white} stroke={black} index={5} />
          <Switch x={400} y={150} func={props.destination} color={white} stroke={black} index={6} />
          <Switch x={225} y={120} func={props.destination} color={white} stroke={black} index={7} />
        </g>
        
        {/* 非常てこ */}
        <g>
          <path
            fill={red}
            stroke={white}
            strokeWidth="0.25px"
            d="M33.28,20.9c-.89-.71-1.41-1.79-1.41-2.93v-5.72c0-.41-.34-.75-.75-.75h-2.25c-.41,0-.75,.34-.75,.75v5.72c0,1.14-.52,2.22-1.41,2.93h0c-1.49,1.2-2.32,3.19-1.83,5.34,.43,1.9,1.97,3.44,3.87,3.87,3.44,.79,6.49-1.81,6.49-5.11,0-1.66-.77-3.14-1.97-4.1h0Z"
          />
          <circle className="cls-9" cx="30" cy="25" r="3.75"/>
        </g>

        {/* てこ */}
        <g>
          <Lever x={475} y={150} func={course} operating={props.operating_levers} color={yellow} lr="" index={21} />

          {/* <Lever x={75} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={11} />
          <Lever x={90} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={12} />
          <Lever x={105} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={13} />
          <Lever x={395} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={14} />
          <Lever x={410} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={15} />
          <Lever x={425} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={16} />
          <Lever x={335} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={17} />
          <Lever x={350} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={18} />
          <Lever x={365} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={19} />
          <Lever x={135} y={25} course={course} operating_levers={props.operating_levers} color={black} lr="" index={20} /> */}

          <Lever x={75} y={50} func={course} operating={props.operating_levers} color={red} lr="n_r" index={0} />
          <Lever x={425} y={100} func={course} operating={props.operating_levers} color={red} lr="n_l" index={1} />
          <Lever x={255} y={50} func={course} operating={props.operating_levers} color={red} lr="n_r" index={2} />
          <Lever x={180} y={100} func={course} operating={props.operating_levers} color={red} lr="n_l" index={3} />
          <Lever x={255} y={70} func={course} operating={props.operating_levers} color={red} lr="n_r" index={4} />
          <Lever x={180} y={70} func={course} operating={props.operating_levers} color={red} lr="n_l" index={5} />
          <Lever x={255} y={150} func={course} operating={props.operating_levers} color={red} lr="n_r" index={6} />
          <Lever x={370} y={150} func={course} operating={props.operating_levers} color={red} lr="n_l" index={7} />
          <Lever x={255} y={120} func={course} operating={props.operating_levers} color={red} lr="n_r" index={8} />
          <Lever x={180} y={120} func={course} operating={props.operating_levers} color={red} lr="n_l" index={9} />


          <Lever x={60} y={165} func={course} operating={[]} color={white} lr="n_r" index={0} />
          <Lever x={75} y={165} func={course} operating={[]} color={white} lr="n_r" index={1} />
          <Lever x={90} y={165} func={course} operating={[]} color={white} lr="n_r" index={2} />
          <Lever x={105} y={165} func={course} operating={[]} color={white} lr="n_r" index={3} />
          <Lever x={120} y={165} func={course} operating={[]} color={white} lr="n_r" index={4} />
        </g>
      </svg>
    </>
  );
}

type Lever_props = {
  x: number,
  y: number,
  color: string,
  lr: string,
  index: number,
  func: any,
  operating: number[]
};

function Lever(props: Lever_props) {
  const lever_operate = ((value: any) => {
    let target: any = value.target.parentNode
    let indexOf: number = props.operating.indexOf(props.index)
    target.style.transformOrigin = (props.x / 500 * 100) + "% " + (props.y / 225 * 100) + "%"
    if (indexOf === -1) {
      target.style.transform = `rotate(30deg)`
      props.func(props.index)
    } else {
      target.style.transform = `rotate(0deg)`
      props.func(props.index)
    }
  })

  let stroke: string = white
  if (props.color === white) {stroke = black}
  let text_color: string = black
  if (stroke === black) {text_color = white}

  return (
    <g className="Lever">
      <g onClick={lever_operate}>
        <path
          d={"M" + (props.x + 2.19) + "," + (props.y - 2.73) + "c-.59-.47-.94-1.19-.94-1.95v-3.82c0-.28-.22-.5-.5-.5h-1.5c-.28,0-.5,.22-.5,.5v3.82c0,.76-.34,1.48-.94,1.95h0c-1,.8-1.55,2.13-1.22,3.56,.29,1.26,1.32,2.29,2.58,2.58,2.29,.52,4.33-1.2,4.33-3.41,0-1.11-.51-2.09-1.31-2.73h0Z"}
          fill={props.color}
          stroke={stroke}
          strokeWidth="0.25px"
        />
        <circle
          cx={props.x}
          cy={props.y}
          r="2.5"
          fill={stroke}
        />
        <text
          x={props.x}
          y={props.y}
          textAnchor="middle"
          dominantBaseline="central"
          className="font"
          fill={text_color}
          fontSize="4px"
        >
          {props.index >= 9 && props.index < 19
          ?
            <>
              <tspan letterSpacing="-0.75">1</tspan>
              <tspan letterSpacing="0.5">0</tspan>
            </>
          :
            <>{props.index}</>
          }
        </text>
        <rect
          x={props.x - 3.5}
          y={props.y - 9}
          width="7"
          height="12.5"
          opacity="0"
        />
      </g>
      <text
        x={props.x} 
        y={props.y - 11}
        textAnchor="middle"
        dominantBaseline="central"
        fill={white}
        className="font"
        fontSize="2px"
      >N</text>
      <text
        x={props.x + 6} 
        y={props.y - 10}
        textAnchor="middle"
        dominantBaseline="central"
        fill={white}
        className="font"
        fontSize="2px"
      >R</text>
    </g>
  )
}

type Switch_props = {
  x: number,
  y: number,
  color: string,
  stroke: string,
  func: any,
  index: number,
};

function Switch(props: Switch_props) {
  const func = () => {
    props.func(props.index)
  }

  return (
    <g>
      <circle
        cx={props.x}
        cy={props.y}
        r="3.5"
        fill={props.color}
        stroke={props.stroke}
        strokeWidth="0.5px"
        className="active"
        onClick={func}
      />
      <text
        x={props.x} 
        y={props.y + 5}
        textAnchor="middle"
        dominantBaseline="central"
        fill={white}
        className="font"
        fontSize="2px"
      >
        {props.index}
      </text>
    </g>

  )
}

type Lamp_props = {
  x: number,
  y: number,
  rotate: number,
  index: number,
  route: number[]
  train: number[]
};

function Lamp(props: Lamp_props) {
  let route_indexOf: number = props.route.indexOf(props.index)
  let train_indexOf: number = props.train.indexOf(props.index)
  let fill: string = black
  if (route_indexOf !== -1) {fill = yellow}
  if (train_indexOf !== -1) {fill = red}

  return (
    <>
      <rect
        x={props.x - 7.5}
        y={props.y - 1.5}
        width="15"
        height="3"
        fill={fill}
        stroke={white}
        strokeWidth={0.25}
        style={{
          transformOrigin: (props.x / 500 * 100) + "% " + (props.y / 225 * 100) + "%",
          transform: "rotate(" + props.rotate + "deg)",
        }}
        className="Lamp"
      />
      <text
        x={props.x}
        y={props.y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={white}
        className="font"
        fontSize="2px"
      >{props.index}</text>
    </>
  )
}

type Rail_props = {
  points: string,
  index: number,
  color: string,
  use: number[]
};

function Rail(props: Rail_props) {
  let indexOf: number = props.use.indexOf(props.index)
  let fill: string = props.color
  if (indexOf !== -1) {
    fill = water
  }
  return (
    <>
      <polygon
        points={props.points}
        fill={fill}
        stroke={white}
        strokeWidth={0.5}
      />
    </>
  )
}

type Time_props = {
  x: number,
  y: number,
  switch: string,
  index: number,
  Data: template__Data[]
};

function Time(props: Time_props) {
  var Data: template__Data[] = props.Data
  const [content_index, set_content_index] = React.useState<number>(0);
  const content = Data[props.index].content

  const content_index_change = ((value: any) => {
    const id: number = Number(value.currentTarget.getAttribute("id"))
    if (content_index + id >= 0 && content_index + id < Data[props.index].content.length) {
      set_content_index(content_index + id)
    }
  })

  let minus: number = 0
  if (props.switch === "r") {
    minus = 100
  }

  return (
    <g style={{
      // clipPath: `url(#clip${props.index})`,
    }}>
      
      
      

      <g style={{clipPath: `url(#clip${props.index})`}} className="ContentLenderG">
        <clipPath id={"clip" + props.index}>
          <path d={`M ${props.x} ${props.y} H ${props.x + 80} V ${props.y + 27.5} H ${props.x} Z`}  />
        </clipPath>
        <ContentLender x={props.x} y={props.y - 5} content={content[content_index - 2]} index={content_index - 2} />
        <ContentLender x={props.x} y={props.y + 2.5} content={content[content_index - 1]} index={content_index - 1} />
        <ContentLender x={props.x} y={props.y + 10} content={content[content_index]} index={content_index}  />
        <ContentLender x={props.x} y={props.y + 17.5} content={content[content_index + 1]} index={content_index + 1}  />
        <ContentLender x={props.x} y={props.y + 25} content={content[content_index + 2]} index={content_index + 2} />
      </g>

      <rect x={props.x} y={props.y} width="80" height="27.5" fill-opacity={0} stroke={black} strokeWidth="0.5px" />

      <path d={`M ${props.x} ${props.y + 2.5} H ${props.x + 80}`} stroke={black} strokeWidth="0.5px" />
      <path d={`M ${props.x} ${props.y + 10} H ${props.x + 80}`} stroke={black} strokeWidth="0.5px" />
      <path d={`M ${props.x} ${props.y + 17.5} H ${props.x + 80}`} stroke={black} strokeWidth="0.5px" />
      <path d={`M ${props.x} ${props.y + 25} H ${props.x + 80}`} stroke={black} strokeWidth="0.5px" />

      <path d={`M ${props.x + 15} ${props.y} V ${props.y + 27.5}`} stroke={black} strokeWidth="0.5px" />
      <path d={`M ${props.x + 50} ${props.y} V ${props.y + 27.5}`} stroke={black} strokeWidth="0.5px" />
      <path d={`M ${props.x + 60} ${props.y} V ${props.y + 27.5}`} stroke={black} strokeWidth="0.5px" />

      <rect className="active" x={props.x + (85 - minus)} y={props.y + 2.5} width="7.5" height="7.5" fill={red} stroke={black} strokeWidth="0.5px" onClick={content_index_change} id="-1" />
      <rect className="active" x={props.x + (85 - minus)} y={props.y + 17.5} width="7.5" height="7.5" fill={blue} stroke={black} strokeWidth="0.5px" onClick={content_index_change} id="1" />

      <text className="text" x={props.x + 40} y={props.y - 2.5} textAnchor="middle" fill={black}>{Data[props.index].name}</text>
    </g>
  )
}

type ContentLender_props = {
  x: number,
  y: number,
  content: any,
  index: number
}

function ContentLender(props: ContentLender_props) {
  const changer = ((value: number | null) => {
    if (typeof value === 'number') {
      let time: string =
      "10:" +
      ("00" + Math.floor(value % 3600 / 60)).slice(-2) + ":" +
      ("00" + Math.floor(value % 60)).slice(-2)
      return time
    } else {
      return 0
    }
  })
  const content = props.content
  if (props.content) {
    return(
      <>
        <rect x={props.x} y={props.y} width="15" height="7.5" fill={(content.stopType === 0 ? green : (content.stopType === 1 ? red : (content.stopType === 2 ? blue : white)))} />
        <text
          className="text"
          x={props.x + 7.5}
          y={props.y + 6}
          fill={white}
          textAnchor="middle"
        >
          {content.stopType === 0 && "通過"}
          {content.stopType === 1 && "到着"}
          {content.stopType === 2 && "発車"}
        </text>
        <text className="text" x={props.x + 32.5} y={props.y + 6} fill={black} textAnchor="middle">{changer(content.time)}</text>
        <text className="text" x={props.x + 55} y={props.y + 6} fill={black} textAnchor="middle">{content.track + 1}</text>
        <text className="text" x={props.x + 70} y={props.y + 6} fill={black} textAnchor="middle">{content.number}</text>
      </>
    );
  } else {
    return (<></>)
  }
}


export default Lender;
