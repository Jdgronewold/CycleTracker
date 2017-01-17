json.extract! @friend, :username, :picture, :id

json.friends(current_user_friends.include?(@friend.id))

json.workouts @workouts do |workout|
  json.partial! 'workout.json.jbuilder', workout: workout
end

json.routes @routes do |route|
  json.partial! 'hike.json.jbuilder', hike: route
end
