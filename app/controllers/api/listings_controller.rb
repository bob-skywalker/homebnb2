class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all 
  end 

  def create 
    @listing = Listing.create!(listing_params)
    render :show
  end 

  def show 
    @listing = Listing.find(params[:id])
  end 

  private 
  def listing_params
    params.require(:listing).permit(:id, :title, :description, :street_address, :city, :state, :zip_code, :star, :country, :region, :property_type, :location, :currency, :price, :other_fees, :other_fees_type, :num_beds, :num_baths, :host_id, :is_posted)
  end 
end
