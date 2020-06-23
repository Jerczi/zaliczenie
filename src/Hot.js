
  import React from 'react';
  import meme from './data.json'
  import {Typography}  from '@material-ui/core';
  
  
  export default function Hot (){
    constructor(props) {
      super(props),
      this.state = {
        clicks: 0,
  
      }};
    
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 })};
  
    DecreaseItem = () => {
      this.setState({ clicks: this.state.clicks - 1 })};
  
    return  (
      {meme.map((meme) => (                
      <Card>
         <CardActionArea>
         <CardMedia
          image={meme.image}/>
          <CardContent>
          <Typography >
          { meme.title}
          </Typography>
          <Typography>
          {meme.upvote}
          </Typography>
          <Typography>
          {meme.downvote}
          </Typography>
        </CardContent>
        <CardActions> 
        <Button onClick={this.IncrementItem}>Upvote</Button>   
        <Button onClick={this.DecreaseItem}>Downvote</Button>
       </CardActions>
       </CardActionArea>
      </Card>
    )
  })}

export default Hot;
