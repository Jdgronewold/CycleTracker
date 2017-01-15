json.extract! @workout, :name, :description, :distance, :date, :time, :power

json.routePath @workout.hike.routePath
json.mapPoints @workout.hike.mapPoints
