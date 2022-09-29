     json.partial! '/api/reservations/reservation', reservation: @reservation
     json.extract! @reservation.listing, :title, :street_address, :star
     # json.extract! @reservation.listing, :street_address
