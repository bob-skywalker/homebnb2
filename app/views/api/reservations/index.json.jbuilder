json.reservations do
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.partial! 'reservation', reservation: reservation
        end
    end
end

@reservations.each do |reservation|
    listing = reservation.listing
    host = reservation.host

    json.listings do
        json.set! listing.id do
            json.partial! '/api/listings/listing', listing: listing
            json.host_name host.username
        end
    end
end 
