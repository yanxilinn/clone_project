@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :trail_id, :rating, :body, :date, :created_at, :updated_at
        json.firstName review.user.first_name
        json.lastName review.user.last_name
    end
end