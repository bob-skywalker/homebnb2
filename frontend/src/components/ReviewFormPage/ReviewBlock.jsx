import React from 'react'
import { Avatar, Button, Divider, Grid, Paper, Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteReview, removeReview } from '../../store/reviews';



const ReviewBlock = ({review, sessionUser}) => {
  const dispatch = useDispatch();
  let reviewButtons;

  if(!sessionUser) return null;

  if (review.reviewerId == sessionUser.id) {

    reviewButtons = (<>
        <Button onClick={()=> dispatch(deleteReview(review.id))}>Delete Review</Button>
    </>)
  } else reviewButtons= (<></>)

  return (
    <Paper style={{padding: "40px 20px"}}>
                                        <Grid container wrap='nowrap' spacing={2}>
                                            <Grid item>
                                                <Avatar alt='avatar' src={review.reviwerPhoto} style={{transform: 'translateY(42%)'}}/>
                                            </Grid>
                                            <Grid>
                                                <h4 style={{margin: 0, textAlign: "left"}}>{review.username}</h4>
                                                <p style={{textAlign: "left"}}>{review.comment}</p>
                                                <Rating value={review.cleanliness} precision={0.5} readOnly />
                                                <p style={{textAlign: "left", color: "gray"}}>
                                                    posted on {review.createdAt.slice(0,10)}
                                                </p>
                                                {reviewButtons}
                                            </Grid>
                                        </Grid>
                                        <Divider variant='fullWidth' style={{margin: "30px 0 "}}/>
                                    </Paper>
  )
}

export default ReviewBlock
