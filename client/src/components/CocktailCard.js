import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OrderDialog from './OrderDialog';



class CocktailCard extends Component {
 constructor(props){
     super(props);
     this.getIngredients = this.getIngredients.bind(this);
     this.getOrderDialog = this.getOrderDialog.bind(this);
     this.closeDialog = this.closeDialog.bind(this);

     this.state = {visible: false}
     
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

getOrderDialog(){
 this.setState({visible: true});
 
}
closeDialog(){
  this.setState({visible: false});
}

  render() {
      const cardstyle = {
            maxWidth: 345,
      }
      const visible = this.state.visible;

    return (
      <div>
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
        <Button variant="contained" color="primary" onClick={this.getOrderDialog}>
        Order!
      </Button>
        </CardActions>
      </Card>
      <OrderDialog id={this.props.content.id} sichtbar={visible} closeDialog={this.closeDialog}/>
    </div>
    );
  }
}

export default CocktailCard;