class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in

  def create
    @review = Review.new(review_params)
    @review[:review_id] = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])

    if !@review
      render json: ["Cannot edit this review"], status: :unprocessable_entity
    elsif @review.update(review_params)
        render :show
    else
        render json: @review.errors.full_messages, status: 422
    end
  end

    def destroy
      @review = current_user.reivews.find_by(id: params[:id])

      if @review
        @review.destroy
        render :show
      else
        render json: ["cannot delete this review"], status: 404
      end
    end

    def show
      @review = Review.find(params[:id])
      render json:@review
    end

    def index
      @reviews = Review.all
      render json: @reviews
    end

    private

    def review_params
        snake_case_params!(params[:comment])

        params.require(:review).permit(:listing_id, :reviewer_id, :comment, :cleanliness, :accuracy, :communication, :location, :check_in, :value)
    end
end
