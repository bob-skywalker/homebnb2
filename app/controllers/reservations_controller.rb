class ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)
        @reservation[:user_id] = current_user.id

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def index
        @reservations = Reservation.all

        if params[:reservationId]
            reservations = reservations.where(id: params[:reservationId])
        end

        if params[:userId]
            reservations = reservations.where(user_id: params[:userId])
        end

        @reservations = reservations.includes(:listing, :user, :host)

        render :index

    end


    private
    def reservation_params
        snake_case_params!(params[:reservation])

        params.require(:reservation).permit(:listing_id, :user_id, :num_guests, :start_date, :end_date, :payment, :currency)
    end
end
