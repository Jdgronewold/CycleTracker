# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "guest", password: "password", email: "guest@gmail.com", zipcode: 94105})
User.create({username: "Jeff", password: "password", email: "jeff@jeff.com", zipcode: 94105})


Hike.create(title: "Test",
  description: "Nice 5k pedestrian path",
  user_id: 1,
  routePath: "a{teFh_`jVsDbDgC`CsGxF{P~NcLtJcFtEuAjBwHfL[l@_E~JM^k@pCs@~B{@lCETKLIFUbBIbBSdCGl@W~DG~@Yn@KEC?AA{@sBv@o@\\Q@QPeC`@DBMReCHcBTcBHGFGBEBEH?P@@G@IxAoEPk@Zc@vCmHhBoEbAeBpHeLX_@pCeC~NeMzDeD|AoAlIkHnEmDbDkCdB{@t@i@v@w@`@i@",
  mapPoints: "[{\"location\":{\"lat\":37.79528237319238,\"lng\":-122.3935317993164},\"stopover\":false},{\"location\":{\"lat\":37.80898152447637,\"lng\":-122.41254329812364},\"stopover\":false},{\"location\":{\"lat\":37.79473977809016,\"lng\":-122.39378929121813},\"stopover\":false}]",
  distance: 2.97)

Hike.create(title: "test2",
  description: "A scenic route through the park",
  user_id: 1,
  routePath: "uhpeFn{kjV@PXn@LPPHp@THVL|@Fl@DhA?p@Cn@e@|GAN_@lCWrCEdCq@pHOpAETRH\\LGJMd@c@fCeArGU`DCdA@~@?vAFhB@zCBjAL|AXbAd@bArClEb@p@h@hAj@jBL`AG|AMx@y@hD[pAs@dCc@rBElAH~Bh@zE\\dBd@tAn@xBNf@FT^vAhAfF\\bCDx@?x@EfAO`BKjACt@F`AXfBDnA?h@K`@g@xA[x@cAbCMh@Ep@?bALvC@hBG`C_@jF@jALrB\\vCt@fDhAxDVl@dAjBVt@XnAd@nFRnB\\nBRjAf@zBtA~GNr@pBtJPp@TtBt@nFLzAZ~ARzBLl@FXAFkAzAi@\\mCtAsChBiB`BAQEOxBkB|AgAvAw@dBy@`@[\\_@l@y@lAsB^{@rAmDX{@F}@VeBPeARwAp@mGTmCDcABkAGw@Ks@g@_Ce@iDY}CQuCOeDC_E`@_NCqGQaDSeCAO^@WcGMcDGWC]BeGGeBGk@Mg@Sg@a@o@Yo@Oo@Y_BQ}@Y}@CWGaAHaBRuBHo@CGP}@La@^{@jAyCZyAAe@Mc@QU@OX}@@KAQZOF?J?ASAi@OkIQwLQcKa@cW[gRAUQBK]Uq@KgAEk@[eBQcBA_@k@B?aAAKW}@_AaCQi@g@]KKOSmAiB_@_@Es@Q}@E]IY@e@E[ZMIy@S]}@sBU_@QOGIc@eBUwAMY]SWGUCgAe@OIIKA[C_@Q@UC",
  mapPoints: "[{\"location\":{\"lat\":37.77189073454407,\"lng\":-122.45447158813477},\"stopover\":false},{\"location\":{\"lat\":37.772354343171685,\"lng\":-122.46777534476678},\"stopover\":false},{\"location\":{\"lat\":37.77086173978431,\"lng\":-122.49000549316406},\"stopover\":false},{\"location\":{\"lat\":37.766655149434776,\"lng\":-122.50635623931885},\"stopover\":false},{\"location\":{\"lat\":37.766349823375414,\"lng\":-122.48369693756104},\"stopover\":false},{\"location\":{\"lat\":37.770556430834176,\"lng\":-122.45524406433105},\"stopover\":false}]",
  distance: 6.51)
