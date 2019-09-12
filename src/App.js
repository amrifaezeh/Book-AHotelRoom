import React, { useState } from 'react';
import RoomType from "./components/RoomType";
//because i plan to have this hosted on github page, so i won't use axios
import TestData from "./test-data/test";
import Navbar from './components/Navbar';

function App() {


  function groupBy(list, props) {
    return list.reduce((a, b) => {
      (a[b[props]] = a[b[props]] || []).push(b);
      return a;
    }, {});
  }
  const roomInfo = groupBy(TestData, 'roomTypeLabel');
  const roomTypes = Object.keys(roomInfo);
  const [bookedHotel, bookAHotel] = useState([]);

  const removeBooking = (id) => bookAHotel(oldBooking => oldBooking.filter(x => x.id !== id));
  const handleBooking = (rt, id, add) => {

    if (!add) {
      removeBooking(id);
      return;
    }

    const newBooking = roomInfo[rt].filter(x => x.id === id);
    bookAHotel(oldBooking => [...oldBooking, ...newBooking]);

  };


  return (
    <div>
      <Navbar items={bookedHotel} />
      <div className="container">
        {roomTypes.map(rt => <RoomType key={rt} roomType={rt} roomsInfo={roomInfo[rt]} onBook={(id, add) => handleBooking(rt, id, add)} />)}
      </div>
    </div>
  );
}

export default App;
