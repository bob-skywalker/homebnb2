class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null:false , index:{unique: true}
      t.string :summary, null: false
      t.string :description, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null:false
      t.float :star, null:false
      t.string :country, null: false
      t.string :region, null: false
      t.string :property_type, null: false
      t.float :lat, null:false
      t.float :lng, null:false
      t.string :currency, null: false, default: 'USD'
      t.float :price, null: false
      t.float :other_fees
      t.string :other_fees_type
      t.integer :num_beds, null:false
      t.integer :num_baths, null: false
      t.references :host, foreign_key:{to_table: :users}
      t.boolean :is_posted, null:false, default: false
      t.timestamps
    end
  end
end
