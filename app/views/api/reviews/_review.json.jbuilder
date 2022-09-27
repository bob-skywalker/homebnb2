json.extract! review, :id, :listing_id, :reviewer_id, :cleanliness, :accuracy, :communication, :location, :value, :comment, :updated_at, :created_at

json.extract! review.reviewer, :username

if review.reviewer.photo.attached?
    json.reviewer_photo review.reviewer.photo.url
else 
    json.reviewer_photo ""
end 

