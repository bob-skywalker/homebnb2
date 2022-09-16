class Api::ListingsController < ApplicationController

  def search
    query = params[:query]
    @listing = Listing.where("title ILIKE ? summary ILIKE ?", "%#{query}%", "%#{query}%" )
    if @listing.length > 0
      render :index
    else
      render :index
    end 
  end

  def index
    @listings = Listing.all
    render :index
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
    # render json: @listing
  end

  private
  def listing_params
    params.require(:listing).permit(:id, :title, :description, :street_address, :city, :state, :zip_code, :star, :country, :region, :property_type, :lat, :lng, :currency, :price, :other_fees, :other_fees_type, :num_beds, :num_baths, :host_id, :is_posted)
  end
end
