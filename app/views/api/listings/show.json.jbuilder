json.extract! @listing, :id, :title, :description, :street_address, :city, :state, :zip_code, :star, :country, :region, :property_type, :lat, :lng, :currency, :price, :other_fees, :other_fees_type, :num_beds, :num_baths, :host_id, :is_posted

    if @listing.photo.attached?
        json.photo @listing.photo.url
    else
        json.photo ""
    end

    json.extract! @listing.host, :username
    json.extract! @listing.host, :email


    if @listing.host.photo.attached?
        json.profile_photo @listing.host.photo.url
    else
        json.profile_photo ""
    end
