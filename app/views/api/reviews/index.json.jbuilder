@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :trail_id, :rating, :review, :date, :created_at, :updated_at
    end
end