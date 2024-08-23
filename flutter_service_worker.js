'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "252609c5beb25c20d165dffa263c5e5c",
"version.json": "93b619293744d9bd04cdebb89c1e6972",
"favicon.ico": "9083a1f1affe4c3bd76f4d4cf56b413a",
"index.html": "b31f5406366df545d4bd0bc7b222e41c",
"/": "b31f5406366df545d4bd0bc7b222e41c",
"main.dart.js": "54f250e9c45d3006033b332d91ae7e63",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4a52e960da77a535d283488ff3e243bd",
"icon/favicon-16x16.png": "a80aa6cee854e0cadfca419801873095",
"icon/android-chrome-192x192.png": "c04945429f96484a1b2c7d330a5018cd",
"icon/apple-touch-icon.png": "a8bd69bc579e81f75b7f8e2d9b65468a",
"icon/android-chrome-512x512.png": "e6c7ec81cdb9a53cf1d7bd5439980aaf",
"icon/favicon-32x32.png": "9e8139ad5a9f427fe21b01d4328d8b85",
".git/config": "dfb94ef2aef526ce54efc641a4d09b4e",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/92/9a1507a6773a739a0b23fab97b9d38bbf57b1d": "1d65bcc2d1c2622acbf2ed048137c475",
".git/objects/0c/b9072a4f25b3b7c6c15f2ec5b2ceff5968ddd1": "925f11d9aa86f2fbded2640e53721cd8",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/3b/f4bd83b4d4108e7306257c30d19f04711fd5c7": "3aa798ba95c3a0f54b12927ff930f346",
".git/objects/3b/cef9706bf3c8c854e42e5bb45caa9855ae7860": "86826a9039472f47aa8f283271bac135",
".git/objects/3b/4e889cdafc42fc923b016d74268bb00ea18768": "a5ab9a1d01da792680fb35e4a8f9eb7e",
".git/objects/9e/c8ddec7eb905a0d9409c8ad2cdc89307f883f3": "3d32e5e3a0d6c3e43a13e3a94d6ca86a",
".git/objects/04/8ca6328ae4142f217d8ed428cee772c1fa1051": "9d3ea85e50beaf16c00de87e6500e0e6",
".git/objects/6a/4a5e5bcf2c38ebca9cfb71f8422e93a6618331": "7321c676333af03e6e09001b82eaaf3b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3c/48cc068adf13a64391da1101da961df42886cc": "06e29c61da844e1c6673bf6357ab2599",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/3d/5a2ac4e9e97ded65059658aee3a97d0201bbdc": "e338454bc47012aa489b98106f6918f4",
".git/objects/67/c38ba11f44073eefee92ecaeb74c0cf06f562c": "3e6e3d3681f41ca8840a8ed2e29f8ec8",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/0e/88c0df4c170f783da318f81573c4493c9c44b9": "0380218784a44e4f065c58b408c36fd8",
".git/objects/33/dc651d93934efd6d6efd1d51f6cb995ac46fcd": "a20b6d88d4f20faaf68a5cfa2678c96f",
".git/objects/05/cb5ed19199dd50d7e47808bae558b8764c201e": "b5ab77a99ef5603bddfe4b7a664aeadf",
".git/objects/9d/8effde3114817e18b4b721de09a35e849aae23": "b5c3b3b2a17a3d3822b01f9388075483",
".git/objects/9c/8032a589bc74114316de49ec7c2bddfe12425b": "eba874dee84f308820c735fd27d54510",
".git/objects/b5/39bab93d723813889a3a76e2a2f711aca88dc8": "1a3a6b6d383d050b1de6de71e4b37a20",
".git/objects/d7/a18bbd1f9e0998ea1f3bd2e836ad1f62d095c6": "d9df726658cfb73e49c7774778149f62",
".git/objects/be/3c134415440b2ccd63637d2dec19338e425eae": "11fb259e8bc9068a9bec0094329385f3",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/bd/cfb27a4fd5374021f41a0af62ea7a9e8a5e3b5": "b8c7dfc5fcdc393b11b542706847decf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/1198dc55a42db41db8b6ccf7701b3a0218aeb7": "7533d012185933816b4ae73734626bab",
".git/objects/e5/98f6b61749bd9b4e1daf7fe0664c9586cc0c79": "372cd6c254468ea8eb3e637fb5792927",
".git/objects/f3/bd0c68127f88ffa7c75b69674e2ccc85e6f2d7": "3728195740f3372aa6b2369e22755cfe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b5990b4cfe2dd4521ef5065fdce37d303568ae": "5a98a0e8301ea21457e7e6cf7fe0ea2b",
".git/objects/c7/95c45088e33152ac8081cd9a856d9841b2e6be": "314a55c31f2a3ceb1791cc30dca7b7a9",
".git/objects/ee/800de132895fdddb0d71e9cbb54a2531f5b0be": "a23a2965fb87cca1d8b129d787381e05",
".git/objects/ee/0a23f6b3a868f2a9c3f2868fdb978269a81f9f": "8a7d026ae6ab12517c8f5fdc48a23177",
".git/objects/fd/320b5f2f356ecac218f4d47f07f893b2f54283": "c7d019f03f0c18d1f1c8c29fa725540f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/40a2459628e149bc36e1acc2209fa03d828eb1": "2fa9a368b1aafac7dc2175374452ab12",
".git/objects/7c/7acc6f632b192a093a50e8c976f79201abeeb5": "656b6daf3a26d83f7d4640807490672a",
".git/objects/7c/00e57b677fbc3979b91522ca35016d29ddd5f7": "65678b5bd266e4850fff08e11057ed32",
".git/objects/7c/f79d71a205c1da65840211360282d644675efb": "324915c42d6224e83723a27a2eb59ff6",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/8f/a573d0906596523d96abb995e2b18e2a3809fc": "aaa19f0e693148f58b6b4f190bd2a229",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/eab616ac2a657f1f612da88b5c40a076bf108a": "eb6fad554e48bb295cbfddf04319c23e",
".git/objects/7e/f33fb03620f047e70cc903f4540d7c32cab661": "c8dbf8d9a8557c76e842a70abe7c87fd",
".git/objects/7e/f99d7298a1b7b6459386b35353ad6c301f02d4": "2539f8b45d94bea8a87b5df0f52e2910",
".git/objects/10/2fd05fcee135cba665245a6558fac95c7d53e5": "0233bdd77dc367a80c66d45c5f9fda20",
".git/objects/4c/363a36670b82ebc91644752011d316bfa92e3c": "81c71f642e16cce202dbce08d8d1be8e",
".git/objects/4d/4cba5de86b5fccc248c14ba7b8578fc1070e5d": "fe0c3c819dbb12ba018eaa6cde6567ef",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/81/707d6be2cbddaff103ee3dea26f703eb1840d6": "943cb9cf3dc6d43c4a525f8ec26ba9ef",
".git/objects/72/ea37aae2c94e13a1e7d1404edc741150a77c60": "990358d8e7232c3b0974691ef0e47f0d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/36/6a6c84af10925556fbef1b7f1ce41ce586cb13": "5124158272f2dc2a42fd74291c75577d",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/91/d5b23de6c4c023a941617fd6ee53fe2ded1a4f": "20b89ad853870df4c2114206173c8e20",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/dbee74d5d159649e4de157068c482dbefb60f8": "63b3c5dfc5c91e8e9d0f14fc3ab615b1",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/3bf8284f2253083ee4a627b9f1e8fac7292c22": "a2032199dd166cc4bb82f39d7263b0cd",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/06/805005ac3f261b4e5c8f19d55597434d082c3b": "b60caa98aac4b935f704b4451bed7a12",
".git/objects/99/a76415412a8dc4741ff056c495917712aea35d": "e88f1a5ea22b71653a2f44409df3d00a",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/0a/c83d36a6aefac01d28f10fba4f0a7eed2abc55": "1f464b62532db94ce85ab9c050980bd3",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/c5f1941659a53a9cf43b985e1edf04fbe4e04a": "c8ca50138050410515da575061db6602",
".git/objects/b8/12c0af1bcc1a0fa5421f39acd86646d968a6a0": "409ad7a835ccfc2dfe1d8e66238dc8ca",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/d5/90b87ceb788e8fb385d59132821a38755bb3fb": "4700e01845d949cba3247ff67dd91de2",
".git/objects/d2/501b94e60ebf3eb6f1c4fe313558529f4643d5": "d71049d6a42d0c61333fa874f566c66b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/a6/7166b311087f5520c0882a451c953dc5120fa9": "6147189845e0d3a15a18db5183a1e09f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/e1/5afddeab9f4b51a352d5ece2a1812d3b0b87b0": "393d8959b8dda549c3dbfd7e7bd39535",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/e8/ffc5c312a88db8b00695a560bc1740ff47fbd3": "206e196fa47f8ab5feb5bdf3064e4b42",
".git/objects/e9/9ef09395d3d4fc533ab5e8c9c03cd58d911f22": "673b564f576594f979702d86dfdda302",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/46/c958cb6736f0240394593d0aba81a0db4f4b22": "99e1f00b0cfa06a8fcda960aa23e852e",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2d/756682b84dd0c9bdb6c2ac9623cf8a1f4168c2": "cdbc602b0ea7105257f52e03956479a5",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/48/b55f5af60e610e30db81ba69e5a3c6a31458dc": "be7f4ef31f4921861c3ccbab605f46dd",
".git/objects/70/f76fb21f73cb7de0dce0bc2bb19bd053826eb3": "eddc6a89b1c508909635a3511d3793c6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/130ee1c055b6b66521883d520f2972e8273364": "e035cf6b17cb8ea7f5fe86b776ca08b2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/8b/0cfeff62d588c9825be222bc522e1e692ea614": "f9d012ff8a339e0121a8c76bd0600ccf",
".git/objects/7f/8dd2ed7289fa32c4986050d488b022d254c4ce": "d8e724a2c872e220bb4a80b0060f8c57",
".git/objects/7f/e32c7c436100cd85e34613c84bd31cf3a2f86e": "4c7473bfc55d890b358e326343bca696",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/14/c9a9d24266318083fcb495cf68abd5a3ac78d8": "cb4c93b3e33601941a4e2e0e21fe107b",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f66e748fb6b9e941b5354bf0b65928d3",
".git/logs/refs/heads/master": "f66e748fb6b9e941b5354bf0b65928d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/master": "474a9e2bebdca7c689fef39b352c8f06",
".git/index": "14aa3390053777aff7fcf74459a3de35",
".git/COMMIT_EDITMSG": "400b0622c336752afcaf6ddca740599b",
"assets/AssetManifest.json": "d45f77f9ca9deec6e82bc969a5560fa6",
"assets/NOTICES": "9be4ad7fefc35cb28fff9ba6beaba509",
"assets/FontManifest.json": "5751dda4b506e2f43053504450689552",
"assets/AssetManifest.bin.json": "083c5dbb9be19471b2523870c785e04a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e57eef5d9188cb9fee996b900650bd08",
"assets/fonts/MaterialIcons-Regular.otf": "0b5ab4724f5ec1377124d2e99fd1e2f8",
"assets/assets/images/no-results.png": "f9a93a59aeae7c1466881150a251f5ef",
"assets/assets/images/logo_ocwc.jpg": "a37dccc788b2e4ec6a657c9977eb1df1",
"assets/assets/images/pdf_logo.jpg": "dcc37addd69416f9ae5ddc5b49b9f312",
"assets/assets/images/card_image.png": "2d671b5f3338bb08becc6c86b0b85fdc",
"assets/assets/images/notfound.gif": "bed3faabcea0ff76e127ddcd32a975c7",
"assets/assets/images/english_flag.png": "f646ee2fb7231f6470e2677756ed2298",
"assets/assets/images/cambodia_flag.png": "15bec9f455e7b48fde646de02e2dfcc6",
"assets/assets/images/ministry_logo-removebg-preview.png": "27f6ca1fdfd39630c9d5c8340bacc199",
"assets/assets/images/background.jpg": "4c232cc61688d9bb31e4210bb54fb4a6",
"assets/assets/images/ocwc_card1.png": "68b0e647097f76dc103de5fb1e94e4c5",
"assets/assets/images/splash_logo_new.png": "3ddee920ed3c7f46195b32d3d5f263ed",
"assets/assets/images/noimage.jpg": "5f0dcfc9887cff03b5f9dcdcaa8b0d22",
"assets/assets/images/ocwc_card.png": "446207febdb8f552a373f906febc08ba",
"assets/assets/icons/visa1.png": "ca761837e2350fe7851225f048ab3977",
"assets/assets/icons/icon_white.png": "236b35f1892d0313b83be53e367b2c2a",
"assets/assets/icons/travel.png": "0d5bb4e8dcd53430e74572cc11f1601a",
"assets/assets/icons/icons8-training-50.png": "4b12a8f6e360e952f534a6af55019325",
"assets/assets/icons/airplane-around-earth.png": "4756f35beecc028fc51fd3d6269dacbc",
"assets/assets/icons/smartphone-call.png": "457bd3ba8e856b521d15ef3f1aa6bd1c",
"assets/assets/icons/visa.png": "a04d1ff99f6452521c0fd3900e5a663f",
"assets/assets/icons/id-card.png": "08eb04c0c439eb72c422f3cd47d84602",
"assets/assets/icons/calendar.png": "dcf5ecab2842d159654ef8aaa50cf54b",
"assets/assets/icons/credit-card.png": "b4ca4fc07874b2b61636718b4cbca5e8",
"assets/assets/icons/edit.png": "c85e412b6e6c4975b22eff567f0b0da4",
"assets/assets/icons/credit-card-copy.png": "eb87ee0bf7912afa37b0cc2f9058af79",
"assets/assets/icons/engineer.png": "f1cf50a08cda73f8d1da2c8408b909fd",
"assets/assets/icons/table.png": "ab1d793c2bc442620915334f02768b6b",
"assets/assets/icons/contract.png": "882db38bb9e0fefe05581a777bd69758",
"assets/assets/fonts/Battambang%2520Bold.ttf": "d181e97d6231f4cb6cacbfcc84c7dc3e",
"assets/assets/fonts/SourceSansPro-Bold.otf": "1a2a157bfd94b250884c09f1bd57a0bb",
"assets/assets/fonts/SourceSansPro-Regular.otf": "5e1d162e634a102d7da8db597825a764",
"assets/assets/fonts/KhmerOSBattambang-Regular.ttf": "a680c425b92d3705c1b96c424c4b7208",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
