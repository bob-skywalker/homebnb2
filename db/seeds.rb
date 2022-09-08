# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition',
      email: 'demo@user.io',
      password: 'password'
    )

    # More users
    10.times do
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      })
    end

    l1 = Listing.create!(
      title: 'Oakhurst,California',
      description: 'Minutes south of Yosemite, and 5 minutes from bass lake, lies a one of a kind retreat reflecting the invitation of the natural environment into its design.',
      street_address: '3452 Snowfine Ct',
      city: 'Oakhurst',
      state: 'CA',
      zip_code: 93644,
      country:'USA',
      region:'North America',
      lat: 31.1232,
      lng: -123.1231,
      currency: "USD",
      price: 250,
      other_fees:55,
      other_fees_type:'cleaning fee',
      num_beds: 3,
      num_baths: 2,
      host_id: 3,
      is_posted: true
    )

    l2 = Listing.create!(
      title: 'Tahoe City,California',
      description: 'Minutes south of Yosemite, and 5 minutes from bass lake, lies a one of a kind retreat reflecting the invitation of the natural environment into its design.',
      street_address: '3452 Snowfine Ct',
      city: 'Oakhurst',
      state: 'CA',
      zip_code: 93644,
      country:'USA',
      region:'North America',
      lat: 21.1232,
      lng: -123.1231,
      currency: "USD",
      price: 250,
      other_fees:55,
      other_fees_type:'cleaning fee',
      num_beds: 3,
      num_baths: 2,
      host_id: 3,
      is_posted: true
    )

    l3 = Listing.create!(
      title: 'Pacifica,California',
      description: 'Step out of the little castle, you’re 1-2 minutes away from popular sea bowl bar/entertainment center, nick’s rockaway seashore restaurant for pacifica’s most famous crab sandwich!',
      street_address: '5231 Alter St',
      city: 'Pacifica',
      state: 'CA',
      zip_code: 97644,
      country:'USA',
      region:'North America',
      lat: 31.1232,
      lng: -42.1231,
      currency: "USD",
      price: 155,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 9,
      num_baths: 3,
      host_id: 1,
      is_posted: true
    )


    puts "Done!"
  end
