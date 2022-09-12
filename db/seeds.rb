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
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition',
      email: 'demo@user.io',
      password: 'password'
    )

    tianshu = User.create!(
      username: "tianshu",
      email: 'tianshu@homebnb.com',
      password: "123456"
  )

    jeff = User.create!(
      username: "jeff",
      email: 'jeff@homebnb.com',
      password: "123456"
  )

    taowei = User.create!(
      username: "taowei",
      email: 'taowei@homebnb.com',
      password: "123456"
  )

    daniel = User.create!(
      username: "daniel",
      email: 'daniel@homebnb.com',
      password: "123456"
    )

    zuzu = User.create!(
      username: 'zuzu',
      email: 'zuzu@homebnb.com',
      password: '123456'
    )

    alex = User.create!(
      username: 'alexander',
      email: "alexander@homebnb.com", 
      password: "123456"
  )

    darren = User.create!(
      username: 'darren',
      email: "darren@homebnb.com", 
      password: "123456", 
  )

    bob = User.create!(
      username: 'bob',
      email: 'bob@homebnb.com',
      password: '123456'
    )

    john = User.create!(
      username: 'john',
      email: 'john@homebnb.com',
      password: '123456'
    )


    # More users
    # 10.times do
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   })
    # end

    l1 = Listing.create!(
      title: 'Oakhurst,California',
      description: 'Minutes south of Yosemite, and 5 minutes from bass lake, lies a one of a kind retreat reflecting the invitation of the natural environment into its design.',
      street_address: '3452 Snowfine Ct',
      city: 'Oakhurst',
      state: 'CA',
      zip_code: 93644,
      star: 4.76,
      country:'USA',
      region:'North America',
      property_type: 'Treehouses',
      location: '31.1232,-123.1231',
      currency: "USD",
      price: 250,
      other_fees:55,
      other_fees_type:'cleaning fee',
      num_beds: 3,
      num_baths: 2,
      host_id: tianshu.id,
      is_posted: true
    )

    l2 = Listing.create!(
      title: 'Tahoe City,California',
      description: 'Minutes south of Yosemite, and 5 minutes from bass lake, lies a one of a kind retreat reflecting the invitation of the natural environment into its design.',
      street_address: '3452 Snowfine Ct',
      city: 'Oakhurst',
      state: 'CA',
      zip_code: 93644,
      star:4.67,
      country:'USA',
      region:'North America',
      property_type: 'Surfing',
      location: '21.1232,-123.1231',
      currency: "USD",
      price: 250,
      other_fees:55,
      other_fees_type:'cleaning fee',
      num_beds: 3,
      num_baths: 2,
      host_id: taowei.id,
      is_posted: true
    )

    l3 = Listing.create!(
      title: 'Pacifica,California',
      description: 'Step out of the little castle, you’re 1-2 minutes away from popular sea bowl bar/entertainment center, nick’s rockaway seashore restaurant for pacifica’s most famous crab sandwich!',
      street_address: '5231 Alter St',
      city: 'Pacifica',
      state: 'CA',
      zip_code: 97644,
      star: 4.55,
      country:'USA',
      region:'North America',
      property_type: 'Windmills',
      location: '11.1232,-53.1231',
      currency: "USD",
      price: 155,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 9,
      num_baths: 3,
      host_id: darren.id,
      is_posted: true
    )

    l4 = Listing.create!(
      title: 'Riverside,California',
      description: 'Wonderful place to visit and plentyful of food!',
      street_address: '131 Bobcat St',
      city: 'Riverside',
      state: 'CA',
      zip_code: 91745,
      star:4.88,
      country:'USA',
      region:'North America',
      property_type: 'Mansions',
      location: '61.1232,-23.1231',
      currency: "USD",
      price: 125,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 5,
      num_baths: 3,
      host_id: bob.id,
      is_posted: true
    )
    #test

    l5 = Listing.create!(
      title: 'Zephyr Cove,Nevada',
      description: 'This is a beautiful beachfront, 3 bedroom cozy family cabin/home located in Marla Bay Zephyr Cove. The bonus room is only available in the Summer months as there is no heat in this room.',
      street_address: '3623 Zephyr St',
      city: 'Zephyr Cove',
      state: 'NV',
      zip_code: 89448,
      star:4.68,
      country:'USA',
      region:'North America',
      property_type: 'Treehouses',
      location: '42.1232,13.1231',
      currency: "USD",
      price: 125,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 6,
      num_baths: 5,
      host_id: tianshu.id,
      is_posted: true
    )

  # Review 1
  r1 = Review.create!(
      listing_id: l2.id,
      reviewer_id: zuzu.id,
      cleanliness: 5,
      accuracy: 5,
      communication: 4,
      location: 5,
      check_in: 5,
      value: 3,
      comment: "This is the best place in town!"
  )
  
  # Review 2
  r2 = Review.create!(
      listing_id: l4.id,
      reviewer_id: daniel.id,
      cleanliness: 5,
      accuracy: 5,
      communication: 5,
      location: 4,
      check_in: 5,
      value: 5,
      comment: "Wow. I didn't expect this place to be so good. omg omg I am shooketh!"
  )
  
  # Review 3
  r3 = Review.create!(
      listing_id: l1.id,
      reviewer_id: tianshu.id,
      cleanliness: 5,
      accuracy: 5,
      communication: 5,
      location: 5,
      check_in: 4,
      value: 4,
      comment: "this is the spot , guys ! pick here"
  )
  
  # Review 4
  r4 = Review.create!(
      listing_id: l2.id,
      reviewer_id: jeff.id,
      cleanliness: 5,
      accuracy: 4,
      communication: 5,
      location: 5,
      check_in: 5,
      value: 5,
      comment: "i love this place and i would highly recommend !"
  )

    puts "Done!"
  end
