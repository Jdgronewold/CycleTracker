@hikes.each do |hike|
  json.set! hike.id do
    json.partial! 'hike', hike: hike
  end
end
