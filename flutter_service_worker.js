'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "52327354b68a2cbc45e6c28afa6d99c4",
"canvaskit/canvaskit.js": "8cf6e87eff144e2453a9640bfa1a4ad0",
"canvaskit/chromium/canvaskit.js": "9dc7a140b1f0755e6321e9c61b9bd4d9",
"canvaskit/chromium/canvaskit.js.symbols": "e0bd5a7d61e50fd83674ef3e877c61fa",
"canvaskit/chromium/canvaskit.wasm": "75c45fa04f7ad29cad41258ed1b26d16",
"canvaskit/skwasm.js.symbols": "7f2fa74eded779c76d44255bed2dc4fe",
"canvaskit/skwasm.wasm": "39502680214c15fd97e6db1f3a0afd78",
"canvaskit/canvaskit.js.symbols": "87fec0ee5c04903b89601751ca381a33",
"canvaskit/skwasm_st.js": "7df9d8484fef4ca8fff6eb4f419a89f8",
"canvaskit/canvaskit.wasm": "74b0361aa2587dc87161e7c4301b9884",
"canvaskit/skwasm_st.wasm": "395a45f12db0729e59ae7ef87b81135e",
"canvaskit/skwasm.js": "9c817487f9f24229450747c66b9374a6",
"canvaskit/skwasm_st.js.symbols": "295413afe7939f9273ac4fe24d29dfa9",
"index.html": "df0ff8150eb1feac8576cc37ce13ad79",
"/": "df0ff8150eb1feac8576cc37ce13ad79",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/fonts/MaterialIcons-Regular.otf": "34c2e364c0c1a296886efe59caf165ef",
"assets/AssetManifest.bin": "829869642f96ed4d1bef6a199aa7267b",
"assets/AssetManifest.json": "c7605eaf6a1bf74a8573d34849582262",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/svgs/map_assets/seas_en.svg": "0d065453769ca2aacdc0ba352d5ba16e",
"assets/assets/svgs/map_assets/names_en.svg": "fbf1615e7d31b5899028a8438fc61177",
"assets/assets/svgs/map_assets/seas_es.svg": "e7a6bf7aefdbcabba6b306dbe4ec44cd",
"assets/assets/svgs/map_assets/coastalLine.svg": "46671175a2fa7878088c309c1d3b2632",
"assets/assets/svgs/map_assets/names.svg": "38733f218e465c916b1e9275bc81a730",
"assets/assets/svgs/map_assets/borders.svg": "9809850d98c7e44135544dae2da4cbc7",
"assets/assets/svgs/map_assets/names_es.svg": "691537c05372bf47558f9443f0c9f2df",
"assets/assets/svgs/map_assets/baserd.svg": "2dfc9610c11d5bee6d798b631cee209c",
"assets/assets/svgs/map_assets/lakes.svg": "72c2e5ccdc92081edb2b6dacc4485429",
"assets/assets/svgs/map_assets/rivers.svg": "8a1345b3c948e39bc2cc55faa5fe0aee",
"assets/assets/svgs/provinces/30.svg": "b6ffa1b13006b97c5974ed98eb9660e7",
"assets/assets/svgs/provinces/17.svg": "b8612b2e975c90552042bdf8ce790c20",
"assets/assets/svgs/provinces/13.svg": "ea6c78406281004948f9e8e8ff326a02",
"assets/assets/svgs/provinces/11.svg": "4b61e213b9cc6855453b8977a80eee28",
"assets/assets/svgs/provinces/05.svg": "9cb22ec659fde195f990b73545de0604",
"assets/assets/svgs/provinces/18.svg": "437d22f6f04b2222e782e0e0744abb7f",
"assets/assets/svgs/provinces/02.svg": "d94de9e669637a11c0bc0ad961ec4325",
"assets/assets/svgs/provinces/14.svg": "49595e041d729f7f511ad28d8ee2b143",
"assets/assets/svgs/provinces/10.svg": "53f1c0032859a9fdffb0f7519462edcd",
"assets/assets/svgs/provinces/07.svg": "7ac2326084941ca333a6918eba80b2b0",
"assets/assets/svgs/provinces/01.svg": "65b8fa4f210554704ae818cd5fd368f5",
"assets/assets/svgs/provinces/25.svg": "5e716e700f02a7ebd3434dac5cce149a",
"assets/assets/svgs/provinces/22.svg": "a9845f277cc072b8b8840781e0f44e11",
"assets/assets/svgs/provinces/03.svg": "7cb42b6d5b7d221370947203920fb555",
"assets/assets/svgs/provinces/29.svg": "b393a5c02ca1b2b6a848b6bf8b6fc9ee",
"assets/assets/svgs/provinces/08.svg": "4f32f84f0691978cec29e59a996e9721",
"assets/assets/svgs/provinces/16.svg": "33ff4f57d2577232db0bd6c5c4ed9714",
"assets/assets/svgs/provinces/islacatalina.svg": "58fcc3f83a0af26cb44e86403dbe5efa",
"assets/assets/svgs/provinces/24.svg": "354eb3cdbea4d63daf3d968e90e542a2",
"assets/assets/svgs/provinces/27.svg": "f4d97810f1bd24525f4ad104142906cb",
"assets/assets/svgs/provinces/12.svg": "4eccd3e5e301c63a85fb749e4be9b416",
"assets/assets/svgs/provinces/26.svg": "1146a629dbddba7e8ff1b427edb5c7a7",
"assets/assets/svgs/provinces/32.svg": "ae6ef3ceffc61e83aa93db398a176d79",
"assets/assets/svgs/provinces/04.svg": "be984a2d33fbb2a1c8c1254e006794b1",
"assets/assets/svgs/provinces/19.svg": "283d3807739b6aa868cdabc3d5f2ebf7",
"assets/assets/svgs/provinces/31.svg": "ed831ff3f208ba5931c5b3e64535ec0e",
"assets/assets/svgs/provinces/06.svg": "513d63f72698c61d4fab2179ed12cf17",
"assets/assets/svgs/provinces/15.svg": "48fd3abc3db9ae89af13964a2c63fb6e",
"assets/assets/svgs/provinces/20.svg": "1252a4fbe3c0dedfb03adba799a8776f",
"assets/assets/svgs/provinces/islabeata.svg": "3195263f953cfc30cb3350d05de5ecee",
"assets/assets/svgs/provinces/23.svg": "7201dcedf98822ecbeb21e418ca8126c",
"assets/assets/svgs/provinces/28.svg": "03c55da216a250f7f6fc1cdaa94aaf4a",
"assets/assets/svgs/provinces/21.svg": "1336537713ef6c8c5a589f72a71bf4b5",
"assets/assets/svgs/provinces/09.svg": "c20d26c11c87e8cdd579fae0ba7108a3",
"assets/assets/svgs/provinces/islasaona.svg": "863f62f58f282707fb6b0b4a021539f6",
"assets/assets/svgs/rd.svg": "a5d37505b59633a2bf74089aac237f68",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "2b2dc92c7675fc39b5286b4ca450ef36",
"assets/AssetManifest.bin.json": "caf9018589fbce71cc93f38ffdcf6faa",
"version.json": "195af4add0f50646a5d5d1a2d1c1603d",
"flutter_bootstrap.js": "0c23d4551bec314c4500bec33514b5d0",
"flutter.js": "1e28bc80be052b70b1e92d55bea86b2a",
"main.dart.js": "7ca5d79780228f554a0977fec6c2d682",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
