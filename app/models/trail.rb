class Trail < ApplicationRecord
    validates :length, presence: true
    validates :longitude, presence: true
    validates :latitude, presence: true
    validates :difficulty_level, presence: true
    validates :elevation_gain, presence: true
    validates :estimated_time, presence: true
    validates :description, presence: true
    validates :contry, presence: true
    validates :city, presence: true
    validates :t_name, presence: true, uniqueness: true

    # belongs_to :park,
    #     primary_key: :id,
    #     foreign_key: :park_id,
    #     class_name: :Park

    # has_many :trail_tags

    # has_many :tags,
    #     through: :trail_tags,
    #     source: :tag

    # has_many :reviews

    # has_many_attached :photos, dependent: :purge_later
end
