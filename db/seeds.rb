# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "guest", password: "password", email: "guest@gmail.com", zipcode: 94105})
User.create({username: "Jeff", password: "password", email: "jeff@jeff.com", zipcode: 94105})


Hike.create(title: "Bike around Golden Gate",
  description: "Quick jaunt around a gorgeous park",
  user_id: 1,
  routePath: "mj|eF\`jqjVh@uAHc@Ai@Oa@@{AFMVHFDDFNO`A{@Xu@p@hAT\ITQZSVG\`@Il@w@bBS\`AUvAYl@IRCp@\`B[\`@@b@LzBjAxAb@hALv@@C\`@QdA}AMTBTLNTDR@vB?jCVp@pA\`BTj@Af@u@\`Ba@f@YHsGFwBnAsAh@q@j@g@z@s@f@a@f@g@bAATBVf@zAN~@Mf@c@|@AVF\`@\`AdALz@Gh@Yj@OLqBfAS\Kj@a@~EWf@IJ_@l@mB\`@e@\cDbD{BjDo@\_@Ba@Cu@_@gAkBUMSCWHQZEZDb@Z\z@d@NRPl@V~@TXXHb@ArB_@\FPTFd@u@dCkAjDGb@Dd@R\`@t@Zf@RVXXx@@rBCbBQ|@oAfCm@f@MF[JDXNp@Pf@dAzA~@\`A|@d@rElBf@d@Xd@Tv@Fp@RlGPfAlIf[VhAZpCDvBEpBe@jJe@|B_@v@Cd@oApGo@zFWlE?zCJbAl@~A\\R?pAi@vAy@vBkBtB_D~@}A^ST?j@\n@Nh@?Z^@Pe@~BeA|DS|C_@xD?l@NfC_@hC?j@LfBI|C[xAd@hBNVd@Th@I\`@k@f@{AdAiAd@k@Zo@\`@g@h@MbHjAl@b@Xh@PfABnFXv@\`BhBTb@|@vAf@X^BjAK\e@d@oAV[\`Bs@LGAMBcA?[ESIQc@[[UOWk@_AWOe@Cs@PoCrAUDUGKe@EwB}@{AwAyBs@[oDOYGu@i@OGqAC_@MKSAU|@uBVkAEaA[_AEc@\qAJcAX_@b@a@Xg@d@u@\iANaAA_AVkBPs@t@{ANqAa@iDo@qDO_@gAqAAc@j@}C@mECcBMw@_DqJE_AHi@Ri@rEmHP_@TsAj@wEjAiALa@Ac@UiAm@uAA_@He@\eAB]Ei@a@qBUi@c@_@}@g@kAsCs@eACk@z@yDn@uAfAu@Ra@LiCz@gDHmAI]e@k@OKYCw@J_A[cAi@a@c@U_@Om@WqAUYk@Cu@Tu@l@u@TcDj@c@G_@[Us@i@y@o@a@cAQe@e@g@eCE}@@qABu@Ea@Wk@YUqAYkBg@_AkAg@s@Kc@EOGy@d@eFLi@RWj@]bAe@PSVq@Bk@Uw@m@i@OYC]BWZm@HMHm@Ea@k@_BIq@H]n@gAh@a@^]P[Va@z@o@nAc@~@q@\Q^InDEzA?VMfAkBH_@Cm@_@o@g@m@a@i@S_A?qFYi@WKW?YN[f@o@x@]JyA?kAQm@O}BiAeA_@e@?SBeAT@e@DWTc@f@}BF]x@kBNgAFYRSP[?U[m@Sa@QQOb@i@p@i@XSKEIAU",
  mapPoints: "[{\"location\":{\"lat\":37.83364941345965,\"lng\":-122.48228073120117},\"stopover\":false},{\"location\":{\"lat\":37.83453066053906,\"lng\":-122.50485420227051},\"stopover\":false},{\"location\":{\"lat\":37.832835945274034,\"lng\":-122.52219200134277},\"stopover\":false},{\"location\":{\"lat\":37.82320922404998,\"lng\":-122.5290584564209},\"stopover\":false},{\"location\":{\"lat\":37.826938032693626,\"lng\":-122.5100040435791},\"stopover\":false},{\"location\":{\"lat\":37.831954677951316,\"lng\":-122.49515533447266},\"stopover\":false},{\"location\":{\"lat\":37.83320031234118,\"lng\":-122.48070359230042},\"stopover\":false}]",
  distance: 2.97)

Hike.create(title: "Burrito Search",
  description: "The search for the best burrito continues....",
  user_id: 1,
  routePath: "uaoeFvdhjV{S~@_@@_A\`@M@k@Vy@h@YZSd@KVULwFp@sNbB_JfAkEf@uJhAsH~@_PlBiGv@g\zDeALQJUB_ALh@lI_JdAgJdACYyBg]{Fs|@sAqSg@{HhBQ|Fs@nDe@nDc@f@zHh@fI\`D_@fEg@~Dg@vDa@rJmA|C_@~C_@nIcApC[dC[lGu@dBWxDe@xGu@xDc@xAS_@qGuAaUAEFMDk@rCzDZd@x@dAVZ]DkEf@c@qHAEFMFs@@M?InA{AjA}ArAoB|DnFdAvAhAnA?NBHtAbBnG~IFHPILE|COzBKl@AdCKLI^A\`EO|Qy@nKg@bAEHvCHhCnDQPbIDhBFpDxDSvH[|Li@NAFdBJvEV|J\`A~\`@T|L{CH_DRXrLLtE_I^_I\LtELtE",
  mapPoints: "[{\"location\":{\"lat\":37.76555823017286,\"lng\":-122.43541717529297},\"stopover\":false},{\"location\":{\"lat\":37.7897092979573,\"lng\":-122.44142532348633},\"stopover\":false},{\"location\":{\"lat\":37.793778925645704,\"lng\":-122.42305755615234},\"stopover\":false},{\"location\":{\"lat\":37.77587088725018,\"lng\":-122.41928100585938},\"stopover\":false},{\"location\":{\"lat\":37.76202988573211,\"lng\":-122.420654296875},\"stopover\":false},{\"location\":{\"lat\":37.75673705347827,\"lng\":-122.42752075195312},\"stopover\":false},{\"location\":{\"lat\":37.76026565039252,\"lng\":-122.44039535522461},\"stopover\":false}]",
  distance: 6.51)

  Hike.create(title: "Ride to Mono Lake",
    description: "First century!",
    user_id: 1,
    routePath: "uzikF|muxUts@iDl^cCvIiBbOg@fJm@lNcFfUkJ|IiA~[IpTClWWbKeBrIT|ShAnKbCtDZpFi@vE_C|BuB~FsErDeIdDuExHoErIaGnCyDfEiBhHyArDaCzOoIpDNpEgAxYeUvKaOhIqIno@eRrVwLjHiBdKHtPtCfUeCj]iSfHaDzLW\`WBlOtAvMPx\mF|Iw@vOnApIA|SwFda@wMp[cPtSmD~IkApGH\`L_@lMgDpl@kSfM_DpLo@xH{D~RkNvDaAtDHnG\`@tZ_H|V_GjOeFxPqKvh@q\`@xRyN|GwCz\`@_FfKmJxQiRtDmFdGuV\`Noh@t@eQq@w]iAeG_BwFqA{TMiJ~A{HfFiO|B}AjDMdFnBbJ\`ChOI|Lr@dHtEtEdGhChDzH|HvGfB~Ko@lV{BfLhA\`I\`A|CtAnG~FrDrSnBjBnCLvJgElG_ExBOxJhBvQhEjHdB~HuA~Cy@lDj@~MjF|GxA~DYpNmLfJiJfHb@\`LKzCbBtAnBxBz@pBSnI}Hj^wIjTuPvG{ClHy@\`c@mBlI?jGoArTcIj\`@gHdSkJbFTrE\`CpOfJjKpBhO{@~LpAhYxL|O\`BjKUdHgAnKEtQm@tEj@jG\`DjFrCtKXnDOrCoBhEoChDSpDoBlK_Il^gJjLeDnF{F\`H{FlUiHzEqA|DEnUPlMeBrFTfE|ArKdIxe@h_@dPpL\`GTzEkBvIiLxCwLy@s[uBq^yAsHuEwJq]kk@qVoVkEsE_BqES{LfHu}@pI}s@bLckAlAeNj@gUnAkpA~CqdBmCkh@PkZbGuu@xFil@zE_LrDsDrGwCxy@qYlq@_Ulm@{Hd\`@Gpc@XhrAu[\`J_F\`_@mYrPcO~Yqr@|EgJ\`KeMjjA_gAtf@ye@|AkFTcJQc\`Ex@sJjHg]qBae@p@iEtBoCvf@gLdQa@~YhEpRdEfbBt\`@v{@~R~DUjL_DjJ}EbZk^\`JeHxQ_KtLgLjJwRnVmn@vSkVdFsG|CmHjFsMzIwHxHmErJyAhDk@pGqDvM_AjRuCjXeCxJwCdl@{\vGuB~R_Cpu@gIrN\`@bK[~GqAlf@sPzFg@tGx@tIvBrHA~YwD\`IuD|g@aQlP\rQsAhV]\`IHtFjB\`ErA~FDfZ?nW~EnI\`J~DvC\`Cl@hGOzEgCfFoIrFcGrDaA|HLn_@dBlFqC~BsFV{Eo@oFmMkTsFyCcI_GaHsDuFcCiBmBeIkYY{J\`B}FfDiDhF_A\`GjBhKlOxHjT\`H~FrOtCnDvB\`J|JpG\`Bpk@{Kpz@_Q|NsFj_@iSnHsDfIkBvy@kMlNuB",
    mapPoints: "[{\"location\":{\"lat\":38.72194763292809,\"lng\":-119.55322265625},\"stopover\":false},{\"location\":{\"lat\":38.187466178077905,\"lng\":-119.20989990234375},\"stopover\":false},{\"location\":{\"lat\":38.029703972192,\"lng\":-119.15634155273438},\"stopover\":false}",
    distance: 6.51)

Workout.create(name: "mono lake",
  description: "First time ever",
  date: DateTime.new(2016,9,1,12),
  user_id: 1,
  route_id: 3,
  notes: "It was hard"
)

Workout.create(name: "burrito search",
  description: "First time ever",
  date: DateTime.new(2016,12,12,12),
  user_id: 1,
  route_id: 2,
  notes: "It was successful"
)
