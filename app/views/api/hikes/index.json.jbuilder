@hikes.each do |hike|
  json.set! hike.id do
    json.partial! 'hikeIndex', hike: hike
  end
end
