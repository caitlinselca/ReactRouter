// src/components/UserProfile.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	card: {
		width: "20vw",
		textAlign: "center",
		"margin-bottom": "20px"
	},
	title: {
		fontSize: 14,
		color: "blue"
	}
});

/*
  Card Component used to display data received from zipcode API
  Using material-ui components
*/
const CreditsCard = props => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					Description: {props.description}
				</Typography>
				<Typography variant="body2" component="p">
					Amount: {props.amount}
				</Typography>
				<Typography variant="body2" component="p">
					Date: {props.date}
				</Typography>
			</CardContent>
		</Card>
	);
};

class Credits extends Component {
    constructor() {
        super();
    
        this.state = {
            credits: [],
            credittotal: 0,
            isError: false
        }
      }

      componentDidMount() {
		axios
			.get(`https://moj-api.herokuapp.com/credits`)
			.then(creditItems => {
				let newCreditsArr = creditItems.data.map(item => {
					return {
						description: item.description,
						amount: item.amount,
						date: item.date
					};
				});
				this.setState({ credits: newCreditsArr, isError: false }, this.CreditAdder(newCreditsArr));
            })
            .then(console.log(this.state.debits))
			.catch(err => {
				this.setState({ isError: true, newCreditsArr: [] });
			});
    }

CreditAdder = (newCreditsArr) => {
    const totalCredArr = newCreditsArr.map((item) => {
            console.log(item.amount);
            return item.amount
        });
    
    let totalcred = 0;
    for(let i = 0; i < totalCredArr.length; i++){
        totalcred += totalCredArr[i];
    }
    console.log(totalcred);

    this.setState({
        credittotal: totalcred
    })

    console.log(this.state.credittotal)

}



  render() {

    const CreditCards = this.state.credits.map(item => (
        <CreditsCard
            description={item.description}
            amount={item.amount}
            date={item.date}
        ></CreditsCard>
    ));

    return (
        <div>
        <h1 className="title"><Link to="/">Home</Link></h1>

        <h1 className="heading">Credits</h1>
        <div className="heading1">
            <h3>Total</h3>
            <p>{this.state.credittotal}</p>
        </div>

        <button className="buttons"><Link to="/AccountBalance">Click for Account Balance</Link></button>

        {this.state.isError ? <h2> No Results </h2> : ""}
		<div className="cards-container">{CreditCards}</div>

        </div>
    );
  }
}

export default Credits;