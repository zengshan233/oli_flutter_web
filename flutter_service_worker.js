'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "609727b6285847cf2960fc3996a4c3b9",
"assets/assets/fonts/pmzdbtt.TTF": "26875b76b6ab093668e3aff79f33b485",
"assets/assets/i18n/en.json": "f16b7f5b4e938d3984c32c2e9fda4c01",
"assets/assets/i18n/zh.json": "96cd09f153dbeda986a2947d5696f53a",
"assets/assets/images/app_logo.png": "9f4d6de5705a948be8b8e4bfa848de4e",
"assets/assets/images/bxs-dislike.png": "b9f7d66f7e7b49529714c0fc4656f303",
"assets/assets/images/Check.png": "f64c553b9b667c86d8c2f0971424a89b",
"assets/assets/images/customer.png": "daf4f571f6228e9e82599eed3faae368",
"assets/assets/images/customer_s.png": "c20324f9d257b61f99a62528236456ee",
"assets/assets/images/default_avatar.jpg": "f26281467764d71ebe6c42cf36808df2",
"assets/assets/images/eye.png": "e3988d5ab3c5aaead8906abd688fc3f3",
"assets/assets/images/full.png": "1d87cc926007d62eacadf51e925cc7d8",
"assets/assets/images/hand.png": "dbc45ac71623617c6f642e6ce2bd6a84",
"assets/assets/images/heart.png": "656aaa05f6181764ba2fa10a86f470f0",
"assets/assets/images/icons/0.png": "a06c966bb40aa96bed905873e236ca01",
"assets/assets/images/icons/1.png": "ea62a854992e0963e05339af20848fdc",
"assets/assets/images/icons/2.png": "f2464840f2bb4c42e6942c23462b512f",
"assets/assets/images/icons/bear.png": "214821867c4087838d4104c743f0bb6d",
"assets/assets/images/icons/bull.png": "1b45f5039361b03cb381c2269b287732",
"assets/assets/images/icons/calendar.png": "b61f6efb821abf7afbe5de76ea8b99ae",
"assets/assets/images/icons/calendar_menu.png": "9874345c71ad2c3f8a97a3616d35cc54",
"assets/assets/images/icons/camera.png": "8116c5eea1cdb09fd20630959bcbe50f",
"assets/assets/images/icons/chevron.png": "22083945005061b2b970d891ed139d14",
"assets/assets/images/icons/close.png": "064ec74445686285ea4c670a3ad21133",
"assets/assets/images/icons/collect_menu.png": "ba4aebcac674aa0ab367223f1526eae3",
"assets/assets/images/icons/grey_arrow.png": "3b8ec05e01935148b2f6bdb4ff981f05",
"assets/assets/images/icons/heart.png": "8878e6ab57add2f1a1066148cd1b1b14",
"assets/assets/images/icons/home_tab.png": "41d637c0d90428623b2550e8204bdcdf",
"assets/assets/images/icons/left_arrow.png": "25a327299f778c8422cb908022a3c771",
"assets/assets/images/icons/menu.png": "947bc4b2168974eb6f44749e639c5912",
"assets/assets/images/icons/mine_analysis.png": "1055cc42925ece5a93b4a0c100424161",
"assets/assets/images/icons/mine_history.png": "5a1ac1723e0da7f47a83f2f02d9e02f9",
"assets/assets/images/icons/mine_like.png": "f6daa760ab138be5f1620a8881dedf71",
"assets/assets/images/icons/mine_service.png": "3d3117bbbbb7c33b30b1523f7cfe5110",
"assets/assets/images/icons/mine_setting.png": "df2ed799fae7378309af0041e57d0fa6",
"assets/assets/images/icons/mine_starred.png": "840f6f07c928a75e0dcdadf281e1dd66",
"assets/assets/images/icons/mine_subscribe.png": "60ae2f54b8d0154bb857a2297be08207",
"assets/assets/images/icons/mine_tab.png": "570be5756c8b6ac96a9f2b14e66a785b",
"assets/assets/images/icons/more.png": "da3efbc31f802584f2a3a54dd42fd21a",
"assets/assets/images/icons/news.png": "0c3636c93b156b4f8055d027675a8998",
"assets/assets/images/icons/news_tab.png": "ed286040a7889d338710cd1f1013b84a",
"assets/assets/images/icons/point.png": "59c6cfde274d756e5a8b05771cb085ae",
"assets/assets/images/icons/profile.png": "08d1d4e45cd334c280129cefec3204ed",
"assets/assets/images/icons/radius_close.png": "5e221ff2a3e55393ff2606279254ff56",
"assets/assets/images/icons/rate_off.png": "6c960b93e07a122e9c88ad6a8305fd29",
"assets/assets/images/icons/rate_on.png": "ff06fba5b07f24c519d9644c2cbabf0d",
"assets/assets/images/icons/research_tab.png": "4e70421e7a62f90081c9a539b9826b5e",
"assets/assets/images/icons/right_arrow.png": "e8150e7dde898e09faf53c5bce9e18e4",
"assets/assets/images/icons/star.png": "834e42680bb7a552aec3c285b39cfa2c",
"assets/assets/images/icons/stock_calendar.png": "9874345c71ad2c3f8a97a3616d35cc54",
"assets/assets/images/icons/stock_menu.png": "32b9b045c168f69bc25e44f09c7dc553",
"assets/assets/images/icons/stock_tab.png": "f364087b5f9b4150e000f3f95b96cce9",
"assets/assets/images/icons/stock_tab_1.png": "9f242b91e67faaced5f1ff6c58bcb353",
"assets/assets/images/icons/stock_tab_2.png": "0efda4862e876a07a7a5bfa04b7df578",
"assets/assets/images/icons/stock_tab_3.png": "45a46213abb9b367b52c7ac225db7e2a",
"assets/assets/images/icons/stock_tab_4.png": "b0486358bfb4b64444c374f1c86b1221",
"assets/assets/images/icons/stock_tab_5.png": "dfa3b956afec0654fb6c6cc6b4692d4d",
"assets/assets/images/icons/stock_us.png": "4e6d052bc134a0511924c212cdba7967",
"assets/assets/images/icons/trend.png": "fd664fec3384682d774f620efb72137e",
"assets/assets/images/icons/unlogin_profile.png": "3f86f87478cdedf5cb3836c7532bbe12",
"assets/assets/images/icon_chat_close.png": "c4db7913e222d9b02b4d513daac301c7",
"assets/assets/images/icon_edit.png": "f7b8dcf303a7bc99324647ac95818926",
"assets/assets/images/icon_nodata.png": "017c7a93e12d32a25c74b3bfd8b32d6d",
"assets/assets/images/icon_search.png": "dc4ae515c1002b2981ee37ebc4e4d473",
"assets/assets/images/icon_service.png": "58afa46754cfd70bb594c040d4119394",
"assets/assets/images/icon_shangla.png": "fbffdc2f47149bb5538bad8573214662",
"assets/assets/images/icon_share.png": "6dca5f7e1d27d6f243c14452a6af5594",
"assets/assets/images/icon_shezhi.png": "8e28a8798e5d5c51fa0b38318aa3094f",
"assets/assets/images/icon_subscribe.png": "df0efe3d0331d9a77b4953789eccd852",
"assets/assets/images/icon_supscripe.png": "72a42bb60e4a4b127cad7d5cbb4a2374",
"assets/assets/images/icon_zixun.png": "97f72106b3a40592da206b09a811758b",
"assets/assets/images/icon_zixun_s.png": "5d0b2a2ead02e14c53d3d6b5eafaf023",
"assets/assets/images/kline.png": "e7d83461eb94d33186fba29686772ee2",
"assets/assets/images/launch_new.jpg": "e53e598808b5fe0569e3281ca6c489d9",
"assets/assets/images/left_arrow.png": "a93e463f6f4ec3e00e6ecc56a848dc6a",
"assets/assets/images/like.png": "9a47e3ddd3ed3fdf187a007f04321916",
"assets/assets/images/logo.png": "657d9793ba71c20e1f0663ce465f96c3",
"assets/assets/images/picked.png": "badd0539f270943de79071f0a016e7cf",
"assets/assets/images/rank.png": "59c7362eaf704884e921c419f15bd538",
"assets/assets/images/stock_bear_rate.png": "b05ddcc00d97f6e034edec14deba865c",
"assets/assets/images/svg/0.svg": "671944e901a0e2ca74d64fe8fc30c503",
"assets/assets/images/svg/1.svg": "ab0081972259a6a36c7bde0d2db91fbc",
"assets/assets/images/svg/2.svg": "a39b3e214a90226b5c9645945e3f385e",
"assets/assets/images/svg/analyse.svg": "2b5c7f9f35139d736d08cd0fa588d8d6",
"assets/assets/images/svg/calendar.svg": "7c3304fec82421c0a2edd6c15390b762",
"assets/assets/images/svg/collect.svg": "fb6a9f96e71b802b5775434976463b5c",
"assets/assets/images/svg/commen.svg": "a39b3e214a90226b5c9645945e3f385e",
"assets/assets/images/svg/error.svg": "31dbde60f5622e38adf66724a7a28c2b",
"assets/assets/images/svg/follow.svg": "a61d8867404a2f4d16cd5a23bdc1134b",
"assets/assets/images/svg/line.svg": "a130355872189a8e7bfc2a56dbf63392",
"assets/assets/images/svg/menu.svg": "aa26847898b5f5b863ff0eee322c32fe",
"assets/assets/images/svg/news.svg": "57f652509edc330dfdadef9e64a6d9e3",
"assets/assets/images/svg/price.svg": "5464e8c48fff29b3b81580396bede057",
"assets/assets/images/svg/stock/arrowLine.svg": "ff5771eb562d036f5ed3d5a6cf2efd5c",
"assets/assets/images/svg/stock/arrowSegment.svg": "b5d7216bc9301aac0ecc95f08f076736",
"assets/assets/images/svg/stock/candle.svg": "29b2fdd504a4faeb7d8bc8067fb7c32d",
"assets/assets/images/svg/stock/crooked3.svg": "7b77d384ef31f1c12aa7d7ebfa48f580",
"assets/assets/images/svg/stock/crooked5.svg": "6e9d94ff212a2e5c4362d3ada3fd6c13",
"assets/assets/images/svg/stock/elliott3.svg": "2f1d814eb7ddb2f1fae265b9d48c9826",
"assets/assets/images/svg/stock/elliott5.svg": "605e302c3a61122f7a8d1ff443cad5af",
"assets/assets/images/svg/stock/fallingWedge.svg": "a0af283142ea343dcefc97c222840ea8",
"assets/assets/images/svg/stock/full.svg": "d01afeacf348b42ff16b2e8fc6b0213d",
"assets/assets/images/svg/stock/hidden.svg": "3d8689f26d4f73021cccd91125bdd63a",
"assets/assets/images/svg/stock/horizontalLine.svg": "aa9e8f185de1e37fc737dbb243a5dd5e",
"assets/assets/images/svg/stock/indicator.svg": "9cfff0b7162d8e4bfc4ad6381f262fdd",
"assets/assets/images/svg/stock/line.svg": "aa568b2934c9ce4e16092f508d492e46",
"assets/assets/images/svg/stock/lineSegment.svg": "f962222ee21690f4ada9482e450865dd",
"assets/assets/images/svg/stock/ohlc.svg": "b0b4c626a4215b1db36bf3542c9d9950",
"assets/assets/images/svg/stock/ray.svg": "99d00da055df86a486e811485d998d2e",
"assets/assets/images/svg/stock/reverse.svg": "a68bf6daa2d77c3ce60f47d5617ba030",
"assets/assets/images/svg/stock/risingWedge.svg": "6a266f188b749be69325fa7325dadd05",
"assets/assets/images/svg/stock/segment.svg": "3202eb415a4c012551334d46cd513474",
"assets/assets/images/svg/stock/verticalLine.svg": "7dfd3a6f3e3d524e7720290d340ed19c",
"assets/assets/images/svg/stock.svg": "aa1a126245d0debf018db22888a411ee",
"assets/assets/images/technicIcons/channel.png": "30d271d173c5f71877839205ac6ac2bc",
"assets/assets/images/technicIcons/doubleBottom.png": "cfb2de42df29cf26438cae63b72e9282",
"assets/assets/images/technicIcons/doubleTop.png": "2e23873a9e8481e2631995e123f30233",
"assets/assets/images/technicIcons/down.png": "1627e06def5d4050cebefb34537206ab",
"assets/assets/images/technicIcons/eveningStar.png": "d37676970d1f56470d784a6160ea3f54",
"assets/assets/images/technicIcons/fallingWedge.png": "9415b9d5f5c2452091d8d947adb54a87",
"assets/assets/images/technicIcons/headShoulder.png": "595410c9bbb1de366c12f08bca7fa14a",
"assets/assets/images/technicIcons/morningStar.png": "06397a6e154368413cda7fcc89a6fac1",
"assets/assets/images/technicIcons/reverse.png": "5dbd60f3323d81aa605901b92803c908",
"assets/assets/images/technicIcons/risingWedge.png": "eb85413e7a246b88f782acb1e8c5056b",
"assets/assets/images/technicIcons/symmetrical.png": "1ac0fe24f8661d2a5fab34b5d83f0ec7",
"assets/assets/images/technicIcons/threeBlackCrow.png": "f5bdee34bac96ee081d7158e359c2410",
"assets/assets/images/technicIcons/threeWhiteSoldiers.png": "4be669320ebb441d4a90c69049618f5a",
"assets/assets/images/technicIcons/up.png": "fddbf83a3d781653fa93392c12ce33e3",
"assets/assets/images/xiala.png": "1629b01211cb9ade1b47a05655f0649b",
"assets/assets/lottie/loading.json": "1b89a689976d795e488504d5b7668266",
"assets/FontManifest.json": "adfd0905bbae1f92f9d6d3b4da29ee2d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "144e003d55452e8218df213cb4420e9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_base/assets/images/filter_load.png": "6fbe3539c4047105dd29837cb04b0e16",
"assets/packages/flutter_base/assets/images/icon_nodata.png": "017c7a93e12d32a25c74b3bfd8b32d6d",
"assets/packages/flutter_base/assets/lottie/loading.json": "1b89a689976d795e488504d5b7668266",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "ab009562c726b262f996cb55447ef32a",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/rongcloud_im/assets/icons/back.png": "af6357f8f0cd84185f6a436441c7e12c",
"assets/packages/rongcloud_im/assets/icons/chat_icon_add.png": "7eaae7b3a383841002fc7e6dd2df0585",
"assets/packages/rongcloud_im/assets/icons/common_more.png": "b0963ac35599de86dc82a8ad11b953d7",
"assets/packages/rongcloud_im/assets/icons/download.png": "cfc22d255891c53cf7560a710dc832d8",
"assets/packages/rongcloud_im/assets/icons/icon_chat_back.png": "6dab7184498104809600c6d3252362a1",
"assets/packages/rongcloud_im/assets/icons/icon_chat_camera.png": "a22d00b2bb2a0d6963b009d48be11c2d",
"assets/packages/rongcloud_im/assets/icons/icon_chat_cancelsending.png": "51326b56c5d6212a4d03ccc0dc8200d8",
"assets/packages/rongcloud_im/assets/icons/icon_chat_close.png": "c4db7913e222d9b02b4d513daac301c7",
"assets/packages/rongcloud_im/assets/icons/icon_chat_delete.png": "7f8930b3ee604dd4ec6c4bcaced4b6c6",
"assets/packages/rongcloud_im/assets/icons/icon_chat_face.png": "ef1e9f3d7d4576633c600076068d0896",
"assets/packages/rongcloud_im/assets/icons/icon_chat_file.png": "b9d100596ec7c6d66dd9a94f8b0033ee",
"assets/packages/rongcloud_im/assets/icons/icon_chat_image.png": "3a418264216228ada513f8d102397e69",
"assets/packages/rongcloud_im/assets/icons/icon_chat_keyboard.png": "e63c3a138f112d630605dabc6c2b7120",
"assets/packages/rongcloud_im/assets/icons/icon_chat_map.png": "d80e36d5f2908f4ee4d810b7215a0ce1",
"assets/packages/rongcloud_im/assets/icons/icon_chat_more.png": "60b645f64a6adcacf0d6603cbdfa3e87",
"assets/packages/rongcloud_im/assets/icons/icon_chat_newmessage.png": "ac3c52c0884839c9e9cd439e7e4893fb",
"assets/packages/rongcloud_im/assets/icons/icon_chat_notice.png": "837a6c4ca1762bcf816f6b0694aca5f2",
"assets/packages/rongcloud_im/assets/icons/icon_chat_share.png": "a2a7fe39fde11fcc45d152d4ba8081db",
"assets/packages/rongcloud_im/assets/icons/icon_chat_top.png": "3d133e1c65743912a53ca91426bab84d",
"assets/packages/rongcloud_im/assets/icons/icon_chat_video.png": "6f587113da213b1e36f58019df5db56e",
"assets/packages/rongcloud_im/assets/icons/icon_chat_video_on.png": "c08331a89df10f059448512c58ca308c",
"assets/packages/rongcloud_im/assets/icons/icon_chat_video_star.png": "8e74b02513eee1db292e1b0f97e8075a",
"assets/packages/rongcloud_im/assets/icons/icon_chat_video_stop.png": "b29f96cd5af6559ae6d682d643d25a1c",
"assets/packages/rongcloud_im/assets/icons/icon_chat_voice.png": "852d861268d190b0c30d947127a160cc",
"assets/packages/rongcloud_im/assets/icons/icon_chat_voice_play.png": "93af842b11b8677b50adafb5d224a4e3",
"assets/packages/rongcloud_im/assets/icons/icon_common_delete.png": "ed3f3462c6da545e7fc31867b5d8fe84",
"assets/packages/rongcloud_im/assets/icons/icon_no_disturb.png": "0c1f26b8caa022769926c4783fcada73",
"assets/packages/rongcloud_im/assets/icons/icon_search.png": "a78284c52d5b57b929ab5f22c64ec792",
"assets/packages/rongcloud_im/assets/icons/left_arrow.png": "a93e463f6f4ec3e00e6ecc56a848dc6a",
"assets/packages/rongcloud_im/assets/icons/location.png": "d8ebf0b09aad00ad7cc9d157c220834d",
"assets/packages/rongcloud_im/assets/icons/refresh.png": "36caa8ccdcf931898ea8f65cacc98ee8",
"assets/packages/rongcloud_im/assets/images/2.0x/gift.png": "fd9cb2cf09bbf2bf2320e35c2600ab9c",
"assets/packages/rongcloud_im/assets/images/2.0x/icon_back_black.png": "8ec6d69a8a3cc9c3d2cb1169344b9396",
"assets/packages/rongcloud_im/assets/images/2.0x/icon_common_arrow_right_grey.png": "3e42b07f01991f2868fbbcd018ab102a",
"assets/packages/rongcloud_im/assets/images/2.0x/icon_common_search.png": "72bc70cbeed526602245f9a58b4d5b94",
"assets/packages/rongcloud_im/assets/images/2.0x/icon_people_add.png": "09fc78eddd5d513f847a29fe8edf8935",
"assets/packages/rongcloud_im/assets/images/2.0x/icon_people_delete.png": "da83398c7a0341592e6ebfc5010459ca",
"assets/packages/rongcloud_im/assets/images/3.0x/gift.png": "7b6096c7961e04e99970d0c9c0683eb3",
"assets/packages/rongcloud_im/assets/images/3.0x/icon_back_black.png": "45f824b83cd93e3c30cfdf6b208eb10a",
"assets/packages/rongcloud_im/assets/images/3.0x/icon_common_arrow_right_grey.png": "0c584b3abab1310f4f492eb4f931571c",
"assets/packages/rongcloud_im/assets/images/3.0x/icon_common_search.png": "51cb98e599385ab5981258f100f5369b",
"assets/packages/rongcloud_im/assets/images/3.0x/icon_people_add.png": "acc82c2d56f472d872e4ef9be72a1a7f",
"assets/packages/rongcloud_im/assets/images/3.0x/icon_people_delete.png": "8cad7bb4ed6498a3204ce36befec8c67",
"assets/packages/rongcloud_im/assets/images/burnPicture.png": "3a5289c64802e6a117e30ebdc449923c",
"assets/packages/rongcloud_im/assets/images/burnPictureForm.png": "fbdf1cdb18c801d50be6f468c5be6331",
"assets/packages/rongcloud_im/assets/images/default_portrait.png": "1ca2455128adf9b6532a39806ffa21e1",
"assets/packages/rongcloud_im/assets/images/droplet.png": "23fd0fd1d70c560d5230f3abd5b32831",
"assets/packages/rongcloud_im/assets/images/file_message_icon_apk.png": "5df365135eb40145d9b0b63a7fc1dd1d",
"assets/packages/rongcloud_im/assets/images/file_message_icon_audio.png": "e81781e33198a64392bfb65b78bea1ff",
"assets/packages/rongcloud_im/assets/images/file_message_icon_else.png": "b4ccadf551ff95f3f3179dd7fe89879f",
"assets/packages/rongcloud_im/assets/images/file_message_icon_excel.png": "c815386135589f300ea3ad10410e0302",
"assets/packages/rongcloud_im/assets/images/file_message_icon_file.png": "81dc7a8b687d5b02fe8e7609abfc1990",
"assets/packages/rongcloud_im/assets/images/file_message_icon_key.png": "1dcbd01aa23810f569f51882cb4e77dc",
"assets/packages/rongcloud_im/assets/images/file_message_icon_numbers.png": "1e970c97652c73cc50f791148e3ba369",
"assets/packages/rongcloud_im/assets/images/file_message_icon_pages.png": "fde847cc2ab8491509441988c85fd05b",
"assets/packages/rongcloud_im/assets/images/file_message_icon_pdf.png": "1366c28895d95b5d1f3a5fdf20baf82e",
"assets/packages/rongcloud_im/assets/images/file_message_icon_picture.png": "0c45cfc22eb1a435c986791f92aaa6d5",
"assets/packages/rongcloud_im/assets/images/file_message_icon_ppt.png": "aa4c8651980665389a85316d748a9df0",
"assets/packages/rongcloud_im/assets/images/file_message_icon_video.png": "a692f66bb7d928c8f871f734029e5419",
"assets/packages/rongcloud_im/assets/images/file_message_icon_word.png": "3fc54191c26dad23cc478f1a607f311d",
"assets/packages/rongcloud_im/assets/images/gift.png": "b42f5c1d9554c652fb0660a5ffa01dcc",
"assets/packages/rongcloud_im/assets/images/icon_back_black.png": "b9e3b4a65044b25c5d26ca5cc6301ff7",
"assets/packages/rongcloud_im/assets/images/icon_common_arrow_right_grey.png": "fb335cffbb4713e668a9cf3a7270dd41",
"assets/packages/rongcloud_im/assets/images/icon_common_search.png": "cca8069da40aec22d04fb79c60109d31",
"assets/packages/rongcloud_im/assets/images/icon_people_add.png": "f5a49a490e51aaf8875837db1d4bfd68",
"assets/packages/rongcloud_im/assets/images/icon_people_delete.png": "b8f15f12621ad68e504b483910fdf15b",
"assets/packages/rongcloud_im/assets/images/logo.png": "f37f4f07ad5be5a4b6ded3313e35e70f",
"assets/packages/rongcloud_im/assets/images/rc_ic_warning.png": "6bc765f4e0ead69a526e81f0ea3fd15f",
"assets/packages/rongcloud_im/assets/images/rich_content_msg_default.png": "4db77a4672b73104af2b6798c163fdd0",
"assets/packages/rongcloud_im/assets/images/sight_camera_switch.png": "579bfebcfc3cf25d692e891252bde8fc",
"assets/packages/rongcloud_im/assets/images/sight_message_icon.png": "b7025958de49657425b4c1e2a1f2e797",
"assets/packages/rongcloud_im/assets/images/sight_preview_cancel.png": "b165e3188f7ff4cdb1b444b4ff360c7f",
"assets/packages/rongcloud_im/assets/images/sight_preview_done.png": "a4c198c53bc19475dc9578d37e4e8c23",
"assets/packages/rongcloud_im/assets/images/sight_top_toolbar_close.png": "6ff9a9b020f3d864333899f21a9b80c9",
"assets/packages/rongcloud_im/assets/images/voicePlay.gif": "dd294da0a2531c5557a2fb3a83fe32c2",
"assets/packages/rongcloud_im/assets/images/voicePlayRight.gif": "c8193c46ce813b4099025517a3b41eba",
"assets/packages/rongcloud_im/assets/images/voice_icon.png": "47c4e6750f9dd2ec949a86993733e021",
"assets/packages/rongcloud_im/assets/images/voice_icon_reverse.png": "8be551dc96267391d789371733f7546a",
"assets/packages/rongcloud_im/assets/images/voice_recoder.gif": "e86081db77fa67519f8846721d061255",
"assets/packages/rongcloud_im/assets/json/combine.json": "f63282a78b7f1358244ea8e006fee2de",
"assets/packages/rongcloud_im/assets/RCFlutterConf.json": "3b2c83c57b2146f94067374286c56e4a",
"assets/packages/rongcloud_im/assets/video/full_screen_on.png": "944222ec547a76c36e202dfe677b3c2f",
"assets/packages/rongcloud_im/assets/video/icon_back.png": "0aefcb8087ddc967929d5315ef671496",
"assets/packages/rongcloud_im/assets/video/place_nodata.png": "3c315c1d7cf73dfe0f74a3eb796e0024",
"assets/packages/rongcloud_im/assets/video/player_lock.png": "385b226427a0b4f2a01efe3f090c2df6",
"assets/packages/rongcloud_im/assets/video/player_pause.png": "808f316bc7da11af99714ee13de5207b",
"assets/packages/rongcloud_im/assets/video/player_play.png": "2ce87d29c5e3a59f895e26117a3d82a6",
"assets/packages/rongcloud_im/assets/video/player_progress_img.png": "5fd0eb7965f95edb2f6c46b4665c15f2",
"assets/packages/rongcloud_im/assets/video/player_rotate.png": "5321f5c4a0f74fd82d2748dee987823c",
"assets/packages/rongcloud_im/assets/video/player_unlock.png": "5258d8db1b1f276818afb9cc622bd98b",
"assets/packages/rongcloud_im/assets/video/video_loading.png": "8e74b02513eee1db292e1b0f97e8075a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c2841ae3558af12dce230cd6b6704589",
"/": "c2841ae3558af12dce230cd6b6704589",
"main.dart.js": "2de8a1fd8618bfc0e4f51b39ef966582",
"manifest.json": "8e35f4c50b4f0b36c6903f5acde238a1",
"version.json": "76464135aef8605e4c887c44c835c60d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
