class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in


  def create
    @review = Review.new(review_params)
    @review[:reviewer_id] = current_user.id

    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = current_user.reviews.find_by(id: params[:id])
    # @review = Review.find(params[:id])
    # @review.user_id = current_user.id

    if !@review
      render json:["cannot edit this review"], status: :unprocessable_entity
    elsif @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

    def destroy
      @review = current_user.reviews.find_by(id: params[:id])

      if @review && @review.destroy
        render :show
      else
        render json: ["cannot delete this review"], status: 404
      end
    end

    def show
      @review = Review.find(params[:id])
    end

    def index
      reviews = Review.all

      if params[:review_id]
        reviews = reviews.where(id: params[:review_id])
      end

      if params[:listing_id]
        reviews = reviews.where(listing_id: params[:listing_id])
      end

      if params[:reviewer_id]
        reviews = reviews.where(reviewer_id: params[:reviewer_id])
      end

      @reviews = reviews.includes(:listing, :reviewer)
      render :index

    end

    private

    def review_params

        params.require(:review).permit(:listing_id, :reviewer_id, :comment, :cleanliness, :accuracy, :communication, :location, :check_in, :value)
    end
end
