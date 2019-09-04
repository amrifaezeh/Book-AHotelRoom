import React from "react";
import ToggleButton from "./ToggleButton";

const RoomType = ({ roomType, roomsInfo, bookingCallBack }) => {

    roomsInfo= roomsInfo ||[{
        "id" : "57034fac-c335-4b61-9ab8-b4ea3d4b9e97",
        "groupKey" : "Double",
        "name" : "Double Room - Economy",
        "description" : "Double Room - Economy",
        "totalPrice" : 224.47,
        "price" : 224.47,
        "promoPrice" : 0,
        "b2CPrice" : 0,
        "savingPercent" : 0,
        "boardCode" : "1360",
        "boardCodeDescription" : "All Inclusive",
        "hotelId" : "FR37525",
        "isNonRefundable" : false,
        "canHoldBooking" : true,
        "facilities" : {},
        "images" : null,
        "specialOffers" : [],
        "surcharges" : null,
        "nightlyRates" : null,
        "cancelFreeBeforeDate" : "2018-09-07T23:59:00",
        "roomCancelCharges" : [
          {
            "DateFrom" : "2018-08-29T09:51:00",
            "DateTo" : "2018-09-08T23:59:00",
            "Amount" : 0
          },
          {
            "DateFrom" : "2018-09-08T23:59:00",
            "DateTo" : "2018-09-15T23:59:00",
            "Amount" : 66.68
          },
          {
            "DateFrom" : "2018-09-15T23:59:00",
            "DateTo" : "2018-09-16T23:59:00",
            "Amount" : 111.13
          }
        ],
        "hasBreakfast" : false,
        "debugInfos" : [
          {
            "Key" : "SearchRequestId",
            "Value" : "789e264573734ebdb44c3b0d454980e1"
          }
        ],
        "accommodateText" : [
          "Hotel"
        ],
        "bedTypeLabel" : [
          "Double"
        ],
        "roomTypeLabel" : [
          "run of the house"
        ],
        "viewLabel" : [
          "not specified"
        ],
        "isVisible" : true,
        "selected" : false
      }];

      roomType= roomType|| roomsInfo[0].roomTypeLabel;

    return (

        <div className="row">
            <div className="col-3">
                {roomType}
            </div>
            <div className="col-9">
                {roomsInfo.map((_) =>
                    <div className="row">
                        <div className="col-9" style={{ backgroundColor: "red" }}>
                            {_.bedTypeLabel}-{_.boardCodeDescription}
                    </div>
                        <div className="col-3 d-flex justify-content-between" style={{ backgroundColor: "green" }}>
                            {_.totalPrice}
                            <ToggleButton className="btn-sm">Book</ToggleButton>
                    </div>
                    </div>
                )}
            </div>

        </div>

    )
}

export default RoomType;