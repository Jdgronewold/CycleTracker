# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({ username: "guest", password: "password", email: "guest@gmail.com", picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_thumb,g_center,r_30,w_125/v1484542818/pexels-photo-134705_dlcitb.jpg", zipcode: 94105})
User.create({ username: "Jeff", password: "password", email: "jeff@jeff.com", zipcode: 94105, picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604407/wood-village-house-grass_cqval9.jpg" })
User.create({ username: "Roger", password: "password", email: "roger@roger.com", zipcode: 98335, picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604542/pexels-photo-29557_uvxt7q.jpg"})
User.create({ username: "Tyler", password: "password", email: "tyler@tyler.com", zipcode: 82001, picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604725/person-sport-bike-bicycle_e36rbt.jpg"})
User.create({ username: "Lucy", password: "password", email: "sierra@sierra.com", zipcode: 94070, picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604605/pexels-photo_uxnu6n.jpg"})
User.create({ username: "Ricky", password: "password", email: "ricky@ricky.com", zipcode: 90001, picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604997/pexels-photo_cyzniq.jpg"})
User.create({ username: "Sarah", password: "password", email: "sarah@sarah.com", zipcode: 90001, picture: "http://res.cloudinary.com/dggj2pmde/image/upload/c_scale,r_30,w_125/v1484604883/pexels-photo-101647_cmpbkl.jpg"})


Hike.create(title: "Burrito Search",
  description: "The search for the best burrito continues....",
  user_id: 1,
  routePath: "uaoeFvdhjV{S~@_@@_A\`@M@k@Vy@h@YZSd@KVULwFp@sNbB_JfAkEf@uJhAsH~@_PlBiGv@g\\zDeALQJUB_ALh@lI_JdAgJdACYyBg]{Fs|@sAqSg@{HhBQ|Fs@nDe@nDc@f@zHh@fI\`D_@fEg@~Dg@vDa@rJmA|C_@~C_@nIcApC[dC[lGu@dBWxDe@xGu@xDc@xAS_@qGuAaUAEFMDk@rCzDZd@x@dAVZ]DkEf@c@qHAEFMFs@@M?InA{AjA}ArAoB|DnFdAvAhAnA?NBHtAbBnG~IFHPILE|COzBKl@AdCKLI^A\`EO|Qy@nKg@bAEHvCHhCnDQPbIDhBFpDxDSvH[|Li@NAFdBJvEV|J\`A~\`@T|L{CH_DRXrLLtE_I^_I\LtELtE",
  mapPoints: "[{\"location\":{\"lat\":37.76555823017286,\"lng\":-122.43541717529297},\"stopover\":false},{\"location\":{\"lat\":37.7897092979573,\"lng\":-122.44142532348633},\"stopover\":false},{\"location\":{\"lat\":37.793778925645704,\"lng\":-122.42305755615234},\"stopover\":false},{\"location\":{\"lat\":37.77587088725018,\"lng\":-122.41928100585938},\"stopover\":false},{\"location\":{\"lat\":37.76202988573211,\"lng\":-122.420654296875},\"stopover\":false},{\"location\":{\"lat\":37.75673705347827,\"lng\":-122.42752075195312},\"stopover\":false},{\"location\":{\"lat\":37.76026565039252,\"lng\":-122.44039535522461},\"stopover\":false}]",
  distance: 6.51)

  Hike.create(title: "Ride to Mono Lake",
    description: "First century!",
    user_id: 1,
    routePath: "mtqeFxbkjVCuCHa@JYZ]PKVKE}@c@cGAOK{AzAO|G{@pFo@|H}@tIgAjQwBVM`PiBTEPQhDiDDI?o@BcCDMFGDCCYEc@Cw@DiC[]kAcB]o@}BaDGSNSDO~CuOBYI_EbI_@W}Lo@FuGV_I^sI^AUEwBMwDCiAYBiBTmBTqM|AiVvCsJlAyD`@k@iIg@gIg@wHk@wIgEf@iGn@_Gp@e@HqEl@f@lHJpBCP?H@n@LhDnAvRLpAHf@NZr@xKLtBeBTk@HmVtCyOjBoDd@`@vG",
    mapPoints: "[{\"location\":{\"lat\":38.72194763292809,\"lng\":-119.55322265625},\"stopover\":false},{\"location\":{\"lat\":38.187466178077905,\"lng\":-119.20989990234375},\"stopover\":false},{\"location\":{\"lat\":38.029703972192,\"lng\":-119.15634155273438},\"stopover\":false}]",
    distance: 100.51)

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

Friend.create({user_id: 1, friend_id: 2})
Friend.create({user_id: 1, friend_id: 3})
Friend.create({user_id: 1, friend_id: 4})
Friend.create({user_id: 1, friend_id: 5})
Friend.create({user_id: 1, friend_id: 6})
Friend.create({user_id: 1, friend_id: 7})

Friend.create({user_id: 2, friend_id: 3})
Friend.create({user_id: 2, friend_id: 4})
Friend.create({user_id: 2, friend_id: 5})
Friend.create({user_id: 2, friend_id: 6})
Friend.create({user_id: 2, friend_id: 7})

Friend.create({user_id: 3, friend_id: 4})
Friend.create({user_id: 3, friend_id: 5})
Friend.create({user_id: 3, friend_id: 6})
Friend.create({user_id: 3, friend_id: 7})
