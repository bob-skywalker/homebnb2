@listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :summary, :description, :street_address, :city, :state, :zip_code, :star, :country, :region, :property_type, :lat, :lng, :currency, :price, :other_fees, :other_fees_type, :num_beds, :num_baths, :host_id, :is_posted, :created_at, :updated_at
        if listing.photo.attached?
            json.photo listing.photo.url
        else
            json.photo ""
        end
    end
end
