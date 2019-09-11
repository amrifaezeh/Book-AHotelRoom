import React, {useCallback} from "react";
import ToggleButton from "./ToggleButton";
import "./RoomType.css";

const RoomType = ({ roomType, roomsInfo, onBook }) => {

  roomsInfo = roomsInfo || [{
    "id": "57034fac-c335-4b61-9ab8-b4ea3d4b9e97",
    "groupKey": "Double",
    "name": "Double Room - Economy",
    "description": "Double Room - Economy",
    "totalPrice": 224.47,
    "price": 224.47,
    "promoPrice": 0,
    "b2CPrice": 0,
    "savingPercent": 0,
    "boardCode": "1360",
    "boardCodeDescription": "All Inclusive",
    "hotelId": "FR37525",
    "isNonRefundable": false,
    "canHoldBooking": true,
    "facilities": {},
    "images": null,
    "specialOffers": [],
    "surcharges": null,
    "nightlyRates": null,
    "cancelFreeBeforeDate": "2018-09-07T23:59:00",
    "roomCancelCharges": [
      {
        "DateFrom": "2018-08-29T09:51:00",
        "DateTo": "2018-09-08T23:59:00",
        "Amount": 0
      },
      {
        "DateFrom": "2018-09-08T23:59:00",
        "DateTo": "2018-09-15T23:59:00",
        "Amount": 66.68
      },
      {
        "DateFrom": "2018-09-15T23:59:00",
        "DateTo": "2018-09-16T23:59:00",
        "Amount": 111.13
      }
    ],
    "hasBreakfast": false,
    "debugInfos": [
      {
        "Key": "SearchRequestId",
        "Value": "789e264573734ebdb44c3b0d454980e1"
      }
    ],
    "accommodateText": [
      "Hotel"
    ],
    "bedTypeLabel": [
      "Double"
    ],
    "roomTypeLabel": [
      "run of the house"
    ],
    "viewLabel": [
      "not specified"
    ],
    "isVisible": true,
    "selected": false
  }];


  const hasBreakfast = (_) => {
    if (_.boardCodeDescription === "Breakfast" || _.boardCodeDescription === "All Inclusive") {
      return <li>Breakfast <i className="fas fa-coffee"></i></li>;
    }
  };

  const isRefundable = (_) => {
    if (_.isNonRefundable === false) {
      return <li>Refundable <i className="far fa-money-bill-alt"></i></li>;
    }
  }

  const accomodationTitle = (_) => {
    let bedType = _.bedTypeLabel.join('-');
    if (bedType.trim() !== "") {
      bedType = `| ${bedType}`;
    }
    return `${_.accommodateText} ${bedType}`
  }

  const handleClick=(id, add)=>onBook(id, add);
  roomType = roomType || roomsInfo[0].roomTypeLabel;

  return (

    <div className="row box mt-3">
      <div className="col-3">
        {roomType}
      </div>
      <div className="col-9">
        {roomsInfo.map((_) =>
          <div className="row mt-1" key={_.id}>
            <div className="col-9 item">
              <span>{accomodationTitle(_)}</span>
              <ul className="options">
                {hasBreakfast(_)}
                {isRefundable(_)}
              </ul>
            </div>
            <div className="col-3 d-flex justify-content-around item p-1 align-items-center">
              {_.totalPrice}
              <ToggleButton className="btn-sm" onClick={(add)=> handleClick(_.id, add)}>Book</ToggleButton>
            </div>
          </div>
        )}
      </div>

    </div>

  )
}

export default RoomType;