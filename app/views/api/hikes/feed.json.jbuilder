@sorted_activities.each do |activity|

  if activity.has_attribute?(:route_id)
    json.set! "workout_#{activity.id}" do
      json.partial! "workout.json.jbuilder", workout: activity
    end
  else
    json.set! "hike_#{activity.id}" do
      json.partial! "hike.json.jbuilder", hike: activity
    end
  end

end
