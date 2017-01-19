# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({ username: "guest", password: "password", email: "guest@gmail.com",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_thumb,g_center,r_30,w_125/v1484542818/pexels-photo-134705_dlcitb.jpg",
  zipcode: "{\"lat\":47.6288591,\"lng\":-122.34569190000002}"})
  
User.create({ username: "Jeff", password: "password", email: "jeff@jeff.com",
  zipcode: "{\"lat\":47.28886749999999,\"lng\":-122.59872819999998}",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604407/wood-village-house-grass_cqval9.jpg" })

User.create({ username: "Roger", password: "password", email: "roger@roger.com",
  zipcode: "{\"lat\":40.5977756,\"lng\":-75.53931549999999}",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604542/pexels-photo-29557_uvxt7q.jpg"})

User.create({ username: "Tyler", password: "password", email: "tyler@tyler.com",
  zipcode: "{\"lat\":42.4424515,\"lng\":-87.84515270000003}",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604725/person-sport-bike-bicycle_e36rbt.jpg"})

User.create({ username: "Lucy", password: "password", email: "sierra@sierra.com",
  zipcode: "{\"lat\":37.7890183,\"lng\":-122.3915063}",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604605/pexels-photo_uxnu6n.jpg"})

User.create({ username: "Ricky", password: "password", email: "ricky@ricky.com",
  zipcode: "{\"lat\":40.75368539999999,\"lng\":-73.9991637}",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604997/pexels-photo_cyzniq.jpg"})

User.create({ username: "Sarah", password: "password", email: "sarah@sarah.com",
  zipcode: "{\"lat\":40.04065060000001,\"lng\":-105.20777980000003}",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604883/pexels-photo-101647_cmpbkl.jpg"})

User.create({ username: "Craig", password: "password", email: "craig@craig.com",
  zipcode: "{\"lat\":37.2638319,\"lng\":-122.02300400000001}",
  picture: "https://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484779574/pexels-photo-241831_xprmdo.jpg"})

Hike.create(title: "Chipotle Run",
  description: "It was worth it ",
  user_id: 1,
  routePath: "qtkeFr{ijV|@M^Ar@Nh@r@L^DTBTNACc@AQOa@a@g@YS_@OYEWBkAPm@?UEWMmBqAu@_@s@OwEo@eMqBuASg@Mw@c@{AgAo@WiA[WOk@_@s@e@[UUGc@GO@SDSJUVYr@Gn@I~@Ut@[\`@g@\\cBfA}@|@q@bAgAxCO^MNe@\\UF[Dk@Ag@MQMk@k@m@eAuBuDq@qAIYKk@CkA?eJIo@{@}BKMGQWmAWcC{@gIWeAmA_D_@oAc@_A_A}A}AwBmA}AmAeBcGcIyBwCyDoFW[uBqCqDeFuCuDaCkDiAwAqBkCqBqC}@qAcBoBgB_C[a@ISKGACsBoCGEQC}HdAuJhAoPpBqJlAyJhAuDd@g@yHzAQ|AS|AQf@xHaBPuDd@mEh@kANi@yHg@{IiAgQkBaYS{CGcAu@HaCXf@hIhVuCzDe@k@gIy@cMA_@DAJCfAwAlCqDdEwF\`DeE~IvLnH_KhFeHhEwFdFaHD@HE\`CmBf@c@v@aAfDuEp@u@\\Uz@g@ZMx@QXE`AEdCGrBIpAWtAg@vAw@n@e@t@u@nA_BF_@lGoI\\c@n@s@nAeAp@g@vAw@tBu@|A[|AQvRgAtCIzEAbGFvCEpCY|AYt@SlEeAt@KnBSpACzA@lBP\`AN\`Cr@xEjBpG~B|J~DrAv@nAx@~ApAzBtBnAjAtC\`ChGxFhJ~HdFhEhAfAvA~AnBfCXn@bAbBtAjC\`B|D|@lCd@~Af@bCb@xCl@xEh@nDd@tBl@tB~@pC~B\`GjCvGb@xA\\zAZ~AL~@RbCF|BAxI?tEFlCf@~Gd@tGLtD@~BEjBIlCMhBu@tGIl@SbBe@nEIrBA~CDhBJhBCbAF|@PbBXjBf@tC^pCJfAB|@@|@Ar@W[kAwDgAeDEEMCiCm@iASa@hDY|CeBbOMr@_@nA[\`AIRWrAELOGYIaAQiBEcFCOBw@F[P]ZUPOHU@SCYK[QSYEWC]Dy@x@_HF_AAUCe@IYMWy@_AOGE@}@e@OGEICEgB}@mD}Ag@K{@Ae@Fq@Pa@LuAj@m@\`@e@\`@q@r@eA\`BuCtF}CfG_@l@QRy@l@PjFFlBJbAHx@?\\It@Sf@ILURSLSFYDe@@B}@J}@B[AWE]GMECQ@]FMAMIMYS}@QiA?Y",
  mapPoints: "[{\"location\":{\"lat\":37.748050559413784,\"lng\":-122.44451522827148},\"stopover\":false},{\"location\":{\"lat\":37.785096782276035,\"lng\":-122.42237091064453},\"stopover\":false},{\"location\":{\"lat\":37.788352705583755,\"lng\":-122.41189956665039},\"stopover\":false},{\"location\":{\"lat\":37.781433697090115,\"lng\":-122.40520477294922},\"stopover\":false},{\"location\":{\"lat\":37.74655746554895,\"lng\":-122.44125366210938},\"stopover\":false}]",
  distance: 21.193)

Hike.create(title: "Chipotle Run",
  description: "It was worth it ",
  user_id: 3,
  routePath: "qtkeFr{ijV|@M^Ar@Nh@r@L^DTBTNACc@AQOa@a@g@YS_@OYEWBkAPm@?UEWMmBqAu@_@s@OwEo@eMqBuASg@Mw@c@{AgAo@WiA[WOk@_@s@e@[UUGc@GO@SDSJUVYr@Gn@I~@Ut@[\`@g@\\cBfA}@|@q@bAgAxCO^MNe@\\UF[Dk@Ag@MQMk@k@m@eAuBuDq@qAIYKk@CkA?eJIo@{@}BKMGQWmAWcC{@gIWeAmA_D_@oAc@_A_A}A}AwBmA}AmAeBcGcIyBwCyDoFW[uBqCqDeFuCuDaCkDiAwAqBkCqBqC}@qAcBoBgB_C[a@ISKGACsBoCGEQC}HdAuJhAoPpBqJlAyJhAuDd@g@yHzAQ|AS|AQf@xHaBPuDd@mEh@kANi@yHg@{IiAgQkBaYS{CGcAu@HaCXf@hIhVuCzDe@k@gIy@cMA_@DAJCfAwAlCqDdEwF\`DeE~IvLnH_KhFeHhEwFdFaHD@HE\`CmBf@c@v@aAfDuEp@u@\\Uz@g@ZMx@QXE`AEdCGrBIpAWtAg@vAw@n@e@t@u@nA_BF_@lGoI\\c@n@s@nAeAp@g@vAw@tBu@|A[|AQvRgAtCIzEAbGFvCEpCY|AYt@SlEeAt@KnBSpACzA@lBP\`AN\`Cr@xEjBpG~B|J~DrAv@nAx@~ApAzBtBnAjAtC\`ChGxFhJ~HdFhEhAfAvA~AnBfCXn@bAbBtAjC\`B|D|@lCd@~Af@bCb@xCl@xEh@nDd@tBl@tB~@pC~B\`GjCvGb@xA\\zAZ~AL~@RbCF|BAxI?tEFlCf@~Gd@tGLtD@~BEjBIlCMhBu@tGIl@SbBe@nEIrBA~CDhBJhBCbAF|@PbBXjBf@tC^pCJfAB|@@|@Ar@W[kAwDgAeDEEMCiCm@iASa@hDY|CeBbOMr@_@nA[\`AIRWrAELOGYIaAQiBEcFCOBw@F[P]ZUPOHU@SCYK[QSYEWC]Dy@x@_HF_AAUCe@IYMWy@_AOGE@}@e@OGEICEgB}@mD}Ag@K{@Ae@Fq@Pa@LuAj@m@\`@e@\`@q@r@eA\`BuCtF}CfG_@l@QRy@l@PjFFlBJbAHx@?\\It@Sf@ILURSLSFYDe@@B}@J}@B[AWE]GMECQ@]FMAMIMYS}@QiA?Y",
  mapPoints: "[{\"location\":{\"lat\":37.748050559413784,\"lng\":-122.44451522827148},\"stopover\":false},{\"location\":{\"lat\":37.785096782276035,\"lng\":-122.42237091064453},\"stopover\":false},{\"location\":{\"lat\":37.788352705583755,\"lng\":-122.41189956665039},\"stopover\":false},{\"location\":{\"lat\":37.781433697090115,\"lng\":-122.40520477294922},\"stopover\":false},{\"location\":{\"lat\":37.74655746554895,\"lng\":-122.44125366210938},\"stopover\":false}]",
  distance: 21.193)

Hike.create(title: "Yosemite Tour",
  description: "Beautiful ride through the valley",
  user_id: 1,
  routePath: "sqfeFb|oyUHsAj@sClB_Il@}A\`BgCx@eBjAeEj@wBJ{@LqBTcAXUF@Bc@f@_EQ_Hp@eE@}DKiHd@kCrC_KFq@EgAc@}CQ}BE{ELcBd@aBxA_F\`@kBXgBb@qEp@m@~@M\`@Q\`@eAh@cAjB}@xAeA\`@k@Pk@@m@YeDc@}C[aBOaFMk@iF}Ki@sBOoBDuBQcBk@wDo@gJs@uFmAgCY[{DqDoAgAqAmBkAuBkC_GYcAMsBJ}AFeEq@kGo@kCcAgCQcA?cAT{Aj@wBx@mDhA}Jn@{GX_Bf@yBb@_Dz@yKMmBy@gF_C_OcBeNq@mF}A_KwA_Kk@wCcAwCo@qAuDkHaEiN}AmIk@qEMuBU_Bg@{A}@_D[qBa@yAwDqIcBeCaAs@kCcAkCoAeEiCuDkCyA{AoCuDmDwFuBeCiBeBiBuBcHwK_A}B_DgGiE}HiCeE}@gAmDgDuCgBeBmAgBmBo@eAMw@LuELy@t@kB\\iAN_ADgACyBBoA\`@wBl@_DJaCJiAx@iEZiAl@uAb@iBbAkGXmAvAyBzCgD~@cBVy@J_A@m@SqCcAqI{@}G\`A{@fBoBvAqBN]^gCIs@]SaHKElAAjEZ|E~@|HbApIRpCAl@K~@Wx@_AbB{CfDwAxBYlAcAjGc@hBm@tA[hAy@hEWjEoAvG?hEUfCsAtDWjDCbBLv@n@dAfBlBdBlAtCfBlDfD|@fAhCdEhE|H~CfG~@|BbHvKhBtBhBdBtBdClDvFnCtDxAzAtDjCdEhCjCnAjCbA\`Ar@bBdCvDpI\`@xAZpB|@~Cf@zAT~ALtBj@pE|AlI\`EhNtDjHn@pAbAvCj@vCvA~J|A~Jp@lFt@fFG\`@UfBQf@aItFoAbA_ApAq@jBWlBQrASbDK|DEhBc@ng@RvEx@|LRtAjFvSRbBNtBjD|KHfCn@vDTnCLfA\`B|EXl@vAvAvBvDhBlARd@Jn@EhB]tA_AnF@hBr@jCp@bB~E~DdBjAh@x@XfBp@zJAfA[jBMj@Vr@~@M\`@QPW\`@uA|@u@dAc@z@k@~@eAPk@@m@YeDc@}C[aBOaFMk@uBqEsBkEi@sBOoBDuB}@{Go@gJs@uFDu@PUXIzA\`A~@dAz@jCx@lFjAlFz@xBrAjC\`CdE|AxFz@tBz@|Ax@~AZvAJx@BlBGpD_@tDc@zDInBBlJS|Bc@rBk@|BMfB?\`B\\zCTtBF~CEp@",
  mapPoints: "[{\"location\":{\"lat\":37.721306044876805,\"lng\":-119.68986511230469},\"stopover\":false},{\"location\":{\"lat\":37.73922729512254,\"lng\":-119.57382202148438},\"stopover\":false},{\"location\":{\"lat\":37.712886991027666,\"lng\":-119.67252731323242},\"stopover\":false}]",
  distance: 25.93)

Hike.create(title: "Yosemite Tour",
  description: "Beautiful ride through the valley",
  user_id: 2,
  routePath: "sqfeFb|oyUHsAj@sClB_Il@}A\`BgCx@eBjAeEj@wBJ{@LqBTcAXUF@Bc@f@_EQ_Hp@eE@}DKiHd@kCrC_KFq@EgAc@}CQ}BE{ELcBd@aBxA_F\`@kBXgBb@qEp@m@~@M\`@Q\`@eAh@cAjB}@xAeA\`@k@Pk@@m@YeDc@}C[aBOaFMk@iF}Ki@sBOoBDuBQcBk@wDo@gJs@uFmAgCY[{DqDoAgAqAmBkAuBkC_GYcAMsBJ}AFeEq@kGo@kCcAgCQcA?cAT{Aj@wBx@mDhA}Jn@{GX_Bf@yBb@_Dz@yKMmBy@gF_C_OcBeNq@mF}A_KwA_Kk@wCcAwCo@qAuDkHaEiN}AmIk@qEMuBU_Bg@{A}@_D[qBa@yAwDqIcBeCaAs@kCcAkCoAeEiCuDkCyA{AoCuDmDwFuBeCiBeBiBuBcHwK_A}B_DgGiE}HiCeE}@gAmDgDuCgBeBmAgBmBo@eAMw@LuELy@t@kB\\iAN_ADgACyBBoA\`@wBl@_DJaCJiAx@iEZiAl@uAb@iBbAkGXmAvAyBzCgD~@cBVy@J_A@m@SqCcAqI{@}G\`A{@fBoBvAqBN]^gCIs@]SaHKElAAjEZ|E~@|HbApIRpCAl@K~@Wx@_AbB{CfDwAxBYlAcAjGc@hBm@tA[hAy@hEWjEoAvG?hEUfCsAtDWjDCbBLv@n@dAfBlBdBlAtCfBlDfD|@fAhCdEhE|H~CfG~@|BbHvKhBtBhBdBtBdClDvFnCtDxAzAtDjCdEhCjCnAjCbA\`Ar@bBdCvDpI\`@xAZpB|@~Cf@zAT~ALtBj@pE|AlI\`EhNtDjHn@pAbAvCj@vCvA~J|A~Jp@lFt@fFG\`@UfBQf@aItFoAbA_ApAq@jBWlBQrASbDK|DEhBc@ng@RvEx@|LRtAjFvSRbBNtBjD|KHfCn@vDTnCLfA\`B|EXl@vAvAvBvDhBlARd@Jn@EhB]tA_AnF@hBr@jCp@bB~E~DdBjAh@x@XfBp@zJAfA[jBMj@Vr@~@M\`@QPW\`@uA|@u@dAc@z@k@~@eAPk@@m@YeDc@}C[aBOaFMk@uBqEsBkEi@sBOoBDuB}@{Go@gJs@uFDu@PUXIzA\`A~@dAz@jCx@lFjAlFz@xBrAjC\`CdE|AxFz@tBz@|Ax@~AZvAJx@BlBGpD_@tDc@zDInBBlJS|Bc@rBk@|BMfB?\`B\\zCTtBF~CEp@",
  mapPoints: "[{\"location\":{\"lat\":37.721306044876805,\"lng\":-119.68986511230469},\"stopover\":false},{\"location\":{\"lat\":37.73922729512254,\"lng\":-119.57382202148438},\"stopover\":false},{\"location\":{\"lat\":37.712886991027666,\"lng\":-119.67252731323242},\"stopover\":false}]",
  distance: 25.93)

Hike.create(title: "Golden Gate Park",
  description: "So much elevation gain!",
  user_id: 1,
  routePath: "id|eF|xpjVQEYF_@p@u@jCUnAEn@Hb@NZD^@v@}@vB}@~Ao@z@]FaAv@_Ad@{@Pa@?]Ee@Ki@MQ?YRv@lBf@v@\\ZZJZFj@Cn@QZUhAsBb@u@n@_AHJBBB@JBf@Sb@[\`B[\`@@b@LzBjAxAb@hALv@@\\C\`@QdA}A\\MTBTLNTDR@vB?jCVp@pA\`BTj@Af@K\\i@bAa@f@YHaC?qCF_Af@w@f@sAh@q@j@g@z@s@f@a@f@g@bAATBVf@zAL\`@@\\Mf@c@|@AVF\`@\`AdAJ^@ZGh@Yj@OLkAj@e@ZS\\Kj@a@~EWf@IJELD^VH^@NHZ\`@~@jAjBf@pAXXTVj@D\`@Ct@ApAD|@f@dCRXPJbAPn@\`@Z^LXHZJV^Zb@Fn@KrB_@t@Ut@m@t@Uj@BTXVpANl@T^\`@b@bAh@~@Zv@KXBNJd@j@H\\IlA{@fDMhCS\`@gAt@W\`@Wr@{@xDBj@r@dAjArC|@f@b@^Th@\`@pBDh@C\\]dAId@@^l@tAThA@b@M\`@w@l@SZIXa@|DUrAQ^sElHSh@Ih@D~@~CpJLv@BbBAlEk@|C@b@p@t@TZN^n@pDXlBFz@OpAu@zAQr@WjB@~@O\`A]hAe@t@Yf@c@\`@OLIPKbA]pADb@Z~@D\`AGh@O\`@u@~AGT@TJRLJP@pABNFt@h@XF~AJnABLBRJQZW\\S^gEs@cAIg@P}@|Ai@j@o@n@SZc@xAQVSLg@@UKQQm@_C_BiHGcAB_AJ}Ax@d@Z?z@}@McBAo@V}CNwAH_Bl@aC~@cEIe@OOc@Aq@Km@_@WAYJw@hA}@zAoBdC_CfBqB|@YBUMu@aBM{@EcCJwB\`@eFh@iEh@iC^kBAQTe@Ri@R}@\\yFToFCsBUsCWsAaF_RkBcHUkASgGI_ASw@Yk@_@a@m@]_DoAcAe@u@q@sAgBa@kAMu@d@OTKPQnAaCXeADqA?cCSy@QY]WcA]Y_@Ie@B_@r@}BpAyDCe@QY]KgBZm@DWEYUQi@S{@O[w@g@c@]Ic@@[LWXQT?RHbAdBr@f@XFb@Ar@UVUbBoCz@aAzByBVO\`AUh@Oj@@LDVID]COIs@\`@_FJk@R]d@[zAy@Xk@Fi@A[K_@i@k@WYGa@@WL]T_@Lg@A]Ma@g@{ACW@Uf@cA\`@g@r@g@P[T_@p@k@rAi@v@g@~@g@pCG\`C?XI\`@g@h@cAJ]@g@Uk@m@s@c@m@Wq@?kCAwBUi@UMUC]LQVs@dAa@PuA@iAMs@QoB_Aq@]c@Ma@AaBZBq@HSXm@TwALa@PMHEj@oADCB?",
  mapPoints: "[{\"location\":{\"lat\":37.832429207817746,\"lng\":-122.47953414916992},\"stopover\":false},{\"location\":{\"lat\":37.827819359934814,\"lng\":-122.51296520233154},\"stopover\":false},{\"location\":{\"lat\":37.832429207817746,\"lng\":-122.51948833465576},\"stopover\":false},{\"location\":{\"lat\":37.83188688772125,\"lng\":-122.51245021820068},\"stopover\":false},{\"location\":{\"lat\":37.83595419127664,\"lng\":-122.49717235565186},\"stopover\":false},{\"location\":{\"lat\":37.83239531292848,\"lng\":-122.48161017894745},\"stopover\":false}]",
  distance: 14.068)

Hike.create(title: "Zion National Park",
  description: "Unbelievable! Would recommend",
  user_id: 1,
  routePath: "es~aF|mtpT]a@kBcBkFeE{@g@i@UeBe@cAOqCc@_Dk@sB]eEa@UEm@YgBoAmBcAkBgAiC{A{D_Ca@[_@c@Yk@i@uAYe@[[o@e@WK}@WoAg@w@]{@i@aAw@oAoA}AyBq@_Bc@cBc@eBUm@Sc@c@u@k@u@_A}@c@YyCuAkA{@u@u@e@q@Wi@g@aBUoAUkBQgAW_Ae@eAs@aAs@o@_@S_A[WEoAG}CSaAQwAc@k@U_@SsBaAq@SaE_AiEcAaCm@yAc@cBk@gBu@uDaBcAi@Y_@KYCg@By@PiDD_Aq@Ny@R[O_CiAcA]m@Ii@BwBZ_@A]GYSY[S_@Uq@S{@s@qDSo@a@o@e@c@u@i@g@c@cCsCyA{AwAkAoH{E}A_A{BaAqC_A}Ae@YMSWa@cAYo@[e@k@o@{@wAc@iAa@yAa@kA_@}@_AgBa@Wc@Gk@BmCRa@?_@EcA[uBaAk@Mk@Ce@Be@@_@C]G]OeA_A}A{AgAs@s@Ym@Om@GyAAgAKgAYq@WeHkE{IqFwH{E{A{@{@_@}@UuAQqBEeCR{c@zDyBTcADa@Ci@O]Si@g@wAoB}DmF_AmA_AaAmAeAcAu@qAs@y@_@yAi@qImC{@e@{@s@u@u@]e@iAiBWs@c@}AQgAw@uEa@cAi@y@i@k@WQq@Yw@O]CgAJkFv@c@D_@@]Ci@OmCyA_Am@o@g@[]Wa@Wk@Qs@Ie@KiAMiAQu@a@u@_@]]QaFmBkBo@]QYSi@q@m@uAUcASwAUmC[wAq@iBs@qAq@{@_A_As@a@eFsBoAQy@?u@HaAXi@Ve@Zg@h@a@l@o@zA_AlCKh@QbAI|@E|ABrAJjAXxAf@jAb@z@XpA\`@xBJt@?XAn@Qf@WVMFyABiCFs@CiAScAMqCA_@Cc@Oa@Y{@aAgC{Cm@m@s@_@wA_@}@KqD@{@Lo@ZoApAm@r@g@x@w@rBk@zA[d@[T]H]@_@K_@]Qc@Ki@MwAIm@I]kAeBmAqAa@U_@M_@Ea@BqA\`@KLKRCR?v@",
  mapPoints: "[{\"location\":{\"lat\":37.18958720538765,\"lng\":-112.99541473388672},\"stopover\":false},{\"location\":{\"lat\":37.217069410882154,\"lng\":-112.9749870300293},\"stopover\":false},{\"location\":{\"lat\":37.22841486479838,\"lng\":-112.96468734741211},\"stopover\":false},{\"location\":{\"lat\":37.247137964702084,\"lng\":-112.95730590820312},\"stopover\":false},{\"location\":{\"lat\":37.27473580272146,\"lng\":-112.94597625732422},\"stopover\":false},{\"location\":{\"lat\":37.2847067910812,\"lng\":-112.9452896118164},\"stopover\":false}]",
  distance: 13.66)

Hike.create(title: "Zion National Park",
  description: "Unbelievable! Would recommend",
  user_id: 2,
  routePath: "es~aF|mtpT]a@kBcBkFeE{@g@i@UeBe@cAOqCc@_Dk@sB]eEa@UEm@YgBoAmBcAkBgAiC{A{D_Ca@[_@c@Yk@i@uAYe@[[o@e@WK}@WoAg@w@]{@i@aAw@oAoA}AyBq@_Bc@cBc@eBUm@Sc@c@u@k@u@_A}@c@YyCuAkA{@u@u@e@q@Wi@g@aBUoAUkBQgAW_Ae@eAs@aAs@o@_@S_A[WEoAG}CSaAQwAc@k@U_@SsBaAq@SaE_AiEcAaCm@yAc@cBk@gBu@uDaBcAi@Y_@KYCg@By@PiDD_Aq@Ny@R[O_CiAcA]m@Ii@BwBZ_@A]GYSY[S_@Uq@S{@s@qDSo@a@o@e@c@u@i@g@c@cCsCyA{AwAkAoH{E}A_A{BaAqC_A}Ae@YMSWa@cAYo@[e@k@o@{@wAc@iAa@yAa@kA_@}@_AgBa@Wc@Gk@BmCRa@?_@EcA[uBaAk@Mk@Ce@Be@@_@C]G]OeA_A}A{AgAs@s@Ym@Om@GyAAgAKgAYq@WeHkE{IqFwH{E{A{@{@_@}@UuAQqBEeCR{c@zDyBTcADa@Ci@O]Si@g@wAoB}DmF_AmA_AaAmAeAcAu@qAs@y@_@yAi@qImC{@e@{@s@u@u@]e@iAiBWs@c@}AQgAw@uEa@cAi@y@i@k@WQq@Yw@O]CgAJkFv@c@D_@@]Ci@OmCyA_Am@o@g@[]Wa@Wk@Qs@Ie@KiAMiAQu@a@u@_@]]QaFmBkBo@]QYSi@q@m@uAUcASwAUmC[wAq@iBs@qAq@{@_A_As@a@eFsBoAQy@?u@HaAXi@Ve@Zg@h@a@l@o@zA_AlCKh@QbAI|@E|ABrAJjAXxAf@jAb@z@XpA\`@xBJt@?XAn@Qf@WVMFyABiCFs@CiAScAMqCA_@Cc@Oa@Y{@aAgC{Cm@m@s@_@wA_@}@KqD@{@Lo@ZoApAm@r@g@x@w@rBk@zA[d@[T]H]@_@K_@]Qc@Ki@MwAIm@I]kAeBmAqAa@U_@M_@Ea@BqA\`@KLKRCR?v@",
  mapPoints: "[{\"location\":{\"lat\":37.18958720538765,\"lng\":-112.99541473388672},\"stopover\":false},{\"location\":{\"lat\":37.217069410882154,\"lng\":-112.9749870300293},\"stopover\":false},{\"location\":{\"lat\":37.22841486479838,\"lng\":-112.96468734741211},\"stopover\":false},{\"location\":{\"lat\":37.247137964702084,\"lng\":-112.95730590820312},\"stopover\":false},{\"location\":{\"lat\":37.27473580272146,\"lng\":-112.94597625732422},\"stopover\":false},{\"location\":{\"lat\":37.2847067910812,\"lng\":-112.9452896118164},\"stopover\":false}]",
  distance: 13.66)

Hike.create(title: "Zion National Park",
  description: "Unbelievable! Would recommend",
  user_id: 3,
  routePath: "es~aF|mtpT]a@kBcBkFeE{@g@i@UeBe@cAOqCc@_Dk@sB]eEa@UEm@YgBoAmBcAkBgAiC{A{D_Ca@[_@c@Yk@i@uAYe@[[o@e@WK}@WoAg@w@]{@i@aAw@oAoA}AyBq@_Bc@cBc@eBUm@Sc@c@u@k@u@_A}@c@YyCuAkA{@u@u@e@q@Wi@g@aBUoAUkBQgAW_Ae@eAs@aAs@o@_@S_A[WEoAG}CSaAQwAc@k@U_@SsBaAq@SaE_AiEcAaCm@yAc@cBk@gBu@uDaBcAi@Y_@KYCg@By@PiDD_Aq@Ny@R[O_CiAcA]m@Ii@BwBZ_@A]GYSY[S_@Uq@S{@s@qDSo@a@o@e@c@u@i@g@c@cCsCyA{AwAkAoH{E}A_A{BaAqC_A}Ae@YMSWa@cAYo@[e@k@o@{@wAc@iAa@yAa@kA_@}@_AgBa@Wc@Gk@BmCRa@?_@EcA[uBaAk@Mk@Ce@Be@@_@C]G]OeA_A}A{AgAs@s@Ym@Om@GyAAgAKgAYq@WeHkE{IqFwH{E{A{@{@_@}@UuAQqBEeCR{c@zDyBTcADa@Ci@O]Si@g@wAoB}DmF_AmA_AaAmAeAcAu@qAs@y@_@yAi@qImC{@e@{@s@u@u@]e@iAiBWs@c@}AQgAw@uEa@cAi@y@i@k@WQq@Yw@O]CgAJkFv@c@D_@@]Ci@OmCyA_Am@o@g@[]Wa@Wk@Qs@Ie@KiAMiAQu@a@u@_@]]QaFmBkBo@]QYSi@q@m@uAUcASwAUmC[wAq@iBs@qAq@{@_A_As@a@eFsBoAQy@?u@HaAXi@Ve@Zg@h@a@l@o@zA_AlCKh@QbAI|@E|ABrAJjAXxAf@jAb@z@XpA\`@xBJt@?XAn@Qf@WVMFyABiCFs@CiAScAMqCA_@Cc@Oa@Y{@aAgC{Cm@m@s@_@wA_@}@KqD@{@Lo@ZoApAm@r@g@x@w@rBk@zA[d@[T]H]@_@K_@]Qc@Ki@MwAIm@I]kAeBmAqAa@U_@M_@Ea@BqA\`@KLKRCR?v@",
  mapPoints: "[{\"location\":{\"lat\":37.18958720538765,\"lng\":-112.99541473388672},\"stopover\":false},{\"location\":{\"lat\":37.217069410882154,\"lng\":-112.9749870300293},\"stopover\":false},{\"location\":{\"lat\":37.22841486479838,\"lng\":-112.96468734741211},\"stopover\":false},{\"location\":{\"lat\":37.247137964702084,\"lng\":-112.95730590820312},\"stopover\":false},{\"location\":{\"lat\":37.27473580272146,\"lng\":-112.94597625732422},\"stopover\":false},{\"location\":{\"lat\":37.2847067910812,\"lng\":-112.9452896118164},\"stopover\":false}]",
  distance: 13.66)

Hike.create(title: "Sea To Sky",
  description: "BC is the best!",
  user_id: 1,
  routePath: "e|xkHzmonVcGjK{@wA@A@C?IEQM?CDqG{KoA{BsDrGgGvKwBzD_MrTsDdGgBbCcARsCeAeDY_Bj@{CnDwGvSwEdJoGdHgIrEyEv@iKSuGmA{K_FoNuLamAufA{JcHu@iDf@sApAGx@hBgC~QkBpO@lDcAvBsS@yXMaRq@S\`\\gAn\`@m@nIqAfFeIfO{GlOgD~Ou@dJqD|w@x@b_@e@|\\sB\`p@qBdMuIlS_AzH[jTRtYjErdARxSa@fSqAjY}Gdc@cCjVq@|XDze@eBtKcHnV}A~[eErKuDpCgGb@oLsB}BKqFpA}EnFmJb^mApNNfMjDn\\DhEeApHaCdEoDdB}I\`A{F[sC_CqCkG{CkEiEsAoHe@uJsJyGgHiDwAkOY}KwFwIkJsKiL{EeDmEaHqMgMuD}BoHq@}F_B}EuDkEuFeJqNcQsOoFiG_KiP{IgGeEsAwFf@qDc@aEsAqIQmDgA}DwDaHcCgEoD_H}NmEqG}GgEeFy@aFaCqGWaGg@{FAuEuB_FMaYxHqGx@eKBuE\`B}QjKcGzEmCXkE{@_JcAkG~@yGnB{DF{GkAyD{AyEBuJh@sPEgFGoF^eKiCyIVoMcA_DlBwErG_HpAgFhD_DXmHiC{Dn@_EdGuEdGcDn@mEUuJCkBp@yC~CmCxAgHqAqHl@eEr@_BhAmFhKy@|DkEnEoE|A_La@_E~@eDa@aBqBeCyCmDiAcCoAiEA_ILwBTeCvAuIhE}Dw@sIh@eO|A}AdAy@jB}B\`LsDrEmBzEeDbKaHdPuD|CwSlDkTxC}KMaJp@aPuAqSFiDmBiDoHiCmC}XmPmHyC}G{D}FaAuBiAgCoEsBoDiKkK{I{MiDoF}MaPsEgI{DyLcEqDkJ_CiJ_KcGsCuYoDkMkBeHPuEzAkGzBaJu@gJ{FgC{ByBm@_D{AeGyDgP{EgFoF}GmCuJ}GwEsBeC_C_FoImEoCijAwY{OyJ{EkBiDWoFr@_F~AiCZyDYuHs@_JtAmD[eCeAqDyEkA}Ht@wLUkFgE_KgBcA}AAuAn@kDzFqFbJiEn@mCSgBuAkCqCmC{@_HuByGaK{BqCoCqAoCo@uBHyD\`AkGdDmG?oD|@cDpA}Eu@oEXiW|LqLxEcHnH_KlDmId@cCo@mCwBgDsIgAgP}@{D}CmFmGcHsLuJq\\sQqEkF}AaLk@_YmBkLuFmKaFyK}DsYkA_EgGgKgCiKcBmIkMwQ{JoMyBcCwF}BuF{CqDeFyOq\`@}DgEeK}E_FyB}@wAb@cApAApAj@",
  mapPoints: "[{\"location\":{\"lat\":49.284827622643014,\"lng\":-123.12789916992188},\"stopover\":false},{\"location\":{\"lat\":49.673849180248546,\"lng\":-123.15673828125},\"stopover\":false}]",
  distance: 59.58)

Hike.create(title: "Sea To Sky",
  description: "BC is the best!",
  user_id: 2,
  routePath: "e|xkHzmonVcGjK{@wA@A@C?IEQM?CDqG{KoA{BsDrGgGvKwBzD_MrTsDdGgBbCcARsCeAeDY_Bj@{CnDwGvSwEdJoGdHgIrEyEv@iKSuGmA{K_FoNuLamAufA{JcHu@iDf@sApAGx@hBgC~QkBpO@lDcAvBsS@yXMaRq@S\`\\gAn\`@m@nIqAfFeIfO{GlOgD~Ou@dJqD|w@x@b_@e@|\\sB\`p@qBdMuIlS_AzH[jTRtYjErdARxSa@fSqAjY}Gdc@cCjVq@|XDze@eBtKcHnV}A~[eErKuDpCgGb@oLsB}BKqFpA}EnFmJb^mApNNfMjDn\\DhEeApHaCdEoDdB}I\`A{F[sC_CqCkG{CkEiEsAoHe@uJsJyGgHiDwAkOY}KwFwIkJsKiL{EeDmEaHqMgMuD}BoHq@}F_B}EuDkEuFeJqNcQsOoFiG_KiP{IgGeEsAwFf@qDc@aEsAqIQmDgA}DwDaHcCgEoD_H}NmEqG}GgEeFy@aFaCqGWaGg@{FAuEuB_FMaYxHqGx@eKBuE\`B}QjKcGzEmCXkE{@_JcAkG~@yGnB{DF{GkAyD{AyEBuJh@sPEgFGoF^eKiCyIVoMcA_DlBwErG_HpAgFhD_DXmHiC{Dn@_EdGuEdGcDn@mEUuJCkBp@yC~CmCxAgHqAqHl@eEr@_BhAmFhKy@|DkEnEoE|A_La@_E~@eDa@aBqBeCyCmDiAcCoAiEA_ILwBTeCvAuIhE}Dw@sIh@eO|A}AdAy@jB}B\`LsDrEmBzEeDbKaHdPuD|CwSlDkTxC}KMaJp@aPuAqSFiDmBiDoHiCmC}XmPmHyC}G{D}FaAuBiAgCoEsBoDiKkK{I{MiDoF}MaPsEgI{DyLcEqDkJ_CiJ_KcGsCuYoDkMkBeHPuEzAkGzBaJu@gJ{FgC{ByBm@_D{AeGyDgP{EgFoF}GmCuJ}GwEsBeC_C_FoImEoCijAwY{OyJ{EkBiDWoFr@_F~AiCZyDYuHs@_JtAmD[eCeAqDyEkA}Ht@wLUkFgE_KgBcA}AAuAn@kDzFqFbJiEn@mCSgBuAkCqCmC{@_HuByGaK{BqCoCqAoCo@uBHyD\`AkGdDmG?oD|@cDpA}Eu@oEXiW|LqLxEcHnH_KlDmId@cCo@mCwBgDsIgAgP}@{D}CmFmGcHsLuJq\\sQqEkF}AaLk@_YmBkLuFmKaFyK}DsYkA_EgGgKgCiKcBmIkMwQ{JoMyBcCwF}BuF{CqDeFyOq\`@}DgEeK}E_FyB}@wAb@cApAApAj@",
  mapPoints: "[{\"location\":{\"lat\":49.284827622643014,\"lng\":-123.12789916992188},\"stopover\":false},{\"location\":{\"lat\":49.673849180248546,\"lng\":-123.15673828125},\"stopover\":false}]",
  distance: 59.58)

Hike.create(title: "Sea To Sky",
  description: "BC is the best!",
  user_id: 3,
  routePath: "e|xkHzmonVcGjK{@wA@A@C?IEQM?CDqG{KoA{BsDrGgGvKwBzD_MrTsDdGgBbCcARsCeAeDY_Bj@{CnDwGvSwEdJoGdHgIrEyEv@iKSuGmA{K_FoNuLamAufA{JcHu@iDf@sApAGx@hBgC~QkBpO@lDcAvBsS@yXMaRq@S\`\\gAn\`@m@nIqAfFeIfO{GlOgD~Ou@dJqD|w@x@b_@e@|\\sB\`p@qBdMuIlS_AzH[jTRtYjErdARxSa@fSqAjY}Gdc@cCjVq@|XDze@eBtKcHnV}A~[eErKuDpCgGb@oLsB}BKqFpA}EnFmJb^mApNNfMjDn\\DhEeApHaCdEoDdB}I\`A{F[sC_CqCkG{CkEiEsAoHe@uJsJyGgHiDwAkOY}KwFwIkJsKiL{EeDmEaHqMgMuD}BoHq@}F_B}EuDkEuFeJqNcQsOoFiG_KiP{IgGeEsAwFf@qDc@aEsAqIQmDgA}DwDaHcCgEoD_H}NmEqG}GgEeFy@aFaCqGWaGg@{FAuEuB_FMaYxHqGx@eKBuE\`B}QjKcGzEmCXkE{@_JcAkG~@yGnB{DF{GkAyD{AyEBuJh@sPEgFGoF^eKiCyIVoMcA_DlBwErG_HpAgFhD_DXmHiC{Dn@_EdGuEdGcDn@mEUuJCkBp@yC~CmCxAgHqAqHl@eEr@_BhAmFhKy@|DkEnEoE|A_La@_E~@eDa@aBqBeCyCmDiAcCoAiEA_ILwBTeCvAuIhE}Dw@sIh@eO|A}AdAy@jB}B\`LsDrEmBzEeDbKaHdPuD|CwSlDkTxC}KMaJp@aPuAqSFiDmBiDoHiCmC}XmPmHyC}G{D}FaAuBiAgCoEsBoDiKkK{I{MiDoF}MaPsEgI{DyLcEqDkJ_CiJ_KcGsCuYoDkMkBeHPuEzAkGzBaJu@gJ{FgC{ByBm@_D{AeGyDgP{EgFoF}GmCuJ}GwEsBeC_C_FoImEoCijAwY{OyJ{EkBiDWoFr@_F~AiCZyDYuHs@_JtAmD[eCeAqDyEkA}Ht@wLUkFgE_KgBcA}AAuAn@kDzFqFbJiEn@mCSgBuAkCqCmC{@_HuByGaK{BqCoCqAoCo@uBHyD\`AkGdDmG?oD|@cDpA}Eu@oEXiW|LqLxEcHnH_KlDmId@cCo@mCwBgDsIgAgP}@{D}CmFmGcHsLuJq\\sQqEkF}AaLk@_YmBkLuFmKaFyK}DsYkA_EgGgKgCiKcBmIkMwQ{JoMyBcCwF}BuF{CqDeFyOq\`@}DgEeK}E_FyB}@wAb@cApAApAj@",
  mapPoints: "[{\"location\":{\"lat\":49.284827622643014,\"lng\":-123.12789916992188},\"stopover\":false},{\"location\":{\"lat\":49.673849180248546,\"lng\":-123.15673828125},\"stopover\":false}]",
  distance: 59.58)

Workout.create(name: "Golden Gate",
  description: "First time ever",
  date: DateTime.new(2016,9,1,12),
  user_id: 1,
  route_id: 3,
  notes: "It was hard"
)

Workout.create(name: "Burrito Search",
  description: "Did not burn as many calories as expected",
  date: DateTime.new(2016,12,12,12),
  user_id: 1,
  route_id: 1,
  notes: "It was successful"
)

Workout.create(name: "Burrito Search",
  description: "Did not burn as many calories as expected",
  date: DateTime.new(2016,12,12,12),
  user_id: 3,
  route_id: 1,
  notes: "It was successful"
)

Workout.create(name: "Zion",
  description: "Amazing views!",
  date: DateTime.new(2016,12,12,12),
  user_id: 1,
  route_id: 4,
  notes: "New time trial bike worked out great"
)

Workout.create(name: "Zion",
  description: "Amazing views!",
  date: DateTime.new(2016,12,12,12),
  user_id: 3,
  route_id: 4,
  notes: "New time trial bike worked out great"
)

Workout.create(name: "Golden Gate",
  description: "Getting stroger",
  date: DateTime.new(2017,1,12,18),
  user_id: 1,
  route_id: 4,
  notes: "Make sure to go during off hours"
)

Workout.create(name: "Sea to Sky",
  description: "Vancouver to Squamish",
  date: DateTime.new(2017,1,12,18),
  user_id: 1,
  route_id: 5,
  notes: "Watch out for deer!"
)

Workout.create(name: "Sea to Sky",
  description: "Vancouver to Squamish",
  date: DateTime.new(2017,1,12,18),
  user_id: 3,
  route_id: 5,
  notes: "Watch out for deer!"
)

Friend.create({user_id: 1, friend_id: 3})
Friend.create({user_id: 1, friend_id: 4})
Friend.create({user_id: 1, friend_id: 5})
Friend.create({user_id: 1, friend_id: 6})
Friend.create({user_id: 1, friend_id: 7})
Friend.create({user_id: 1, friend_id: 8})

Friend.create({user_id: 2, friend_id: 4})
Friend.create({user_id: 2, friend_id: 5})
Friend.create({user_id: 2, friend_id: 6})
Friend.create({user_id: 2, friend_id: 7})
Friend.create({user_id: 2, friend_id: 8})

Friend.create({user_id: 3, friend_id: 5})
Friend.create({user_id: 3, friend_id: 6})
Friend.create({user_id: 3, friend_id: 7})
Friend.create({user_id: 3, friend_id: 8})
