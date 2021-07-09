import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { geolocation } from "geolocation";

const convertTo3wa = (coords) => {
  if (!coords) {
    return
  }
  let w3wApiKey = "42APDQ9T"
  try {
    w3wApiKey = JSON.parse(settingsStorage.getItem("w3wapikey")).name;
  } catch {
    console.log("can't retrieve w3w api key, using default");
  }
  console.log("Finalkey", w3wApiKey);
  let url = "https://api.what3words.com/v3/convert-to-3wa"
  url += "?coordinates=" + coords.lat + '%2C'+ coords.lng + "&key=" + w3wApiKey;
  console.log(url);
  fetch(url).then((resp) => resp.json()
    .then((data) => {
      var words = data.words;
      sendWhatThreeWords(words);
  })).catch((err) => {
    console.log(err);
  });
}

const locationSuccess = (position) => {
  const words = convertTo3wa( {lat: position.coords.latitude, lng: position.coords.longitude} );
  convertTo3wa(words);
}

const locationError = (error) => {
  console.log("Error: " + error.code,
              "Message: " + error.message);
}

const sendWhatThreeWords = (words) => {
  let data = {
    key: "threewordsdata",
    newValue: words
  };
  sendVal(data);
}

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("Companion Socket Open");
  restoreSettings();
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("Companion Socket Closed");
};

// A user changes settings
settingsStorage.onchange = evt => {
  checkSettingsChanges(evt);
  let data = {
    key: evt.key,
    newValue: evt.newValue
  };
  sendVal(data);
};

// Restore any previously saved settings and send to the device
function restoreSettings() {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index);
    if (key == "w3wapikey") { continue; }
    if (key) {
      let data = {
        key: key,
        newValue: settingsStorage.getItem(key)
      };
      checkSettingsChanges(data);
      sendVal(data);
    }
  }
}

// Send data to device using Messaging API
function sendVal(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}

function checkSettingsChanges(evt) {
  switch (evt.key) {
    case "threewords":
      if (JSON.parse(evt.newValue) == false) {
        geolocation.clearWatch(watchID);
      } else {
        var watchID = geolocation.watchPosition(locationSuccess, locationError, { timeout: 60 * 1000 });
      }
      break;
  }
}



