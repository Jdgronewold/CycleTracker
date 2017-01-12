@sorted_activities.each do |activity|
  
  if activity.type == "hike"
    json.set! "hike_#{activity.id}" do
      json.partial! "hike", hike: activity
    end
  else
    json.set! "workout_#{activity.id}" do
      json.partial! "workout", workout: activity
    end
  end

end
