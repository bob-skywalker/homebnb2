json.extract! reservation, :id, :listing_id, :user_id, :num_guests, :start_date, :end_date, :payment

json.photo_url reservation.listing.photos.map{|photo| photo.url}
