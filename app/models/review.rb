class Review < ApplicationRecord
    validates :listing_id, :reviewer_id, :comment, presence: true

    validates :cleanliness, :accuracy, :communication, :location, :check_in, :value, presence:true, inclusion: {in:(1..5)}

    belongs_to :listing

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User

    # #AWS
    # has_one_attached :photo

end
