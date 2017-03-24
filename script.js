import { BarcodeScanner } from '@ionic-native/barcode-scanner';

constructor(private barcodeScanner: BarcodeScanner) { }

...


this.barcodeScanner.scan().then((barcodeData) => {
 // Success! Barcode data is here
}, (err) => {
    // An error occurred
});

import { Geolocation } from '@ionic-native/geolocation';

...

constructor(private geolocation: Geolocation) {}

...

this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
import { StatusBar } from '@ionic-native/status-bar';

constructor(private statusBar: StatusBar) { }

...


this.statusBar.overlaysWebView(true); // let status bar overlay webview

this.statusBar.backgroundColorByHexString('#ffffff'); // set status bar to white
