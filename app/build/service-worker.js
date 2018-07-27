// authored by Maye Edwin : https://twitter.com/MayeEdwin1
// Add offline properties, push notification, web share, web payments, etc
// pwafire 4.0.0
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')
  
if (workbox) {
    console.log(`Yay! Workbox is loaded ! Cheers to PWA Fire🎉`);
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "e49eb661c7f6d1a0e7e632e3981e40d8"
  },
  {
    "url": "images/sample.png",
    "revision": "072517e17445cc907c5e33fed5bc37bd"
  },
  {
    "url": "images/sample.svg",
    "revision": "52ec66cadebd140286fb6eaf764bfe33"
  },
  {
    "url": "images/sample.jpg",
    "revision": "6d9bab13381d02d7519e759bd3a04377"
  },
  {
    "url": "images/sample.gif",
    "revision": "af1c75fca697e689f560f79a432828ea"
  },
  {
    "url": "js/app.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/main.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "scss/app.scss",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
]);
} else {
    console.log(`Oops! Workbox didn't load 😬`);
}
