class Reservation < ApplicationRecord
    validates :listing_id, :user_id, :num_guests, :start_date, :end_date, :payment, presence: true

    belongs_to :listing

    belongs_to :user

    has_one :host,
        through: :listing,
        source: :host 
end
