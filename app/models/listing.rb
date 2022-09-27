class Listing < ApplicationRecord
    validates :title, presence: true, uniqueness: true

    validates :description, :street_address, :city, :state, :zip_code, :star, :country, :region, :property_type, :lat, :lng, :currency, :price, :other_fees, :other_fees_type, :num_beds, :num_baths, :host_id, :is_posted, presence: true

    #AWS
    has_many_attached :photos


    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    has_many :reviews,
        foreign_key: :listing_id,
        class_name: :Review,
        dependent: :destroy

    def average_rating
        5
    end
end
