json.extract! @workout, :name, :description, :distance, :date, :time, :power, :id

json.routePath @workout.hike.routePath
json.mapPoints @workout.hike.mapPoints
