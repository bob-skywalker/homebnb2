# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'


# ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    Listing.destroy_all
    User.destroy_all
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-User',
      email: 'demo@user.io',
      password: 'password'
    )

    tianshu = User.create!(
      username: "tianshu",
      email: 'tianshu@homebnb.com',
      password: "123456"
  )
    file7 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/tianshu.jpg")
    tianshu.photo.attach(io: file7, filename: "tianshu.jpg")



    jeff = User.create!(
      username: 'jeff',
      email: 'jeff@homebnb.com',
      password: '123456'
  )
    file10 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/jeff.jpg")
    jeff.photo.attach(io: file10, filename:"jeff.jpg")



    matt = User.create!(
      username: 'matt',
      email: 'matt@homebnb.com',
      password: "123456"
  )
    file11 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/matt.png")
    matt.photo.attach(io: file11, filename:"matt.png")

    daniel = User.create!(
      username: 'daniel',
      email: 'daniel@homebnb.com',
      password: "123456"
    )

    file8 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/daniel.png")
    daniel.photo.attach(io: file8, filename: "daniel.png")

    lulu = User.create!(
      username: 'lulu',
      email: 'lulu@homebnb.com',
      password: '123456'
    )

    file9 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/lulu.jpg")
    lulu.photo.attach(io: file9, filename: "lulu.png")

    alex = User.create!(
      username: 'alexander',
      email: "alexander@homebnb.com",
      password: "123456"
  )

    file12 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/alex.jpg")
    alex.photo.attach(io: file12, filename:"alex.png")

    darren = User.create!(
      username: 'darren',
      email: "darren@homebnb.com",
      password: "123456",
  )

    file13 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/darren.jpg")
    darren.photo.attach(io: file13, filename:"darren.jpg")


    bob = User.create!(
      username: 'bob',
      email: 'bob@homebnb.com',
      password: '123456'
    )

    file14 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/bob.jpg")
    bob.photo.attach(io: file14, filename:"bob.jpg")

    john = User.create!(
      username: 'john',
      email: 'john@homebnb.com',
      password: '123456'
    )

    file15 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/john.jpg")
    john.photo.attach(io: file15, filename:"john.png")


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
      summary: 'Best place in town with the best scenary views.',
      description: 'We invite you to stay and experience the convenient location within walking distance to award winning restaurants, boutique shopping, café & bakeries in the charming and historic village of Half Moon Bay, golden sand state beaches, waves & sunsets, easy access to San Francisco, (SFO) International Airport, Fishermans Wharf, Fitzgerald Marine Reserve, Pescadero, Santa Cruz, Stanford University, the Headquarters of Apple, Google, Facebook, World-class golf, Purisima Creek Redwoods Preserve, Top Rated Hiking and Biking, Harley Farms, and many other local attractions. For those wishing to simply relax, the Nantucket Whale Inn is the perfect place. Relax in your room, in the living room or outside near the gas fire pit in the garden area.',
      street_address: '5672 Joshua View',
      city: 'Oakhurst',
      state: 'CA',
      zip_code: 93644,
      star: 4.76,
      country:'USA',
      region:'North America',
      property_type: 'Treehouses',
      lat: 37.3279997,
      lng: -119.64931539999998,
      currency: "USD",
      price: 250,
      other_fees:55,
      other_fees_type:'cleaning fee',
      num_beds: 3,
      num_baths: 2,
      host_id: bob.id,
      is_posted: true
    )

    li11 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li17.jpg'), filename:'li17.jpg'}
    li12 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li12.jpg'), filename:'li12.jpg'}
    li13 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li13.jpg'), filename:'li13.jpg'}
    li14 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li14.jpg'), filename:'li14.jpg'}
    li15 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li15.jpg'), filename:'li15.jpg'}
    li16 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li16.jpg'), filename:'li16.jpg'}

    l1.photos.attach([li11,li12,li13,li14,li15,li16])


    l2 = Listing.create!(
      title: 'Tahoe City,California',
      summary: 'Spaces that are more than just a place to sleep.',
      description: 'Our home is adjacent to the historic Applegate Trail in Phoenix Oregon, less than five minutes away from exit 24 or exit 21 on Interstate 5. Phoenix is a small community seven miles North of downtown Ashland, four miles south of Medford, and eight miles east of historic Jacksonville. We are in the heart of the Rogue Valley wine country and the famous Harry and David pear orchards. We offer one or two bedrooms with private bath in a spacious house.

      Guests access our beautiful in ground swimming pool and hot tub from their private room(s). For music let Pandora do the work or plug in your own to the stereo and you have a high end experience at a Super Eight motel price. We can accommodate one to four people in the same party and we only host one party at a time. We offer one or two bedrooms with high end firm mattresses, down comforter or whatever it takes to make you feel totally cared for after a long stretch on I-5. Our guests park in our driveway. We do not charge a cleaning fee, we hope you realize these savings when making your booking decisions.',
      street_address: '3452 Snowfine Ct',
      city: 'Oakhurst',
      state: 'CA',
      zip_code: 93644,
      star:4.67,
      country:'USA',
      region:'North America',
      property_type: 'Surfing',
      lat: 39.1446803,
      lng: -120.17624940000002,
      currency: "USD",
      price: 220,
      other_fees:55,
      other_fees_type:'cleaning fee',
      num_beds: 3,
      num_baths: 2,
      host_id: matt.id,
      is_posted: true
    )
    file2 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/home2.png")
    l2.photos.attach(io: file2, filename: "home2.jpg")

    l3 = Listing.create!(
      title: 'Pacifica,California',
      summary: 'Comfortable private places, with room for friends or family.',
      description: 'A French country home sitting on a rocky bluff with a beautiful view overlooking the Yakima Valley. If you like to hike, the surrounding orchards offers beautiful views. The Wilridge Winery and Cowiche Brewing are 5 minutes away. Yakima County has a plethora of wineries and breweries. If you are attending the Modern Day Sniper class we are 5 minutes away from the meeting point. Snow skiing, boating and river rafting are within an hours drive. Sit on the patio and listen to the coyotes howl.',
      street_address: '5231 Alter St',
      city: 'Pacifica',
      state: 'CA',
      zip_code: 97644,
      star: 4.55,
      country:'USA',
      region:'North America',
      property_type: 'Windmills',
      lat: 37.6138253,
      lng: -122.4869194,
      currency: "USD",
      price: 155,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 9,
      num_baths: 3,
      host_id: lulu.id,
      is_posted: true
    )
    file3 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/home3.png")
    l3.photos.attach(io: file3, filename: "home3.jpg")

    l4 = Listing.create!(
      title: 'Riverside,California',
      summary: 'Get yourself a peace of mind with our Superhost listing in LA',
      description: 'We have access to laundry first come first serve for guests. A small vending fridge and microwave area on 2nd floor. As well as a guest access breakfast nook off of the main kitchen. We are in the process of fully licensing for a full custom breakfast service, so we cannot allow guests access to main kitchen space at this time. We have a great outdoor covered patio and numerous outdoor seating options for Lounging and full cook out. Guests are welcome to grill out in our outdoor kitchen space. The great room and main dining room in lower level are reserved for private party booking, but guests are welcome to the office space for zoom meetings, and last minute work needs. Printer is available.',
      street_address: '131 Bobcat St',
      city: 'Riverside',
      state: 'CA',
      zip_code: 91745,
      star:4.88,
      country:'USA',
      region:'North America',
      property_type: 'Mansions',
      lat: 33.9533487,
      lng: -117.3961564,
      currency: "USD",
      price: 125,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 5,
      num_baths: 3,
      host_id: darren.id,
      is_posted: true
    )
    file4 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/home4.png")
    l4.photos.attach(io: file4, filename: "home4.jpg")

    #test

    l5 = Listing.create!(
      title: 'Zephyr Cove,Nevada',
      summary: 'Enjoy the amazing sights of the bay with this stunning penthouse',
      description: 'You are welcome to enjoy your meals in your room, on the patio or at our kitchen table with or without us. Feel free to use the shared living room with dual reclining couch for relaxing and reading, or sit outside in the garden or at the Little Free Library. Climb the Treehouse! The newly-remodeled shared bath is small, but there is room for your toiletries in the cabinet and the pan-shower head is delightful and hot. We also have a new, outdoor toilet and beautiful redwood outdoor shower! There is not a TV in your room, but feel free to join in my TV watching in the evenings - hope you like comedies and medical dramas! Netflix, Hulu and more are available with Wifi. The warm pool is available by reservation as we need time to heat the water. Our bedroom and office are not open to guests, thanks.',
      street_address: '3623 Zephyr St',
      city: 'Zephyr Cove',
      state: 'NV',
      zip_code: 89448,
      star:4.68,
      country:'USA',
      region:'North America',
      property_type: 'Treehouses',
      lat: 39.000362,
      lng: -119.952569,
      currency: "USD",
      price: 150,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 6,
      num_baths: 5,
      host_id: jeff.id,
      is_posted: true
    )
    file5 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/home5.png")
    l5.photos.attach(io: file5, filename: "home5.jpg")


    l6 = Listing.create!(
      title: 'Sonoma,California',
      summary: 'Enjoy the casual opulence of majestic wine country on seven private acres located in the rolling hills',
      description: 'This memorable estate offers the best of peaceful wine country living and is conveniently located just minutes away from the historic Sonoma Square and a 45-minute drive from the Golden Gate bridge. Located 10 minutes from downtown Bend, there are endless activities to see and do year round. Depending on the season you can enjoy top notch snow skiing, golfing, fishing, hiking, water rafting, canoeing, kayaking, and even personal guided tours for the adventurous.',
      street_address: '4212 Boboa Ct',
      city: 'Sonoma',
      state: 'CA',
      zip_code: 94123,
      star:4.58,
      country:'USA',
      region:'North America',
      property_type: 'Beach',
      lat: 38.291859,
      lng: -122.45803560000002,
      currency: "USD",
      price: 150,
      other_fees:25,
      other_fees_type:'cleaning fee',
      num_beds: 8,
      num_baths: 3,
      host_id: alex.id,
      is_posted: true
    )
    file6 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/home6.png")
    l6.photos.attach(io: file6, filename: "home6.jpg")


  # Review 1
  r1 = Review.create!(
      listing_id: l2.id,
      reviewer_id: lulu.id,
      cleanliness: 5,
      accuracy: 5,
      communication: 4,
      location: 5,
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
      value: 5,
      comment: "i love this place and i would highly recommend !"
  )

    puts "Done!"
  # end
