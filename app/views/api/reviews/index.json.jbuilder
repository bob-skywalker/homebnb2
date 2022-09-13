@reviews.each do |review|
    json.set! review.id do
        json.partial! 'review', review: review
        json.listing review.listsing.title
    end
end 
