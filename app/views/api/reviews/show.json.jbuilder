json.partial! 'api/reviews/review', review: @review
json.average_rating @review.listing.average_rating

json.extract! @review.reviewer, :username

# if @review.reviewer.photo.attached?
#     json.reviwer_photo @review.reviewer.photo.url
# else
#     json.reviewer_photo ""
# end 
