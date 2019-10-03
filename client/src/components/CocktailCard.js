import React, { Component, Props } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class CocktailCard extends Component {
 constructor(props){
     super(props);
     this.getIngredients = this.getIngredients.bind(this);
 }
 getIngredients() {
    if (this.props.content.ingredients) {
        return Object.keys(this.props.content.ingredients).map((key) => {
            return <p> {key} </p>;
        });
    } else {
        return <p>data is not available</p>;
    }
}
  render() {
      const cardstyle = {
            maxWidth: 345,
      }

    return (
        <Card style={cardstyle} >
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.content.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {this.getIngredients()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" color="primary">
        Order!
      </Button>
        </CardActions>
      </Card>
    );
  }
}

export default CocktailCard;