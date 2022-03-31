"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
const map1 = document.getElementById("map");
let latt, longg;
let mapEvent;
let map;
let marker2;
let marker1;
class App {
  #mashqlar = [];
  constructor() {
    this._getPosition();
    map1.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        console.log("Enter ishladi");
        // this._result.bind(this);
      }
    });
  }
  // Hozirgi ornimiz koordinatalarini olish
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._showMap.bind(this),
      function () {
        alert("Sizni turgan orningizni aniqlay olmadim");
      }
    );
  }

  //  ornimiz olgan koordinatalarini mapga berish
  _showMap(e) {
    mapEvent = e;
    [latt, longg] = [e.coords.latitude, e.coords.longitude];
    map = L.map("map", {
      boxZoom: false,
      zoomControl: false,
    }).setView([latt, longg], 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // this._markerChiqar(e).bind(this);
    this._markerChiqar(e);
  }

  // markerni chiqarish
  _markerChiqar() {
    marker1 = L.marker(
      [latt, longg],
      {
        draggable: true,
      },
      18
    )
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
        })
          .setLatLng([latt, longg], 18)
          .setContent("Sizning o'rningiz")
          .openOn(map)
      )
      .openPopup();
    marker.on("dragend", function (e) {
      // let latitud = marker.
    });
    marker2 = L.marker(
      [latt + 0.0004, longg + 0.0004],
      {
        draggable: true,
      },
      18
    )
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
        })
          .setLatLng([latt + 0.0004, longg + 0.0004], 18)
          .setContent("Sizning borishingiz kerak bolgan joy")
          .openOn(map)
      )
      .openPopup();
    // console.log(marker1);
    // console.log(marker2);
    // marker1.on("dragend", function (e) {
    //   lat1 = marker1.getLatLng().lat;
    //   lat2 = marker1.getLatLng().lng;
    // });
    // console.log(marker1);
    // this._chiq();
  }

  // _result(marker1, marker2) {
  //   // obj1.on("dragend", function (e) {
  //   console.log(marker1.getLatLng().lat);
  //   console.log(marker1.getLatLng().lng);
  //   // });
  //   // obj2.on("dragend", function (e) {
  //   console.log(marker2.getLatLng().lat);
  //   console.log(marker2.getLatLng().lng);
  //   // });
  // }
  // _chiq() {
  //   marker1.on("dragend", this._mark1());
  //   // marker2.on("dragend", this._mark1(marker2));
  // }
  // O'zgartirilgan joyni aniqlash metodi
  // _yolniChiqar() {
  //   // let yul = L.Routing.control({
  //   //   waypoints: [L.latlng(latt)],
  //   // });
  // }
  // _mark1() {
  //   let lat1 = marker1.getLatLng().lat;
  //   let lat2 = marker1.getLatLng().lng;
  //   console.log(lat1, lat2);
  // }
}
const magicMap = new App();
