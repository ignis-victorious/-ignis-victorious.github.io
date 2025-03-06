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
".git/config": "3ead1629f57b2c454fda0b0721611fa2",
".git/refs/remotes/origin/main": "f6c8a43b083f4b8acf8f5181b39d4bae",
".git/refs/heads/main": "f6c8a43b083f4b8acf8f5181b39d4bae",
".git/logs/refs/remotes/origin/main": "3efbf1ee52d45717fb500016d1801303",
".git/logs/refs/heads/main": "4a9432327f6ddd42a1dc463416b83339",
".git/logs/HEAD": "884cb01e77e29165434543a06ec10a89",
".git/objects/e5/9de7afa63720d917c429b657c63392dbb67ab0": "4c5f2f4044bbf839dad85b9638d170b4",
".git/objects/e5/c8bc76b5bf1275c8f62cbbf5af24afb608aa2a": "b9c9f5058c44ba8be0f363fe10c2f50e",
".git/objects/77/6695949299f71932ebb2f94ffa1a83f010d981": "adb491fae8360da4605b7bd00220de68",
".git/objects/10/259c3fe94cf82125d0c336f627b487d915b3e3": "7e091fa5115bf2cddc8923b3f5b5f47d",
".git/objects/c7/821765e22bd5587f789e5ff9d1c308900b1885": "9e56bcbd19211d14a7633cf9c73a77c0",
".git/objects/6a/941ad6fad1faafcf788f3c217dc3036e59c715": "589a290d8874a87d4c0b1191d829a291",
".git/objects/49/ed2c76aab8b1005d880a9e3049532a78744ddd": "42dee9c5960f51a52aa93bcd03f55c0b",
".git/objects/43/06fe03d255dccb99facb580d2d53bcdc651d94": "9a058f8f1e3471afbd97d81c01ffc203",
".git/objects/95/81af7afb76f940d65467e701f6346855f377a0": "e84f1084a949d31ce0e186ff66f49263",
".git/objects/df/85085d2417065a4961055c5947717ab5aef990": "301e4000a0189471cde5ca6a797e9d6b",
".git/objects/33/eb471b79fc9217040edf92e41cd1b605653b12": "e9935e7ecf67f7a5b72a108af44b2543",
".git/objects/18/a6c80f203f8be4f7ab1d1422d5c54e82f0a1ac": "a6175daf66add9f4f1bbcf2aa1efa72b",
".git/objects/54/8d1f5db71a877e28abd67b880d048d77bf90f2": "16df6c972ef5f227ba1eb3832094dedc",
".git/objects/c0/92480605ed5322fbc2cf8983feef54402cea75": "a690042dde3e3d7e20fdfd96f6b2bc81",
".git/objects/c0/62318c2c3532a7ea4c04f193a2b418667c798e": "d985299353ce76a3f695643ee70282a4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/bf/47ec8671361be31e0ec9fdde14a5628facbea4": "d495fde39b673e682c928721c3df97e6",
".git/objects/51/8e53f315a6b6cb9b920921fe14455a56e35e4e": "15ba4d16f594d4908fe28b6d2fb08930",
".git/objects/ea/01c890dd16fee713e4835b88b022ea0001595d": "f4685c6a8ddceb705146e85a65675f8c",
".git/objects/ea/8e1569be0579e1c83cf83762b5cbff97d66405": "ee2d4cd5369f2ab01ced85f8166518ca",
".git/objects/7e/86f489edc413986838752cbc2dc6bfe3b1fb0f": "50b8208090183ab60d8a93d57ab6a781",
".git/objects/ed/64288747e4cbdd18136ad0261290bef9c3f6a7": "c261be04439ad173588067c7f5082fe9",
".git/objects/09/33ddfbeb752c77c1c2e8bb7948a56ed5b1c045": "93527dc0bc3214bcff95a9dd1979f346",
".git/objects/59/57ab32144f01957a95557da60942abde455fe0": "618f3f7657860534c0f86f23ae8b96b0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/eb/da925d31584386bcaf66812806bc84eb65b951": "932bb7e202b849c1e46c0ddca656d840",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4a/53453fd0056eea3f7bfdbfc82e9c95d64e039b": "a54a22a84915c1fc2e788c7c9f87f4c8",
".git/objects/bb/3a6f046193e4c0565e70cae16cf9402d2cf637": "29b1609e73633b0346453f5b0c90d0ca",
".git/objects/f1/832ae55e0bbb32e0a229ef493f8b929fc8e8d2": "b6b3429c01e218af82402f2f34f836bb",
".git/objects/f1/f23c6bd6bbe6fee6e6ddc69c472135b1f636c1": "269596febde737757af587a6860d9f5e",
".git/objects/2b/ee6dd18f1efafc05ad116d3b9c8e2e9cd4e857": "718bb52201a170c3b0247cf12f43f577",
".git/objects/01/b2dd8a964ca6fce4931767dac28942052afd68": "b04027b9d3778da1aad0054da0f96003",
".git/objects/c5/13459b5cfde4d9840e9e8b72494d5354a83dbd": "46b4616cdac116783d3e0782664a8e10",
".git/objects/3f/a02367b93fe7d1f2592487580b0f807e7843c7": "9b8c096bfc7a56dfac5b6f0828fd0636",
".git/objects/2e/21b80691fc3d80655598780fce0541020e3c74": "2dbe718c76de03979da14a9e0b757c06",
".git/objects/e9/2130204bcbc53d64dcd157f2f6296ca68df249": "87f708efbb1f8e2dddfc8a8599aecb44",
".git/objects/45/97cb700dd8c98f4b973ece559b689a920d71db": "10f1ff9749f625d3f149f2d6dfd7b520",
".git/objects/68/b62b372517b4eabe5179a55091da539156338e": "d475f75f6abdae552ad49363a7ead0ed",
".git/objects/93/d973a56fd1c767b39e5bbb611dc139458d9aa2": "56cadb951ca1202e36ea1d1fe893bda3",
".git/objects/cb/d57ef944b0aef87f106368441c0c6ef5092eb9": "9452e8a96d1288a6a36de24ac5fdf1b1",
".git/objects/3c/61f7e07cee556ad946767cf62f73e2a8cfc19a": "55d749d78320716be9473d2f96119573",
".git/objects/f5/943bbadbbf35483da56dee9f98478440c4df72": "52f10589a4df16d248f7338bb5c9909a",
".git/objects/e6/44424f257c2827a510187b6af5be8b0812716f": "6e880ba8922d3c2140633c40de726b82",
".git/objects/e0/02b14eb7915a92b7f015e9937df6cf2d1c2180": "3f002d7d6d414f45660881dcd8e3a7b1",
".git/objects/e0/d09bfd8098197f78580df677c45e20020c5a4c": "2b64ab9327222613b79d8cbbc80d79e6",
".git/objects/5d/730f1c1ec1e8c20754a042cc820b3013c5fdb2": "27e83b6d27f21d6ac17f0662f1a53b0d",
".git/objects/7a/140e792718c9dd637927b254b5b42d7ab21d09": "f31bab8b0e93b58f51dd73ca430d292b",
".git/objects/22/04bf81873602b169117fb8c278af6de873cf7d": "474558c7b88d6f055b47581b02758462",
".git/objects/fd/38f9161e3908c1e887fb356c024e2faa5e43d8": "4a47f9596940f0f030480b8bd475cceb",
".git/objects/fd/eddf31e91f14f581d13bfe3e4068b2c58b5eac": "ec85b757d4f11ad17d6a30181fdb25d2",
".git/objects/d6/66f14315247a5a56155883531bdb71462a95c5": "15ca320b2221da800c984dbb5c02189e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9145e99870c3a25f86089e8d14d9609ecbcb9d": "726200b6516b9c256cb59917efc54c48",
".git/objects/d6/7a97241d1d065c80541c20dba0a9e73ecf30ba": "bae06e039a9dfa32d6f3571ed1dafc3c",
".git/objects/d6/24d7b69202995f1756549d45f95293dc1e801a": "1467ce74c17ee254c535afb8799897bd",
".git/objects/20/7f4bfce27ae1dd77283f874c28aece65285d02": "82c560f867f4f3ef97dea6ad5492b5bf",
".git/objects/aa/ee4d73d0886a736ca7acc6fa29a3668ee5698c": "97e6e535825a268bc90a24a830847558",
".git/objects/41/f3a440c91084357c4adaeed275d5322d888afa": "ff9394e4e4969da7d8faba89c6bbb568",
".git/objects/42/8428294f5c2863b4787ff8073b17e71a6664fd": "0c188b2d4b7477058b9591471c9111f3",
".git/objects/04/32a8cd4665975eed3ccf21e0878e5238eb9054": "06ee25baeb047cd6abeef5795423a53d",
".git/objects/86/b14c4828ab36ff316d2920a7850ae813a5ecc7": "5064e76ad91520f5b293ccd6b3d5f425",
".git/objects/34/27be90c6eeb9df43357df25fd399639f75a51e": "6e5d1e65bade61e78dd9c3e479671eb1",
".git/objects/e3/4b5ead6c8546bd079bd668a1e510b5e2732714": "a5da79a6e3ba97c107883c8012985715",
".git/objects/e3/56d2fcd5f8db92042353b9823e3598c7aa5049": "48a729d9d564e526d7a6b34c14f89efd",
".git/objects/cc/c5ac53be4a0b3ff9aa43b1c845d420b54f45d7": "727d1ad9d8d69d67aea420cee5bf8b22",
".git/objects/cc/a5edba0e44953e046cf04d0bc857fea10ede84": "3f4b5ef43b76dd3b231ee9c91e68f799",
".git/objects/cc/f159d59cde3db4e3039556ac86a6db875a1748": "beb6af986a8cfc6a4c7667419f43f25a",
".git/objects/48/b38cf002a9db53cf13f830b2936d68d4471646": "1f0f8e2f09e99442d099ee9745039369",
".git/objects/a9/a8c854c3b06db488cdfac36a279fb06aa3a148": "1bbb4328fdddc74b1704d9a3f2b861f6",
".git/objects/de/32ee32b3b0a964744d11ca44eddfc995ec180f": "1d1a159cff4c60d00e0b7f7da11c8a7c",
".git/objects/de/2b2510621df2200a8396823ac658554ccb5e69": "de8c702925cd1a7f559d28be9e1976a2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f9/35d7c05c47aad92faeb9ecbc5dc2fd214d5555": "9d9c1d13ed6248a1dda26069286a064a",
".git/objects/29/8032e116ad647851a8d5a66bd5bcf6fd2a6c8b": "da2cb2214d9832ec8d59a7db16538b0a",
".git/objects/1c/4e4a5e7953a5331156517dc87f868e3b23eb9c": "8dce021e1a46d3e1094eacf84d40e6bc",
".git/objects/c3/10d5a73b39fbe77354db5d5b37834e70fbc94a": "71d5b384043934a02fa8ec0a3d6e01e9",
".git/objects/40/2d51fff31db1bba7486aa8a7a43728a33fe42b": "b8430cf4da85a5e5bb08d1e7ec29d308",
".git/objects/fb/ab97b74c6abdd8b2d88a260729b73cb6b746ad": "d85d26be92282e3aade130581e0bb38f",
".git/objects/78/8a9a5da400fb1b3f56520cf0d802d49e831634": "5263743bdcfb89b79e8d0cd807891ed4",
".git/objects/1f/77357d71e73c6f3c1074c0d3dc0cb2ffd3a28a": "5bdee3c12766e3cdaba8f8cf2b38bf36",
".git/objects/5e/3b90ec3c3dbfa3d024c796cbb8b8bdd9c29aa0": "09e3821b68606f55e622c503dcff1b1e",
".git/objects/da/ac101b54291c74f3689d072ac79eb9092ba1bf": "8de9887b553d517b016e026e11c14526",
".git/objects/9c/b8e62c3669b1c96fb1a70b36784247fcdfea0d": "2a75987c486ac22101d195acf4019f9c",
".git/objects/4d/fd51de16cafe43f082f6e7e0a6dcc197fced7c": "98347562ca07105d56311ddf6a4fce3f",
".git/objects/3a/5da4cac6f6b2f791e34d0a8ce5dbee9614962c": "b689ab312f53835b6c254970766a21c0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b5/0079e6ddbc0fbe490f523a0f160fba321f40cb": "07c4d583900652533e31a68d6374109c",
".git/objects/24/a6c01228aabbe25bd5817a8f3de0a07e519512": "ee61d220a025e15b3eb068430206f035",
".git/objects/90/0ca7fc62aefac2504918e1514c452d65513200": "2470dd4e9b69f5d82d9161fe60b33fb4",
".git/objects/88/c8fff35201a847ebe30c152ca07e1a2c479521": "70b78d1c98db7a3e0f7b60c3cb87a8d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/21/3e18eda074c989520295f2427fe5e39368e438": "95ca849e69af0988bc6c3f1c1bd5b3c0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/9ca3384f5b84eff3593f36ece3c4e5cccaad8e": "c497f4de419cf836b27a18f2dcef3e25",
".git/objects/60/945552bd06b85d105d518f010895ae6484df84": "da8e38cae534d3b7f2d9fe23f3f14c8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/COMMIT_EDITMSG": "a82972ddc9c770d9b266cc192add1fdb",
".git/index": "ebfaf16e4ec3dda0dda8421205f5a9a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
"flutter_bootstrap.js": "057b333dce2c561f7960085d5ad3fbc1",
"flutter.js": "1e28bc80be052b70b1e92d55bea86b2a",
"main.dart.js": "7ca5d79780228f554a0977fec6c2d682",
"README.md": "7c159a1fe592d044044a2f9c519c03a3",
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
