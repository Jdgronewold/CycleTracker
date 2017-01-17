json.extract! @friend, :username, :picture, :id

json.friends(current_user_friends.include?(@friend.id))

json.workouts @friend.workouts do |workout|
  json.partial! '../workouts/workout.json.jbuilder', workout: workout
end

json.routes @friend.routes do |route|
  json.partial! '../hikes/hike.json.jbuilder', hike: route
end
