# Homebnb

[homebnb](https://homebnb-airbnb.herokuapp.com/) is a full-stack, multi-functional application clone of Airbnb that uses React and Redux on the front-end and Ruby on Rails, PostgresSQL and AWS S3 on the back-end.

**Key Features:**

* Leave ratings and reviews on listings

* Make reservations on available dates and view all bookings

* Browse listings by various locations (Google Maps API) and apply search filters with keyword search intergration

* User authentifiication require users to be logged in to access certain features (e.g. reservations and reviews)

* Edit reservation on user reservation page

## Technologies, Libraries, APIs

**APIs:**

* Google Maps Platform Maps and Places API for dynamic maps and location search

**Libraries:**

* React Date Range library for displaying available booking dates on calendar

**Front-end:**

* Javascript
* React
* Redux
* Material UI
* CSS

**Back-end:**

* Ruby 
* Ruby on Rails
* PostgresSQL
* jBuilder

**Cloud Hosting Services**

* Heroku
* AWS S3 (Amazon Simple Storage Services)

**Module Bundler** 

* Webpack


# Aplication Preview

## Homebnb Layout

![HomeBnB Layout](https://media.giphy.com/media/QMwbcGAUAlMPgiicgE/giphy.gif)

## User Leaving Review 

![User-Review](https://media.giphy.com/media/sYQUJ1LF4PvFidPdyg/giphy.gif)

## Make/ Edit Home Reservation 

![Make-Reservation](https://media.giphy.com/media/GVNrcd5jSkAjExseey/giphy.gif)

## Reservation Calendar Range Picker

![Reservation-Ranger-Picker](https://media.giphy.com/media/Nk59brZa7wvF5AZRoY/giphy.gif)


## Code Snippet

**Rails Controller Search Filter** 
```ruby
  def search
    query = params[:query]
    @listing = Listing.where("title ILIKE ? summary ILIKE ?", "%#{query}%", "%#{query}%" )
    if @listing.length > 0
      render :index
    else
      render :index
    end
  end
```
**Rails Jbuilder JSON Response**
```ruby
  @listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :summary, :description, :street_address, :city, :state, :zip_code, :star, :country, :region, :property_type, :lat, :lng, :currency, :price, :other_fees, :other_fees_type, :num_beds, :num_baths, :host_id, :is_posted, :created_at, :updated_at
        if listing.photos.attached?
            json.photo listing.photos.map {|photo| photo.url}
        else
            json.photo ""
        end
    end
end
```

**React Range Date Picker Logic**
```js
const [showLoginModal, setLoginModal] = useState(false);
  const [signUp,setSignUp] = useState(false);

  let sessionUser = useSelector(state => state.session.user)
  const { listingId } = useParams();
  const [numGuest,setNumGuest] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();
  const listing = useSelector(getListing(listingId));
  const dispatch = useDispatch();


  const dayDiff = () => {
    return (endDate.getTime() - startDate.getTime()) / 86400000;
  };


  let res = {
    user_id: !sessionUser ? 0 : sessionUser.id,
    listing_id: parseInt(listingId),
    num_guests: numGuest,
    start_Date: startDate,
    end_Date: endDate,
    payment: listing.price * dayDiff()
  }
```
