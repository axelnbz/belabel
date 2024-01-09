'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ed402fc9c425eb94907ff5b4cd161ebd",
"index.html": "dcb76a022bc076dac8021ddc0cf220ad",
"/": "dcb76a022bc076dac8021ddc0cf220ad",
"main.dart.js": "8290ae22f5fa42538fece1d62c1c067b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c53a397dadd2d4aa2c714c63bd82dce7",
".git/AUTO_MERGE": "4116da20356788c3d3bca6af6343c128",
".git/REBASE_HEAD": "aa790f78844006c893cadaa0c2013f0f",
".git/ORIG_HEAD": "b1ee7ccf1364f25facc9945116112dad",
".git/MERGE_MSG": "167873877d475af7787744632532746c",
".git/config": "351c0a28585e37bc98a8b9210f175ec9",
".git/objects/6a/21d8e9033c411b00c4c9d5a2158f90abbd49ad": "d5379e5b88995f9cdb7190f4316fa9be",
".git/objects/35/6eebfc01f460add89c501a93a6b4d6b6d6e09b": "5a4a0576edea196e7541c73bb5a3848d",
".git/objects/35/5b34f67dc9e21764f67b7c81aa736ba1b53990": "3a9ee16fb5ef2cd9f8e740d32568e1ea",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/59443572b975f5b9e959ad0ec86b01b406bcfc": "94203dec0de79c36258611281d5598af",
".git/objects/56/652809b14bfe2d824a214a225ecc96930ffa63": "dcf2c5972ab796749ad565bfbcc1d8b3",
".git/objects/5a/922ebb111fe54c0b07115de965289686fc7f2b": "ccbaf369d8772242e0d4e28945cdc355",
".git/objects/02/fa168a4af73e11a92a99d167c9d9865796d8c7": "59b43273e08005804076e4000ff79018",
".git/objects/ac/997f14eda684b34c84bde7da78eeec5628a2b8": "5654b681f058d4d4801568bf5d855bf1",
".git/objects/bb/68b62200ef6c84a2138be4d62dd8d3cbba69b0": "bf101981dabfe09a2b688c23942d4a56",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/e5f95bc7cbc105e178b76eaa7f4f30ee4f4bc0": "61429e4de5fc77206ea100b13d26207e",
".git/objects/d0/c2069fbe2714fbd938de27aa4f7efab677fd1a": "86dd344df3e291898354bedbc2337efa",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/20255b5a63e9bbbfe5d2911e9628194afb4381": "5857291a23c2f73deb85481db50566e2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/7d/0024750253a8a115a9e7f8081d329eca51a54a": "e03683c7dedb90d87eb287f430c5c887",
".git/objects/73/63a0f3fd85918b348af07b65f2b127a5f11868": "f35090403debf8fceebb6f96db7b70eb",
".git/objects/1a/71bd945f8ac5090d7b9692bc6857ea32ebd83d": "0d09c4dfae048d8ed4d7d0b561f99aff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/81/79cf4c11330bf5af474bd3165132bef1f1dabc": "487655961c4a67c9d8005083eb1d4d03",
".git/objects/44/aca1809a61f91ec50746a418cc2f16202d6984": "0c54fd38b2bea3e63c907449390f9629",
".git/objects/2a/6cc7e6e73fd107a6fa5be630331d177304c92f": "8707148e43a23853a40ca7184b9bc69f",
".git/objects/2f/bce4ef60347d1f6c0e9f06e4edb44184cd8484": "01275cf8337173f794fbedba38615e6e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/1e988507c0f24fa0c6e74bafa501c8c7ccdd7e": "5281315014425880d3bba497fa9166ac",
".git/objects/9a/8293b75f9569eb116c8d5eb8afa4076141a9cc": "3302c3e22034ec613d179d956498fbef",
".git/objects/09/479b1e026d23634eafcdedeff57fd7c71a2e02": "39d2bfb1dfb5b2b26c4fba21bb775a9d",
".git/objects/09/45c3b4fb24105c5e4ab91b87fa6054ffe57222": "96e9407c42fb8f6acc1661bf0b6da78e",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/5b/088da06ccad8ef2e4a037ad2c7626e6582fa58": "f098bb8e10256c4f0c5cab2f536e6954",
".git/objects/37/73e0143ea54d7e77f7168ade4480a1bf25ad66": "44067f247165c671bc521475647b3a37",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/52/d3cfee80bd097adcd7586f3c4b96b6fbc1ee67": "786cfcb55fce3b2304ac08a1195f2318",
".git/objects/97/b0cb9b41036c1c162807196f7b36ecdc063571": "05f627f4c8f3c9f37d0ee139fc62753e",
".git/objects/63/3feb2d6377e342afb72896ad5adf6db7a551d3": "6ba82bdd4a11c7a0a0a88f14031a547e",
".git/objects/90/8787a5e9821e19ff12468707354a74d4e8519f": "f21f37549b31cda4f8ac36bd492c4e16",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/1034b447b5877a5ed65744e0002ce116342e00": "6f0e4bd2482e969dc6dc416feda86afe",
".git/objects/a0/feaba8dfe458f00fde484d6394aee7d4fce7cf": "a833d10b3ac6eba9b4a9ae4ce2b47c1c",
".git/objects/a7/7de6c5697cc57e728e2055741d62b091c7c9c3": "d1e499e862823b1e4bae18a535d69050",
".git/objects/b1/e50deb83bb3225633089586d037e487ba13296": "6b0a820ee6508688dede1ae791c936f7",
".git/objects/b1/f748dc5d9df15edbd3e24d5cc416afcaf0ea05": "1ba0df3091e33ce981e1e190fb663813",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/d86ae9d6ef90ee4f0cd90c2bbf235d719907dc": "945b74afa433b696263008343c3e703c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/bf9cdf510dfee37b3eb82ba7126c03cf3cb4b7": "ab705c609e841c294543a73212ed4b1e",
".git/objects/a6/93c48c5a591aa2a3e33be912eaf6a9f6718c62": "385444ccb925743697a41d0e0c66456e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b9e4a596bfacff31792c964617d2427e60c03d": "0fc5a0ae2cdd0ce442e9cf0adcfe3fe1",
".git/objects/cd/23457e90a75f7943a5c872830c502e816d09d4": "1f253dd3df8209650da055b48281759b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/c2/6000706dd25597090d7a99a16169daf1fb12f7": "6e6d9bbffdc7b8e504649973ab574413",
".git/objects/cb/cb490492abd13e81ce7f9c4f783d29bac8143f": "389efbc23ac3161849459bed6d2d9030",
".git/objects/ce/cebf1088258537356ea72ab136141de5270ca8": "67fc06102572f512fda47617fc8d5d87",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/8ac08198f7b4ef7b71e5aa3ac7fd45242abac4": "7cb03e3cd7ad7ab0727f7041acc518cd",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/15/32fefc0b8e77cb23c433839e61c3832de848bc": "b36a605370bbb1c6512f86489058e52e",
".git/objects/1d/6a2c338344ca6b5506eabfe43ff28653f94969": "a7062829899007d20c15923b15e5078c",
".git/objects/76/de8e249af1b6d72aa7224e58acae4b670a6e47": "a8b4230cc8702295e0581dc14aa6ea55",
".git/objects/78/7044dfe1da3d9eb76219cd909fa173a922b31e": "890eef04f10afe4965288dcff7436acb",
".git/objects/13/0e1806c4f9c7683bdadacc8e6efeeb699967d5": "19f79cf4c67248faf206c01ca9ebc2d1",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "3862e011cd6a0ae6bea67a5615b5e6e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8273442b968db4ffb1ce76aa8c319b41",
".git/logs/refs/heads/main": "ff5f4bf57d728b057895a5f45877c9a1",
".git/logs/refs/remotes/origin/main": "0e058c9dec609c9832d1125539883b23",
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
".git/refs/heads/main": "b1ee7ccf1364f25facc9945116112dad",
".git/refs/remotes/origin/main": "3862e011cd6a0ae6bea67a5615b5e6e3",
".git/index": "0f15c2e8fbf114e401353be3ec635a78",
".git/COMMIT_EDITMSG": "548e3e17d20c1fb01599316580d90286",
".git/FETCH_HEAD": "860bcc6d6e19c5ef084bcaa6eda119bf",
".git/rebase-merge/git-rebase-todo.backup": "1cb029593c85c3768801cbf915e039eb",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/orig-head": "b1ee7ccf1364f25facc9945116112dad",
".git/rebase-merge/git-rebase-todo": "f29b3aec7b2eb577d94bfa62a19435ca",
".git/rebase-merge/message": "d706c71028b249140ddb4d8f30f64916",
".git/rebase-merge/onto": "3862e011cd6a0ae6bea67a5615b5e6e3",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "6d7fce9fee471194aa8b5b6e47267f03",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/done": "c80ae7dda52f99af3186d270e19bff03",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "aa790f78844006c893cadaa0c2013f0f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "c45d8f1dff2dbca6ccbf6b49b7724412",
"assets/images/bajalabel.png": "105b7bf53e5c9a5913065e27a8669a61",
"assets/images/CERRAR.png": "e853b8c55f905380fe975921c79f1a19",
"assets/images/EXPANDIR.png": "381a6fca4eaf2a020fb4732d9dfcb4c3",
"assets/images/FONDO.png": "71bcbde5281a88b1dbc825932cba6fa1",
"assets/AssetManifest.json": "a5274620b1257d7a265878ee4384293f",
"assets/NOTICES": "86f3c94a674f6bd7723319209169e5d6",
"assets/FontManifest.json": "6ed315ceb444d0998d71f5431b666d7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "242050ac42fe6b3cba5d5687e872eb9e",
"assets/fonts/MaterialIcons-Regular.otf": "709f4b9920c130aa64241cfeaebb5108",
"assets/fonts/ProximaNova/proximanova_light.otf": "bc338d9769740ef2b5f894d1d454cf7a",
"assets/fonts/ProximaNova/proximanova_regular.ttf": "386c8ff06aaa9d3ea14528a5703b6ec5",
"assets/fonts/ProximaNova/proximanova_bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/fonts/Sofia/SofiaProRegular.ttf": "edbd56cb7b884040ecbec149d962679b",
"assets/fonts/Sofia/SofiaProLight.ttf": "361a24ebef592ee0ce8c1e391b0fc686",
"assets/fonts/Sofia/SofiaProBold.ttf": "b053c4992e8431e47a4669422a03ee8d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
