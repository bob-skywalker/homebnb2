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

    demo = User.create!(
      username: 'Demo-User',
      email: 'demo@user.io',
      password: 'password'
    )

    file0 = URI.open("https://homebnb-seed.s3.us-west-1.amazonaws.com/demo-user.jpg")
    demo.photo.attach(io: file0, filename: "demo-user.jpg")

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
    li21 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li21.jpg'), filename:'li21.jpg'}
    li22 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li22.jpg'), filename:'li22.jpg'}
    li23 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li23.jpg'), filename:'li23.jpg'}
    li24 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li24.jpg'), filename:'li24.jpg'}
    li25 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li25.jpg'), filename:'li25.jpg'}
    li26 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li26.jpg'), filename:'li26.jpg'}

    l2.photos.attach([li21,li22,li23,li24,li25,li26])


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
    li31 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li31.jpg'), filename:'li31.jpg'}
    li32 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li32.jpg'), filename:'li32.jpg'}
    li33 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li33.jpg'), filename:'li33.jpg'}
    li34 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li34.jpg'), filename:'li34.jpg'}
    li35 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li35.jpg'), filename:'li35.jpg'}
    li36 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li36.jpg'), filename:'li36.jpg'}

    l3.photos.attach([li31,li32,li33,li34,li35,li36])


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
    li41 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li41.jpg'), filename:'li41.jpg'}
    li42 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li42.jpg'), filename:'li42.jpg'}
    li43 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li43.jpg'), filename:'li43.jpg'}
    li44 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li44.jpg'), filename:'li44.jpg'}
    li45 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li45.jpg'), filename:'li45.jpg'}
    li46 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li46.jpg'), filename:'li46.jpg'}

    l4.photos.attach([li41,li42,li43,li44,li45,li46])

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
    li56 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li56.jpg'), filename:'li56.jpg'}
    li51 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li51.jpg'), filename:'li51.jpg'}
    li52 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li52.jpg'), filename:'li52.jpg'}
    li53 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li53.jpg'), filename:'li53.jpg'}
    li54 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li54.jpg'), filename:'li54.jpg'}
    li55 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li55.jpg'), filename:'li55.jpg'}
    

    l5.photos.attach([li56,li52,li53,li54,li55,li51])



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


    li62 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li62.jpg'), filename:'li62.jpg'}
    li61 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li61.jpg'), filename:'li61.jpg'}
    li63 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li63.jpg'), filename:'li63.jpg'}
    li64 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li64.jpg'), filename:'li64.jpg'}
    li65 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li65.jpg'), filename:'li65.jpg'}
    li66 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li66.jpg'), filename:'li66.jpg'}

    l6.photos.attach([li62,li61,li63,li64,li65,li66])


    l7 = Listing.create!(
      title: 'Modern Lake Front Home near Chicago',
      summary: 'Welcome to the Cove at 420. A modern vacation paradise where indoor and outdoor lines blur. Every space is designed for enjoyment. ',
      description: 'Our cove has a rocky bottom swimming area right off of our dock. Perfect for fishing , swimming, kayaking or paddle boarding you can cross under the bridge in the canal to access Lake Elizabeth and enjoy both lakes. We have designed the space to optimize fun and entertainment with a large deck with both dining and lounging areas and outdoor speakers. There is an outdoor bar and awning window outside the kitchen for socializing while you grill; or just to enjoy a nice breeze.',
      street_address: '645 7th Ave',
      city: 'Santa Cruz',
      state: 'CA',
      zip_code: 95062,
      star:4.98,
      country:'USA',
      region:'North America',
      property_type: 'Beach',
      lat: 43.369182,
      lng: -86.179011,
      currency: "USD",
      price: 225,
      other_fees:35,
      other_fees_type:'cleaning fee',
      num_beds: 5,
      num_baths: 3,
      host_id: bob.id,
      is_posted: true
    )

    li71 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li71.jpg'), filename:'li71.jpg'}
    li72 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li72.jpg'), filename:'li72.jpg'}
    li73 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li73.jpg'), filename:'li73.jpg'}
    li74 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li74.jpg'), filename:'li74.jpg'}
    li75 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li75.jpg'), filename:'li75.jpg'}
    li76 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li76.jpg'), filename:'li76.jpg'}

    l7.photos.attach([li71,li72,li73,li74,li75,li76])


    l8 = Listing.create!(
      title: 'East Sister Lake Rock Island',
      summary: 'Truly one of a kind house located in the middle of the lake. Enjoy your ultimate privacy and have fun with your friends',
      description: 'You own private island right off the City of Marathon in the Florida Keys. 3 bedrooms, two baths, 12 ft veranda that surrounds the house and it even comes with a 21 ft. Carolina Skiff for transportation to and from the island.',
      street_address: '785 Ocean Paradise Ave',
      city: 'Marathon',
      state: 'FL',
      zip_code: 33050,
      star:4.78,
      country:'USA',
      region:'North America',
      property_type: 'Beach',
      lat: 24.690696,
      lng: -81.075438,
      currency: "USD",
      price: 1000,
      other_fees:35,
      other_fees_type:'cleaning fee',
      num_beds: 5,
      num_baths: 3,
      host_id: lulu.id,
      is_posted: true
    )

    li81 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li81.png'), filename:'li81.png'}
    li82 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li82.png'), filename:'li82.png'}
    li83 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li83.png'), filename:'li83.png'}
    li84 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li84.png'), filename:'li84.png'}
    li85 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li85.png'), filename:'li85.png'}
    li86 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li86.png'), filename:'li86.jpg'}

    l8.photos.attach([li81,li82,li83,li84,li85,li86])


    l9 = Listing.create!(
      title: 'Surf Lovers, Seaside at South Point',
      summary: 'Surf Song is a cozy little get-a-way right on the sea on the south coast of Barbados, in the much coveted Atlantic Shores area near the South. ',
      description: 'Private entrance; lower part of a lovely private home. Must love dogs as they greet you when you come and go. Living in the main house is a friendly surf instructor (Danny) so if you fancy a lesson you do not have far to go. The house is set right on the ocean near South Point on Seaside Drive in Atlantic Shores. ',
      street_address: '645 7th Ave',
      city: 'Santa Cruz',
      state: 'CA',
      zip_code: 95062,
      star:4.98,
      country:'USA',
      region:'North America',
      property_type: 'Beach',
      lat: 43.369182,
      lng: -86.179011,
      currency: "USD",
      price: 225,
      other_fees:35,
      other_fees_type:'cleaning fee',
      num_beds: 5,
      num_baths: 3,
      host_id: daniel.id,
      is_posted: true
    )

    li93 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li93.jpg'), filename:'li93.jpg'}
    li91 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li91.jpg'), filename:'li91.jpg'}
    li92 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li92.jpg'), filename:'li92.jpg'}
    li94 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li94.jpg'), filename:'li94.jpg'}
    li95 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li95.jpg'), filename:'li95.jpg'}
    li96 = {io: URI.open('https://homebnb-seed.s3.us-west-1.amazonaws.com/li96.jpg'), filename:'li96.jpg'}

    l9.photos.attach([li93,li92,li91,li94,li95,li96])



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

  r5 = Review.create!(
    listing_id: l1.id,
    reviewer_id: matt.id,
    cleanliness: 4.6,
    accuracy: 5,
    communication: 4,
    location: 5,
    value: 3,
    comment: "Decent place, bathroom was clean and host was very friendly to us when we arrive."
)
r6 = Review.create!(
  listing_id: l1.id,
  reviewer_id: daniel.id,
  cleanliness: 4.2,
  accuracy: 5,
  communication: 4,
  location: 5,
  value: 3,
  comment: "It's cool but the bedroom was a bit dirty when we arrived, the host responded immediately and changed the sheets for us."
)

r7 = Review.create!(
  listing_id: l2.id,
  reviewer_id: bob.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 4,
  location: 5,
  value: 3,
  comment: "Home is conveniently located near lake tahoe, I love fishing so I booked this house. It was the best decision of my life. Loved it! 5 Star"
)

r8 = Review.create!(
  listing_id: l3.id,
  reviewer_id: matt.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "this is the spot , guys ! pick here"
)

r8 = Review.create!(
  listing_id: l3.id,
  reviewer_id: bob.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "not bad I would recommend"
)

r9 = Review.create!(
  listing_id: l3.id,
  reviewer_id: alex.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "would be great if yall got a gaming pc cuz i am a gamer. Gamer 4 Life!!!!"
)

r10 = Review.create!(
  listing_id: l7.id,
  reviewer_id: alex.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "It is a good place for us traveler!!!!"
)

r11 = Review.create!(
  listing_id: l8.id,
  reviewer_id: matt.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "This is pretty good "
)

r12 = Review.create!(
  listing_id: l8.id,
  reviewer_id: jeff.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "Pretty decent"
)

r13 = Review.create!(
  listing_id: l3.id,
  reviewer_id: jeff.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "Its good but can be better"
)

r14 = Review.create!(
  listing_id: l5.id,
  reviewer_id: bob.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "Best place in North America"
)

r15 = Review.create!(
  listing_id: l6.id,
  reviewer_id: bob.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "I come here to play games so idk if this place is good or not"
)

r16 = Review.create!(
  listing_id: l9.id,
  reviewer_id: lulu.id,
  cleanliness: 5,
  accuracy: 5,
  communication: 5,
  location: 5,
  value: 4,
  comment: "Hey i just met you ,and it is crazy but here is my number so call me maybe?"
)


    puts "Done!"
  # end
