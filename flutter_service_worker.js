'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bbd8a304c63b823fc6bb5cfbec942436",
"assets/assets/fonts/pmzdbtt.TTF": "26875b76b6ab093668e3aff79f33b485",
"assets/assets/i18n/en.json": "e043c5889e4a1d5928b4e170335ed0f3",
"assets/assets/i18n/zh.json": "b9a4aa12b8d618cd1ef308528ea22284",
"assets/assets/images/customer.png": "daf4f571f6228e9e82599eed3faae368",
"assets/assets/images/customer_s.png": "c20324f9d257b61f99a62528236456ee",
"assets/assets/images/default_avatar.jpg": "f26281467764d71ebe6c42cf36808df2",
"assets/assets/images/eye.png": "e3988d5ab3c5aaead8906abd688fc3f3",
"assets/assets/images/full.png": "1d87cc926007d62eacadf51e925cc7d8",
"assets/assets/images/icons/0.png": "5a9d3263b27d5c75d2806dcb0f08d547",
"assets/assets/images/icons/1.png": "ba177047886bf951938e22720e282c38",
"assets/assets/images/icons/2.png": "c075b762ea179105d301e1020a6a864b",
"assets/assets/images/icons/agree.png": "2dd0a1218d3d62ad208f981dbb73b9cb",
"assets/assets/images/icons/bear.png": "214821867c4087838d4104c743f0bb6d",
"assets/assets/images/icons/bull.png": "1b45f5039361b03cb381c2269b287732",
"assets/assets/images/icons/calendar.png": "b61f6efb821abf7afbe5de76ea8b99ae",
"assets/assets/images/icons/calendar_menu.png": "9874345c71ad2c3f8a97a3616d35cc54",
"assets/assets/images/icons/camera.png": "8116c5eea1cdb09fd20630959bcbe50f",
"assets/assets/images/icons/chat_icon_add.png": "2de8fc37f23de861464fef83d0ad38ab",
"assets/assets/images/icons/chevron.png": "22083945005061b2b970d891ed139d14",
"assets/assets/images/icons/circle.png": "8422d36702767eba709c85a4143746fe",
"assets/assets/images/icons/close.png": "064ec74445686285ea4c670a3ad21133",
"assets/assets/images/icons/collect_menu.png": "ba4aebcac674aa0ab367223f1526eae3",
"assets/assets/images/icons/follow.png": "e155b3c61adfe948fc41ac27b276b95e",
"assets/assets/images/icons/grey_arrow.png": "3b8ec05e01935148b2f6bdb4ff981f05",
"assets/assets/images/icons/heart.png": "8878e6ab57add2f1a1066148cd1b1b14",
"assets/assets/images/icons/home_tab.png": "3a2b9cef8923d62446dd4e3d46216e87",
"assets/assets/images/icons/icon_chat_camera.png": "a22d00b2bb2a0d6963b009d48be11c2d",
"assets/assets/images/icons/icon_chat_cancelsending.png": "51326b56c5d6212a4d03ccc0dc8200d8",
"assets/assets/images/icons/icon_chat_close.png": "c4db7913e222d9b02b4d513daac301c7",
"assets/assets/images/icons/icon_chat_face.png": "1539c7fa2e1ef6c8612a0be9b26a04ff",
"assets/assets/images/icons/icon_chat_file.png": "b9d100596ec7c6d66dd9a94f8b0033ee",
"assets/assets/images/icons/icon_chat_image.png": "3a418264216228ada513f8d102397e69",
"assets/assets/images/icons/icon_chat_keyboard.png": "e63c3a138f112d630605dabc6c2b7120",
"assets/assets/images/icons/icon_chat_more.png": "60b645f64a6adcacf0d6603cbdfa3e87",
"assets/assets/images/icons/icon_chat_video.png": "6f587113da213b1e36f58019df5db56e",
"assets/assets/images/icons/icon_chat_voice.png": "14701985a5eedadd201ed3d20821d0f1",
"assets/assets/images/icons/left_arrow.png": "25a327299f778c8422cb908022a3c771",
"assets/assets/images/icons/like.png": "ab07aa845a5287cbfe268dc8bbd1c063",
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
"assets/assets/images/icons/news_tab.png": "6845cbcdef60a3d70d4fcac0b7916229",
"assets/assets/images/icons/picked.png": "badd0539f270943de79071f0a016e7cf",
"assets/assets/images/icons/point.png": "59c6cfde274d756e5a8b05771cb085ae",
"assets/assets/images/icons/profile.png": "08d1d4e45cd334c280129cefec3204ed",
"assets/assets/images/icons/radius_close.png": "5e221ff2a3e55393ff2606279254ff56",
"assets/assets/images/icons/rate_off.png": "6c960b93e07a122e9c88ad6a8305fd29",
"assets/assets/images/icons/rate_on.png": "ff06fba5b07f24c519d9644c2cbabf0d",
"assets/assets/images/icons/research_tab.png": "f6a0b27442bdb1aff1281a4ad1346581",
"assets/assets/images/icons/right_arrow.png": "e8150e7dde898e09faf53c5bce9e18e4",
"assets/assets/images/icons/sight_camera_switch.png": "579bfebcfc3cf25d692e891252bde8fc",
"assets/assets/images/icons/sight_message_icon.png": "b7025958de49657425b4c1e2a1f2e797",
"assets/assets/images/icons/sight_preview_cancel.png": "b165e3188f7ff4cdb1b444b4ff360c7f",
"assets/assets/images/icons/sight_preview_done.png": "a4c198c53bc19475dc9578d37e4e8c23",
"assets/assets/images/icons/sight_top_toolbar_close.png": "6ff9a9b020f3d864333899f21a9b80c9",
"assets/assets/images/icons/star.png": "0a892f5dca6ca0c241e2fca1a2ebb598",
"assets/assets/images/icons/stock_calendar.png": "9874345c71ad2c3f8a97a3616d35cc54",
"assets/assets/images/icons/stock_menu.png": "32b9b045c168f69bc25e44f09c7dc553",
"assets/assets/images/icons/stock_tab.png": "2d9a1d8a786276e38c4f7c0cf9588dbc",
"assets/assets/images/icons/stock_tab_1.png": "9f242b91e67faaced5f1ff6c58bcb353",
"assets/assets/images/icons/stock_tab_2.png": "0efda4862e876a07a7a5bfa04b7df578",
"assets/assets/images/icons/stock_tab_3.png": "45a46213abb9b367b52c7ac225db7e2a",
"assets/assets/images/icons/stock_tab_4.png": "b0486358bfb4b64444c374f1c86b1221",
"assets/assets/images/icons/stock_tab_5.png": "dfa3b956afec0654fb6c6cc6b4692d4d",
"assets/assets/images/icons/stock_us.png": "4e6d052bc134a0511924c212cdba7967",
"assets/assets/images/icons/toTop.png": "caa7a631ad0474f29f364b8fed6f633b",
"assets/assets/images/icons/trend.png": "fd664fec3384682d774f620efb72137e",
"assets/assets/images/icons/unlogin.png": "60109c5c6da894610ad25c1d2415bf44",
"assets/assets/images/icons/unlogin_profile.png": "3f86f87478cdedf5cb3836c7532bbe12",
"assets/assets/images/icons/unpicked.png": "c7f28199d47f92e0d6851282d762bb05",
"assets/assets/images/icons/voice_recoder.gif": "e86081db77fa67519f8846721d061255",
"assets/assets/images/icons/watchlist.png": "9723999a25fe8b9c129aa8888ae008ae",
"assets/assets/images/icon_chat_close.png": "c4db7913e222d9b02b4d513daac301c7",
"assets/assets/images/icon_nodata.png": "017c7a93e12d32a25c74b3bfd8b32d6d",
"assets/assets/images/icon_search.png": "dc4ae515c1002b2981ee37ebc4e4d473",
"assets/assets/images/icon_service.png": "58afa46754cfd70bb594c040d4119394",
"assets/assets/images/launch_new.jpg": "71c0dc6e977702e3a1e6f6f70297acbe",
"assets/assets/images/left_arrow.png": "a93e463f6f4ec3e00e6ecc56a848dc6a",
"assets/assets/images/like.png": "9a47e3ddd3ed3fdf187a007f04321916",
"assets/assets/images/logo.png": "657d9793ba71c20e1f0663ce465f96c3",
"assets/assets/images/stock_bear_rate.png": "b05ddcc00d97f6e034edec14deba865c",
"assets/assets/images/svg/error.svg": "31dbde60f5622e38adf66724a7a28c2b",
"assets/assets/images/svg/loading.svg": "dab58f7e94b8399bc81f12d01fe66696",
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
"assets/assets/lottie/loading.json": "1b89a689976d795e488504d5b7668266",
"assets/FontManifest.json": "adfd0905bbae1f92f9d6d3b4da29ee2d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "06806a5bb5ba77c5d943baf3ae0c5f8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_base/assets/images/filter_load.png": "6fbe3539c4047105dd29837cb04b0e16",
"assets/packages/flutter_base/assets/images/icon_nodata.png": "017c7a93e12d32a25c74b3bfd8b32d6d",
"assets/packages/flutter_base/assets/images/loading.svg": "dab58f7e94b8399bc81f12d01fe66696",
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
"assets/packages/rongcloud_im/assets/icons/icon_chat_delete.png": "7f8930b3ee604dd4ec6c4bcaced4b6c6",
"assets/packages/rongcloud_im/assets/icons/icon_chat_face.png": "ef1e9f3d7d4576633c600076068d0896",
"assets/packages/rongcloud_im/assets/icons/icon_chat_map.png": "d80e36d5f2908f4ee4d810b7215a0ce1",
"assets/packages/rongcloud_im/assets/icons/icon_chat_video_on.png": "c08331a89df10f059448512c58ca308c",
"assets/packages/rongcloud_im/assets/icons/icon_chat_video_star.png": "8e74b02513eee1db292e1b0f97e8075a",
"assets/packages/rongcloud_im/assets/icons/icon_chat_video_stop.png": "b29f96cd5af6559ae6d682d643d25a1c",
"assets/packages/rongcloud_im/assets/icons/icon_chat_voice.png": "852d861268d190b0c30d947127a160cc",
"assets/packages/rongcloud_im/assets/icons/icon_chat_voice_play.png": "93af842b11b8677b50adafb5d224a4e3",
"assets/packages/rongcloud_im/assets/icons/icon_common_delete.png": "ed3f3462c6da545e7fc31867b5d8fe84",
"assets/packages/rongcloud_im/assets/icons/left_arrow.png": "a93e463f6f4ec3e00e6ecc56a848dc6a",
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
"assets/packages/rongcloud_im/assets/images/icon_back_black.png": "b9e3b4a65044b25c5d26ca5cc6301ff7",
"assets/packages/rongcloud_im/assets/images/icon_common_arrow_right_grey.png": "fb335cffbb4713e668a9cf3a7270dd41",
"assets/packages/rongcloud_im/assets/images/icon_common_search.png": "cca8069da40aec22d04fb79c60109d31",
"assets/packages/rongcloud_im/assets/images/icon_people_add.png": "f5a49a490e51aaf8875837db1d4bfd68",
"assets/packages/rongcloud_im/assets/images/icon_people_delete.png": "b8f15f12621ad68e504b483910fdf15b",
"assets/packages/rongcloud_im/assets/images/logo.png": "f37f4f07ad5be5a4b6ded3313e35e70f",
"assets/packages/rongcloud_im/assets/images/rc_ic_warning.png": "6bc765f4e0ead69a526e81f0ea3fd15f",
"assets/packages/rongcloud_im/assets/images/rich_content_msg_default.png": "4db77a4672b73104af2b6798c163fdd0",
"assets/packages/rongcloud_im/assets/images/voicePlay.gif": "dd294da0a2531c5557a2fb3a83fe32c2",
"assets/packages/rongcloud_im/assets/images/voicePlayRight.gif": "c8193c46ce813b4099025517a3b41eba",
"assets/packages/rongcloud_im/assets/images/voice_icon.png": "47c4e6750f9dd2ec949a86993733e021",
"assets/packages/rongcloud_im/assets/images/voice_icon_reverse.png": "8be551dc96267391d789371733f7546a",
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
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.ico": "2182e2e05573ae2def3f003de20d1379",
"icons/icon-29.png": "2ef25a3c6749e882f148a41d2750d876",
"icons/icon-60.png": "90cb0ea6d697f3cf93c9cbbdbee52dd9",
"icons/icon-83.png": "19870ac8cd94d83330d3d2c72de1163b",
"index.html": "3e13d562e4057d51df270a56def66ff6",
"/": "3e13d562e4057d51df270a56def66ff6",
"main.dart.js": "05e4929ab993b865d3da4a3375ddca1f",
"manifest.json": "90bf6fcf13f8540558c26f06dffa3017",
"version.json": "6f4356d667ee7943e1991c09bcb18ac5"
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
