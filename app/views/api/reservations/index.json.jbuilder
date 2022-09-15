
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.partial! 'reservation', reservation: reservation
            json.photo_url reservation.listing.photo.url
            json.extract! reservation.listing , :title 
        end
    end


# @reservations.each do |reservation|
#     listing = reservation.listing
#     host = reservation.host

#     json.listings do
#         json.set! listing.id do
#             json.partial! '/api/listings/listing', listing: listing
#             json.host_name host.username
#         end
#     end
# end
