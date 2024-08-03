'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e57eef5d9188cb9fee996b900650bd08",
"assets/AssetManifest.bin.json": "083c5dbb9be19471b2523870c785e04a",
"assets/AssetManifest.json": "d45f77f9ca9deec6e82bc969a5560fa6",
"assets/assets/fonts/Battambang%2520Bold.ttf": "d181e97d6231f4cb6cacbfcc84c7dc3e",
"assets/assets/fonts/KhmerOSBattambang-Regular.ttf": "a680c425b92d3705c1b96c424c4b7208",
"assets/assets/fonts/SourceSansPro-Bold.otf": "1a2a157bfd94b250884c09f1bd57a0bb",
"assets/assets/fonts/SourceSansPro-Regular.otf": "5e1d162e634a102d7da8db597825a764",
"assets/assets/icons/airplane-around-earth.png": "4756f35beecc028fc51fd3d6269dacbc",
"assets/assets/icons/calendar.png": "dcf5ecab2842d159654ef8aaa50cf54b",
"assets/assets/icons/contract.png": "882db38bb9e0fefe05581a777bd69758",
"assets/assets/icons/credit-card-copy.png": "eb87ee0bf7912afa37b0cc2f9058af79",
"assets/assets/icons/credit-card.png": "b4ca4fc07874b2b61636718b4cbca5e8",
"assets/assets/icons/edit.png": "c85e412b6e6c4975b22eff567f0b0da4",
"assets/assets/icons/engineer.png": "f1cf50a08cda73f8d1da2c8408b909fd",
"assets/assets/icons/icons8-training-50.png": "4b12a8f6e360e952f534a6af55019325",
"assets/assets/icons/icon_white.png": "236b35f1892d0313b83be53e367b2c2a",
"assets/assets/icons/id-card.png": "08eb04c0c439eb72c422f3cd47d84602",
"assets/assets/icons/smartphone-call.png": "457bd3ba8e856b521d15ef3f1aa6bd1c",
"assets/assets/icons/table.png": "ab1d793c2bc442620915334f02768b6b",
"assets/assets/icons/travel.png": "0d5bb4e8dcd53430e74572cc11f1601a",
"assets/assets/icons/visa.png": "a04d1ff99f6452521c0fd3900e5a663f",
"assets/assets/icons/visa1.png": "ca761837e2350fe7851225f048ab3977",
"assets/assets/images/background.jpg": "4c232cc61688d9bb31e4210bb54fb4a6",
"assets/assets/images/cambodia_flag.png": "15bec9f455e7b48fde646de02e2dfcc6",
"assets/assets/images/card_image.png": "2d671b5f3338bb08becc6c86b0b85fdc",
"assets/assets/images/english_flag.png": "f646ee2fb7231f6470e2677756ed2298",
"assets/assets/images/logo_ocwc.jpg": "a37dccc788b2e4ec6a657c9977eb1df1",
"assets/assets/images/ministry_logo-removebg-preview.png": "27f6ca1fdfd39630c9d5c8340bacc199",
"assets/assets/images/no-results.png": "f9a93a59aeae7c1466881150a251f5ef",
"assets/assets/images/noimage.jpg": "5f0dcfc9887cff03b5f9dcdcaa8b0d22",
"assets/assets/images/notfound.gif": "bed3faabcea0ff76e127ddcd32a975c7",
"assets/assets/images/ocwc_card.png": "446207febdb8f552a373f906febc08ba",
"assets/assets/images/ocwc_card1.png": "68b0e647097f76dc103de5fb1e94e4c5",
"assets/assets/images/pdf_logo.jpg": "dcc37addd69416f9ae5ddc5b49b9f312",
"assets/assets/images/splash_logo_new.png": "3ddee920ed3c7f46195b32d3d5f263ed",
"assets/FontManifest.json": "5751dda4b506e2f43053504450689552",
"assets/fonts/MaterialIcons-Regular.otf": "0b5ab4724f5ec1377124d2e99fd1e2f8",
"assets/NOTICES": "a85dee6dcbfaa8b99cbdad24b9f36e6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "9083a1f1affe4c3bd76f4d4cf56b413a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icon/android-chrome-192x192.png": "c04945429f96484a1b2c7d330a5018cd",
"icon/android-chrome-512x512.png": "e6c7ec81cdb9a53cf1d7bd5439980aaf",
"icon/apple-touch-icon.png": "a8bd69bc579e81f75b7f8e2d9b65468a",
"icon/favicon-16x16.png": "a80aa6cee854e0cadfca419801873095",
"icon/favicon-32x32.png": "9e8139ad5a9f427fe21b01d4328d8b85",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e131648a501be0078112d1ccb5990972",
"/": "e131648a501be0078112d1ccb5990972",
"main.dart.js": "27578eac0d9f9ca160576802ee422934",
"manifest.json": "de718452fb04746487aa92fd2c1555a8",
"version.json": "93b619293744d9bd04cdebb89c1e6972"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
