import React, { useState } from "react";
import "./styles.css";
import QrReader from "react-qr-reader";

export default function App() {
  const [result, setResult] = useState("");

  const [showQRScanner, setShowQRScanner] = useState(false);
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkInDate, setCheckInDate] = useState("");

  const getFormmattedDate = date => {
    var dateObj = new Date(date);
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    let day = dateObj.getDate();

    let monthIndex = dateObj.getMonth();
    let monthName = monthNames[monthIndex];

    let year = dateObj.getFullYear();

    return `${day}-${monthName}-${year}`;
  };

  const handleScan = data => {
    if (data) {
      const dataObj = JSON.parse(data);
      setResult(dataObj);
      var checkOutDate = getFormmattedDate(
        new Date(dataObj.hotelConfirmation.checkOutDate)
      );

      var checkInDate = getFormmattedDate(
        new Date(dataObj.hotelConfirmation.checkInDate)
      );
      setCheckOutDate(checkOutDate);
      setCheckInDate(checkInDate);
    }
  };

  const handleError = err => {
    console.error(err);
  };

  const showQRScan = () => {
    setShowQRScanner(true);
  };

  const goBack = () => {
    setShowQRScanner(false);
    setResult("");
  };

  const checkIn = () => {
    alert("Successfully Checkin");
    setShowQRScanner(false);
    setResult("");
  };

  const renderScan = () => {
    return (
      <React.Fragment>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "320px", margin: "auto" }}
        />
      </React.Fragment>
    );
  };

  const travellers =
    result &&
    result.travellers.map((item, index) => {
      return (
        <React.Fragment>
          <tr>
            <td>Traveller Name</td>
            <td>{item.travellerName}</td>
          </tr>
          <tr>
            <td>Traveller Document</td>
            <td>
              <img alt="passport" src={item.documentLink} />
            </td>
          </tr>
        </React.Fragment>
      );
    });

  const rendertable = () => {
    return (
      <React.Fragment>
        <table id="checkinInfo">
          <tbody>
            {travellers}
            <tr>
              <td>Hotwire Itinerary</td>
              <td>{result.hotwireItinerary}</td>
            </tr>
            <tr>
              <td>Check In Date</td>
              <td>{checkInDate}</td>
            </tr>
            <tr>
              <td>Check Out Date</td>
              <td>{checkOutDate}</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className="main">
        {!showQRScanner && <h1>Hotwire QR Code Scanner</h1>}
        {!showQRScanner && <button onClick={showQRScan}>Scan QR code</button>}

        {showQRScanner && !result.travellers && (
          <h1>Scan your travel QR code here:</h1>
        )}
        {showQRScanner && !result.travellers && renderScan()}
      </div>
      <div className="details">
        {result.travellers && <button onClick={checkIn}>CheckIn</button>}
        {result.travellers && (
          <button className="secondary floatRight" onClick={goBack}>
            Go Back
          </button>
        )}
        {result.travellers && rendertable()}
      </div>
    </div>
  );
}
