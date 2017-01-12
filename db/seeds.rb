# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "guest", password: "password", email: "guest@gmail.com", zipcode: 94105})

Hike.create({title:"Quick run", user_id: 1,
  description: "It was hard", distance: 5, mapPoints: [],
  routePath:"https://pbs.twimg.com/profile_images/610457543857442817/wUcMHzJG.jpg"})

Hike.create({title:"Long run", user_id: 1,
  description: "It was harder", distance: 20, mapPoints: [],
  routePath:"https://pbs.twimg.com/profile_images/702239267259600898/rbVMRlIC.jpg"})
