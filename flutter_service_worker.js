'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "616d7e23dbdfd8f53fc279eb351ce6c4",
"index.html": "4fe1811b475087632c473b49cd3bbfa6",
"/": "4fe1811b475087632c473b49cd3bbfa6",
"main.dart.js": "43cf97062585eb77ac0c07f384ca1be0",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "d5339c68584578471c05232b593a988c",
"icons/android-chrome-192x192.png": "83e4896a52853081fb5e067b64e403c2",
"icons/apple-touch-icon.png": "52f5e4c0c0066df6b2faa154fab82ae2",
"icons/android-chrome-512x512.png": "581782d5776ccd1b7b7523b9974c253c",
"manifest.json": "c5c41cb46696cae3b97fe10bfbd4cafa",
".git/config": "ce20c8c22a043a0c185e5dc6144d10c2",
".git/objects/59/6bc56ec60ac67babd465a93d4f9011d79f15e0": "80e1b91ec9fa59bf51961bfeee033b53",
".git/objects/3e/8011c4f845b64527558aef489717ca805a2068": "e665f77eb5d24ec112672608b21179e5",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/65104bf227a89bad0d65952a0e3d6f3632e845": "9eac888b93a419c80f04a8a283abebe6",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9b/038f27bae0c3d6e2793460d12d610a44f48164": "4c0ed5c06e1c8af1895b74a42880f488",
".git/objects/56/6c62cca38480ca64de2cb3019b9e160ed8ee2d": "fe1254f0adac25498c9500bfbf412444",
".git/objects/93/5cad953574239e0f2a4d325bc881879bea7a06": "89f6fb1eca6a21996f5184d4d255ea77",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/1b829490f68d0562262558e14cb1e713b8245e": "d751a5e4537f1a6f9ae2a41602526e8c",
".git/objects/a4/58d41772d367488c476254dec38e812f5ca638": "b200f6e9bc8bec68c3137e13d51a00e4",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ad/a34be1c31591bb2b2c326e9e2906897173d91a": "d64dba6eb4198f8b9c54fd08b731b98e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/95e4db7558175068493e822be1bbe403f1a4fa": "8540c7718eba71108627dd68803eb9bd",
".git/objects/bd/cc484c1e7323a0df81e99946af6545886e607e": "cd51cf51ba2a3ff90b333ece7d7347c2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/91c13ae37d7dd14df8fe1d2fbc5e65b13716f4": "2478758ced8a10f6abb872a62b7af66a",
".git/objects/fe/c3196cc110ecebc3958eb08407714e1828a730": "eb269ebafaa74913bb36a934d918ed00",
".git/objects/ec/387c92f1d7f523a33eb367dc664311649fd131": "4dbc0c8bd3dfba23946816bea1942aaa",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/10/dddaf867501df9d3170471c2d8bb3fc64d458c": "8cfb765473de5466dca18ed8c4eee107",
".git/objects/19/348c5dde4da3df7aa12fd6295802cc219b753b": "ebc60abf10e9dd4396c7158c11256621",
".git/objects/4c/d894274b9387a4bb25e9a440b6eb761a9003dd": "72150592c751eb0edfdb656087cf9df4",
".git/objects/4d/0ebee808222b6b91d296db241987780baad682": "6329d19f2882fe5aa38bd7ca2082e3fc",
".git/objects/86/47d849167b9f8ee5598d5ad64050c0a9d477cb": "7e0ae5c39f3cf26e67fee838cf9998a2",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5c/77789626b344877723f51b533b432fe8887e6b": "fea8d2ea1907c48351f404fea8542731",
".git/objects/3a/5f31259c6d5154a52fe2a1928f9096db713fb3": "faa060c682c84f929416257b5c032c1c",
".git/objects/98/fef4f84b14ae897c42379d05be262481ffddde": "680e519fc05328f03365ce1adb61baf8",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/11897690e94cef54135a1901cca760d0be2021": "c88ddd371f4e0535350ffcb43c3442ea",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/a6/e57277dc363be886ff8a78807b48ea7952571d": "1684f749d489f5d7cb45cc86857f6426",
".git/objects/b9/623a3199fd79b5a49a4c70ce178053b59c4921": "a750d17bc181d77c74f22b3715ae93c1",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/2a721ba4c3dbe6f92d0c1bf7df70c0319006d8": "92ae8dcd7c2acec7d5cf151a8906f223",
".git/objects/cd/5af8c3f28e45a1ae04a87d4c5ee5729e3c1948": "e4d03515a025bf1fd8bb492f81464cc0",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/454fd9bd097aeea338140296da05a026903502": "0f1758d9f74107ff1c519c8dac5771c6",
".git/objects/f8/b2aaa2f92582bfea1c109a6ca855e9186b5934": "5009f02da9059f2091567ed968ed91e0",
".git/objects/79/0b8ae4512dbb169568891c5b81141cbbcdb59d": "168432026ef76c03d6c2a4e02d9bb914",
".git/objects/1b/53e4fc65c577bf4d4e43f729c7ea68a2fb6fc3": "f37e341ffabd68852e3e78cdfc9a15d0",
".git/objects/77/d352b8b5ac41e40f81067b2a931b1f0eb84b47": "7c7474914b30fe7cf5f8c53179527fb1",
".git/objects/48/e96d97a20ec9009c2e1e0562a401007a01a97e": "5cfc6d4321dcae82fb6997a973eb5faa",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/2edf92fb59f4ae1db80d792883478fd54035ca": "e9ba503b5a3e6d619ccb0db847708ea1",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/d430f225eb64b81eaff284b331ceced73a9cfe": "eccfb7b4e85fa6357474b3e7206c097a",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/8e/e92abfb169f3200ec9a948a58f6cb8bd3ad017": "07c0b15363b67ac00a5e4379d89507a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5196cb69d90c9ff7b3e36254a7c275c0",
".git/logs/refs/heads/main": "309ab66fc03cc079e81c5f9d0c3efe2f",
".git/logs/refs/remotes/origin/main": "ff9eab98d9f8ea0497451ba68df68d8d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fa2e76975aa99fe64eff014114158978",
".git/refs/remotes/origin/main": "fa2e76975aa99fe64eff014114158978",
".git/index": "39bd1a31960e67b672b861d1ec0d22e0",
".git/COMMIT_EDITMSG": "afc58dfa3e7d7c0309081c6a26cf65e7",
"assets/AssetManifest.json": "52d0489f5730d7278652ce78c8d6771f",
"assets/NOTICES": "cee4d05794a1e38c1a6a9431c042ab07",
"assets/FontManifest.json": "072fd1a5f9271a5f18ab58204e7a62cc",
"assets/AssetManifest.bin.json": "aee87a7623bc8482e7ffc80494e35d0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/simple_fontellico_progress_dialog/fonts/Fontelico.ttf": "aa125728349958ef919361990a5df2a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "47b4a099f6c0404978c1db3c7e169172",
"assets/fonts/MaterialIcons-Regular.otf": "36bebfc1028cd7224df716dd440ea441",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
