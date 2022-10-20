class Review < ApplicationRecord
    validates :user_id, presence: true
    validates :trail_id, :rating, :date, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :body, presence: true

    belongs_to :user
    belongs_to :trail

end