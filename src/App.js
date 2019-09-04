import React,{useState} from 'react';
import RoomType from "./components/RoomType";
//because i plan to have this hosted on github page, so i won't use axios
import TestData from "./test-data/test";


function App() {


  function groupBy(list, props) {
    return list.reduce((a, b) => {
       (a[b[props]] = a[b[props]] || []).push(b);
       return a;
    }, {});
  }

  const roomInfo=groupBy(TestData, 'roomTypeLabel');
  const roomTypes= Object.keys(roomInfo);
  console.log(roomInfo);

  const [bookedHotel, bookAHotel]=useState([]);
  
  
  

  return (
    <div>
      <div className="container">
      {roomTypes.map(rt=> <RoomType roomType={rt} roomsInfo={roomInfo[rt]} />)}
      </div>
    </div>
  );
}

export default App;
