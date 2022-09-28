class Api::ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)
        @reservation[:user_id] = current_user.id

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end


    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        

        if @reservation
            @reservation.destroy
            render :show
        else
            render json: ['cannot delete this reservation'], status: 404
        end
    end

    def update
        @reservation = current_user.reservations.find_by(id: params[:id])

        # @reservation = Reservation.find(params[:id])

        # @reservation.user_id = current_user.id

        if !@review
            render json:['cannot edit this reservation!'],
            status: :unprocessable_entity
        elsif @review.update(reservation_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        reservations = Reservation.all

        if params[:reservation_id]
            reservations = reservations.where(id: params[:reservation_id])
        end

        if params[:user_id]
            reservations = reservations.where(user_id: params[:user_id])
        end

        @reservations = reservations.includes(:listing, :user, :host)

        render :index

    end


    private
    def reservation_params
        # snake_case_params!(params[:reservation])

        params.require(:reservation).permit(:listing_id, :user_id, :num_guests, :start_date, :end_date, :payment)
    end
end
