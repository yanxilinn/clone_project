@trails.each do |trail|
    json.set! trail.id do
        json.extract! trail, :id, :t_name, :length, :latitude, :longitude, :difficulty_level, :elevation_gain, :estimated_time, :description, :contry, :city, :created_at, :updated_at
    end
end
