json.extract! @workout, :name, :description, :distance, :date, :time, :power, :id, :user_id

json.routePath @workout.hike.routePath
json.mapPoints @workout.hike.mapPoints
json.elevation @workout.hike.elevation
json.polylines @workout.hike.polylines
json.polylineColors @workout.hike.polylineColors
