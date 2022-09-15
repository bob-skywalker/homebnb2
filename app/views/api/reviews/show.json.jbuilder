json.partial! 'api/reviews/review', review: @review
json.average_rating @review.listing.average_rating

json.extract! @review.reviewer, :username
