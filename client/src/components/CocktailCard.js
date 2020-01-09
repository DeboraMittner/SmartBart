import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OrderDialog from './OrderDialog';

import Grid from '@material-ui/core/Grid';



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
            height: 250,
      }

      const buttonWrapper = {
        position: 'absolute',
        bottom: 5,
        width: '90%'
      }

      const buttonSytyle = {
        
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 0,
        marginTop: 0,
        display: 'block'
    
      }

      const divSytyle = {
        position: 'relative',

      }

      const visible = this.state.visible;


    return (
      <div style={divSytyle} >
  
        <Card style={cardstyle}>
        <CardActionArea>
          <CardMedia
            image="../testfiles/images/smartpic.jpg"
            title="Contemplative Reptile"
            height="140"
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
          <div style={buttonWrapper}>
        <Button style={buttonSytyle} variant="contained" color="primary" onClick={this.getOrderDialog}>
        Order!
      </Button>
      </div>
        </CardActions>
      </Card>
      <OrderDialog id={this.props.content.id} sichtbar={visible} closeDialog={this.closeDialog}/>

    </div>
    );
  }
}

export default CocktailCard;