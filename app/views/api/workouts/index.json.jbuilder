@workouts.each do |workout|
  json.set! workout.id do
    json.partial! 'workout.json.jbuilder', workout: workout
  end
end
