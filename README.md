# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
points_counter                                         //
├─ .eslintrc.cjs                                       //
├─ .git                                                //
│  ├─ COMMIT_EDITMSG                                   //
│  ├─ HEAD                                             //
│  ├─ ORIG_HEAD                                        //
│  ├─ config                                           //
│  ├─ description                                      //
│  ├─ hooks                                            //
│  │  ├─ applypatch-msg.sample                         //
│  │  ├─ commit-msg.sample                             //
│  │  ├─ fsmonitor-watchman.sample                     //
│  │  ├─ post-update.sample                            //
│  │  ├─ pre-applypatch.sample                         //
│  │  ├─ pre-commit.sample                             //
│  │  ├─ pre-merge-commit.sample                       //
│  │  ├─ pre-push.sample                               //
│  │  ├─ pre-rebase.sample                             //
│  │  ├─ pre-receive.sample                            //
│  │  ├─ prepare-commit-msg.sample                     //
│  │  ├─ push-to-checkout.sample                       //
│  │  └─ update.sample                                 //
│  ├─ index                                            //
│  ├─ info                                             //
│  │  └─ exclude                                       //
│  ├─ objects                                          //
│  │  ├─ 00                                            //
│  │  │  ├─ 447b211d495cdfbb7eb31a0947dfa6b6c27b84     //
│  │  │  └─ 77d83ceb44018fa091d5fba5135b4e76338d83     //
│  │  ├─ 03                                            //
│  │  │  └─ 2d0208ad994ca049511540a2b8670db5f527d9     //
│  │  ├─ 04                                            //
│  │  │  ├─ 30c25b9a7bd198864e8eb88dfdf3fea195c570     //
│  │  │  └─ bd008ba02f1aac629906accc967ff92b45c38a     //
│  │  ├─ 05                                            //
│  │  │  ├─ 7c02d2b4ae267b1abecaa08585b4f9ef76eaaf     //
│  │  │  └─ d0ac44a2c07e8f882fd85665cd6e561f30ca5c     //
│  │  ├─ 07                                            //
│  │  │  └─ 34f2ae09f8041943ad6ec076692608b092f60c     //
│  │  ├─ 0a                                            //
│  │  │  └─ 2ac57b6df87753c45d98a7aa2d54e7bd543d1a     //
│  │  ├─ 0b                                            //
│  │  │  └─ 7cbdd491a916835c83beb6de62d88e6a1b2e15     //
│  │  ├─ 0c                                            //
│  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc     //
│  │  ├─ 0f                                            //
│  │  │  └─ 4a51b7d2910d54690cf348397cd74953faa9d2     //
│  │  ├─ 11                                            //
│  │  │  └─ 6f549d42d5078ea4d9231f49f07b7844f4487b     //
│  │  ├─ 15                                            //
│  │  │  ├─ db0756bbe1ebed64efabfd16280b518011495e     //
│  │  │  └─ fff2ae212bdcb8b7f3698af9fa3705fde04c47     //
│  │  ├─ 17                                            //
│  │  │  └─ f5027225bdcb9446bc293834ba93f97f3ca74f     //
│  │  ├─ 1c                                            //
│  │  │  └─ 1f4b7c69d0e6b876227b02932497eebd9de9cb     //
│  │  ├─ 1f                                            //
│  │  │  └─ 196c43378a4c3a13920d77c303ee1027cfbc42     //
│  │  ├─ 22                                            //
│  │  │  └─ b2322d599c41932b96a0c38703e935d66f0192     //
│  │  ├─ 25                                            //
│  │  │  ├─ 2dc0948668e09f1e7f278129f3bc0e52d6f6dd     //
│  │  │  └─ 4e512bb79af52c6bb2f618d1c3c58cc8d33b85     //
│  │  ├─ 26                                            //
│  │  │  └─ b8d164f7f3a62f5dbe8c99bb3cc0313330c4d0     //
│  │  ├─ 27                                            //
│  │  │  └─ 10481dd1343880df95e5516a6f090b0488ad77     //
│  │  ├─ 28                                            //
│  │  │  └─ ed25966cdf6c9ae4346ebbc373c69978652255     //
│  │  ├─ 29                                            //
│  │  │  └─ 9caa803178f465d3294ba1efd737442f95ce66     //
│  │  ├─ 2a                                            //
│  │  │  ├─ 42180a63010616597dbdf9e96f82151218bb40     //
│  │  │  └─ 68021cfbbd205ebc19f9a93df0c06f7b3b4b07     //
│  │  ├─ 2b                                            //
│  │  │  └─ ef00601edd987771a04e0a0653e815a08d0c9f     //
│  │  ├─ 2d                                            //
│  │  │  └─ c15024d5906ed3b3135675e885ded379862a58     //
│  │  ├─ 31                                            //
│  │  │  ├─ b74f2283091d7b808c6c235252d2701c648978     //
│  │  │  └─ df06b32f15abb7f292b0f2d75fa080a19225ea     //
│  │  ├─ 32                                            //
│  │  │  └─ 2c98053fcc4bf723759ab9975c4724b7c12f90     //
│  │  ├─ 33                                            //
│  │  │  └─ 1042d3079a883c67690d6cf100c68b3898fc19     //
│  │  ├─ 34                                            //
│  │  │  ├─ 4b9fc013b3f501951eafe2e6815be95579db29     //
│  │  │  ├─ 5b69b26a6ccf93c6e96a5f447f34a1e4f0a0eb     //
│  │  │  └─ f82fcd6f375ebf91d88fbc87fd15e25813be5e     //
│  │  ├─ 35                                            //
│  │  │  ├─ 3d656f9a26a6c4b284bdadf2572b5c83fcf3e9     //
│  │  │  └─ 68a6a74711728a3bbd7cefa26cc2a1b08fd453     //
│  │  ├─ 37                                            //
│  │  │  └─ 1c03f28338110a5ccad8d28ff1e06593536c41     //
│  │  ├─ 3b                                            //
│  │  │  └─ 7996efd86d6c799a9cd54ce349837f11e4b44b     //
│  │  ├─ 3e                                            //
│  │  │  ├─ 212e1d4307a332e8511f530bc48a4ad5ed6f95     //
│  │  │  ├─ 8aecd39b0c9687e94443f412b3a26ad5c1ad6f     //
│  │  │  └─ 8d1899bb09733765ab01cc9ebafd20deddd16a     //
│  │  ├─ 40                                            //
│  │  │  └─ 50c7bf6fd9408f9e43ca4b931eb3a4b7a930f7     //
│  │  ├─ 43                                            //
│  │  │  └─ 9394bcd8eab87daf78fc9a53ee8cc47d79c28e     //
│  │  ├─ 46                                            //
│  │  │  └─ 083202831d4288181885e0206457de4bfc86b2     //
│  │  ├─ 4b                                            //
│  │  │  ├─ 6450062f7702d1267633d12f29fd93253a1eb1     //
│  │  │  └─ 7da2c371d141f68023c2a11c897afac62ac19b     //
│  │  ├─ 4c                                            //
│  │  │  └─ 0a8f9d6698ed2cd2ac91fd7a9d8bdb6945d3c9     //
│  │  ├─ 4f                                            //
│  │  │  └─ 44d32b4aad1183e06b68ae9dbb0ccb59e8525a     //
│  │  ├─ 51                                            //
│  │  │  ├─ 7cc8674a0dcbd81c9c850dd441aeadc8445ff8     //
│  │  │  └─ d521588c9b82b06e9dcfe8767bbcf3826cb6bf     //
│  │  ├─ 53                                            //
│  │  │  └─ 1d8f27057886ec7af3ac004fbb32596a755755     //
│  │  ├─ 54                                            //
│  │  │  └─ b39dd1d900e866bb91ee441d372a8924b9d87a     //
│  │  ├─ 55                                            //
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e     //
│  │  ├─ 56                                            //
│  │  │  ├─ 78d0d9a3063ea06c7758d356ec1d6fe708073b     //
│  │  │  ├─ 9aab934f5014709ba1e3cb1b56bd5a799e3511     //
│  │  │  └─ a11ae95a232db7c70be73e78fe7025f1c6ad87     //
│  │  ├─ 58                                            //
│  │  │  ├─ 4c5955194f22fb2ad2aaf5cb978d5f77c2cb42     //
│  │  │  └─ b322d837e4b82a04759499ffeefc0c3e6347be     //
│  │  ├─ 5a                                            //
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b     //
│  │  ├─ 5b                                            //
│  │  │  ├─ 77c951f8309aa63c81dfb06f31decad3ab47d0     //
│  │  │  └─ d1b411a05db1aff12ecae5479925ab3769e67f     //
│  │  ├─ 5c                                            //
│  │  │  ├─ 14c4a388377a259fbe975d8998e32bc3329abf     //
│  │  │  └─ 3786bdbe1fbe5ebce5778bad92b82d6a1a58cd     //
│  │  ├─ 5d                                            //
│  │  │  └─ 4d7251520b9b50cbc84b00863629911c07f5a8     //
│  │  ├─ 5f                                            //
│  │  │  ├─ 7f53152e467049ee4fc94416c0cec62272fcff     //
│  │  │  └─ 8000c3f316af4659834d471d9ba9b359d499fe     //
│  │  ├─ 63                                            //
│  │  │  └─ a08c75d6c39622f2fdc67c673e0886165e68c8     //
│  │  ├─ 65                                            //
│  │  │  └─ a16f36d58a9431fff4e58b6d58da6d9ee0d470     //
│  │  ├─ 67                                            //
│  │  │  └─ 71396fb668a66c0867fbb76b955552a85a1c20     //
│  │  ├─ 6c                                            //
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184     //
│  │  ├─ 6f                                            //
│  │  │  └─ 67185aaea8510bcab7c26c6372d291f3577f56     //
│  │  ├─ 71                                            //
│  │  │  └─ 0db1d054fd30f039831f848a4aa2dd88b550a3     //
│  │  ├─ 73                                            //
│  │  │  └─ bf705ec52ed3660577793e13b517660ddd5349     //
│  │  ├─ 78                                            //
│  │  │  └─ 3d72f8b859343c8671b4b1e6c22740f9ea5447     //
│  │  ├─ 7e                                            //
│  │  │  ├─ 17dfbc443ceee9246ead03c8cb2b955bf9b91c     //
│  │  │  ├─ 3473e31ac8737a6b94c4de3325759e50336b11     //
│  │  │  └─ bde332149b3ee19ce0fe77435de4b4392ea4cc     //
│  │  ├─ 81                                            //
│  │  │  └─ 99b4888006cb379f6f3271b8abf2bba4a3f7c2     //
│  │  ├─ 87                                            //
│  │  │  └─ 6da6afdb15621b47a185807a13fea2004637e3     //
│  │  ├─ 8d                                            //
│  │  │  └─ 9853c4017079db70702b6f9fcba8fe54716b28     //
│  │  ├─ 8f                                            //
│  │  │  └─ d161d19706c471d7ee309d90d2d94fd8253446     //
│  │  ├─ 92                                            //
│  │  │  └─ 9579ac18f16898b4960762288e938aea87e317     //
│  │  ├─ 94                                            //
│  │  │  ├─ c0b2fc152a086447a04f62793957235d2475be     //
│  │  │  └─ f1ed8bceb7f0567f1c22db5d33361181bc07a7     //
│  │  ├─ 97                                            //
│  │  │  └─ 9687779f631102241fbf301b5cfa17267877d6     //
│  │  ├─ 98                                            //
│  │  │  └─ 0e372a57ce1da278d95441752c266bc79f53b3     //
│  │  ├─ 9c                                            //
│  │  │  └─ d472703e17331d69cc422e1479c4029f6e93cf     //
│  │  ├─ 9e                                            //
│  │  │  └─ 0a5494c2a9d932d5871d106516966a43dbe03d     //
│  │  ├─ 9f                                            //
│  │  │  └─ bb620a885cd4d4d0e2dba541a03d4762ae63c7     //
│  │  ├─ a5                                            //
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1     //
│  │  ├─ ac                                            //
│  │  │  └─ f186d026879fd11a48951559469e81bed4d1de     //
│  │  ├─ ad                                            //
│  │  │  └─ 7d5cdd8d161229bb2618c8f939c45513c22ba4     //
│  │  ├─ ae                                            //
│  │  │  └─ 0fc709d0666f0c912dd68adfa965e63d7cd991     //
│  │  ├─ b4                                            //
│  │  │  └─ 29dac57e11c5436b6515f47c7b8fbe18428091     //
│  │  ├─ b5                                            //
│  │  │  └─ abfc21af37d7a78de1908f6facfb5527513a34     //
│  │  ├─ b9                                            //
│  │  │  └─ 4d9df74eb7b7ed913e73d9dd04353566bf9525     //
│  │  ├─ ba                                            //
│  │  │  ├─ 951df9cf0d4518566125b0c235dad85a6a9018     //
│  │  │  └─ e86b470446838dc8079177836e0548a748c481     //
│  │  ├─ bb                                            //
│  │  │  └─ c527646bbefb9f2b8918b00ad15c593da7f3ba     //
│  │  ├─ bd                                            //
│  │  │  └─ 1ad1ca2d2f081e82d1d3c2daee621b65327b29     //
│  │  ├─ c0                                            //
│  │  │  └─ 9ccbf8ec819af1e92c43a87171c30652ffa39a     //
│  │  ├─ c1                                            //
│  │  │  └─ 6b83734a019f1d8f9a2c5b76eb9c56964b12b4     //
│  │  ├─ c4                                            //
│  │  │  ├─ b86fd7f8fe0d6858a292f955d56ac9868431f7     //
│  │  │  └─ fe9de695b36a859c7be1b6220612526a819509     //
│  │  ├─ c6                                            //
│  │  │  ├─ a8173fa92234bb407b2a1a7a0a6aefb6b6e817     //
│  │  │  ├─ c76b702145798d22d9033bf996f88607d94854     //
│  │  │  └─ f4633fd7c460667e7a9c8d3847e42bcd8b9945     //
│  │  ├─ cd                                            //
│  │  │  └─ 35b297457e86100e974762c9cd5be6c243efa2     //
│  │  ├─ ce                                            //
│  │  │  ├─ 1773261d6c84fb0e12ebe64d592bb7c65b8c9f     //
│  │  │  └─ 64c954904afedced4f2ceaee9ad14927d8d592     //
│  │  ├─ d1                                            //
│  │  │  └─ a5c47062f77c67fb47151d67f637bfee8e48cb     //
│  │  ├─ d2                                            //
│  │  │  └─ a9986492ee4bc9014f2688ad13e9e02f72a7b7     //
│  │  ├─ d5                                            //
│  │  │  └─ 497c748b06dd8b111f504299ac791389b4118b     //
│  │  ├─ d6                                            //
│  │  │  └─ 1ae4fcdd6687852f9734edf8e494a720355d8e     //
│  │  ├─ d7                                            //
│  │  │  ├─ 2336f0ed85ac5498ff5664514a1ad4dd4c370c     //
│  │  │  └─ 6b18ff2e988acd0d05d5dd4f99bee2c3ce95b0     //
│  │  ├─ d8                                            //
│  │  │  └─ db55553f0758aabdd3e9b258e14ec8ac57c2ef     //
│  │  ├─ d9                                            //
│  │  │  ├─ 75b255a7bd6099e86f8db6dc044cad43256caf     //
│  │  │  └─ 8e0891b1348721a191d4a04bf92faf1074c370     //
│  │  ├─ dc                                            //
│  │  │  └─ e0d723c4bf77cb2721b8ad324eeac65f4c8435     //
│  │  ├─ e5                                            //
│  │  │  └─ 96334ca7e3cab5f7cb26621a9dd1760b26d43d     //
│  │  ├─ e7                                            //
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3     //
│  │  ├─ e9                                            //
│  │  │  └─ 61a8c0b8c790cbde29e5f8045bfc3af77f019e     //
│  │  ├─ ea                                            //
│  │  │  └─ 673abf2eb4564ec9e5ec08bc9d3cd6a84cf78b     //
│  │  ├─ eb                                            //
│  │  │  └─ 1b35c3750562ae4dced2aba088340ec18108c4     //
│  │  ├─ ec                                            //
│  │  │  └─ 00444a5f8eab1808ecc90ba5066c5686036360     //
│  │  ├─ ed                                            //
│  │  │  └─ c8a044c8d7b906cf3b533230cb57b06a848946     //
│  │  ├─ ee                                            //
│  │  │  ├─ 4689ca6f0244c7f22eb551055008bff6739a14     //
│  │  │  └─ 794e9e7235c0031b87ba3bc439d7afd1d8354f     //
│  │  ├─ f0                                            //
│  │  │  └─ 6e31ae81f3012df1b421fbe86da650a7175ee4     //
│  │  ├─ f5                                            //
│  │  │  ├─ 1f5f157db4204fc455d2c0ccb852f3c31a8755     //
│  │  │  └─ 3be40c7a54e46967701043b9a4f808d4dcf54b     //
│  │  ├─ f7                                            //
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e     //
│  │  ├─ fe                                            //
│  │  │  └─ d56d346b2ce7da09d4ec63ef069f1bec771d34     //
│  │  ├─ info                                          //
│  │  └─ pack                                          //
│  └─ refs                                             //
│     ├─ heads                                         //
│     │  ├─ dev                                        //
│     │  └─ main                                       //
│     ├─ remotes                                       //
│     │  └─ origin                                     //
│     │     ├─ dev                                     //
│     │     └─ main                                    //
│     └─ tags                                          //
├─ .gitignore                                          //
├─ README.md                                           //
├─ index.html                                          //
├─ package-lock.json                                   //
├─ package.json                                        //
├─ public                                              //
│  ├─ favicon.png                                      //
│  └─ locales                                          //
│     ├─ en                                            //
│     │  └─ translation.json                           //
│     └─ se                                            //
│        └─ translation.json                           //
├─ src                                                 //
│  ├─ App.css                                          //
│  ├─ App.jsx                                          //
│  ├─ assets                                           //
│  │  └─ components                                    //
│  │     ├─ Confetti.css                               //
│  │     ├─ Confetti.jsx                               //
│  │     ├─ CustomNumberInput.css                      //
│  │     └─ CustomNumberInput.jsx                      //
│  ├─ i18n.js                                          //
│  ├─ index.css                                        //
│  └─ main.jsx                                         //
└─ vite.config.js                                      //

```