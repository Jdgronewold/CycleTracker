# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "guest", password: "password", email: "guest@gmail.com", picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_thumb,g_center,r_30,w_125/v1484542818/pexels-photo-134705_dlcitb.jpg", zipcode: 94105})
User.create({username: "Jeff", password: "password", email: "jeff@jeff.com", zipcode: 94105})


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
