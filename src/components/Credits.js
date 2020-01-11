// src/components/UserProfile.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
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
    constructor(props) {
        super(props);
    
        this.state = {
            credits: [],
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
				this.setState({ credits: newCreditsArr, isError: false });
            })
            .then(console.log(this.state.debits))
			.catch(err => {
				this.setState({ isError: true, newDebitsArr: [] });
			});
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
        <Link to="/">Home</Link>

        <h1>Credits!</h1>

        <AccountBalance accountBalance={this.props.accountBalance}/>

        {this.state.isError ? <h2> No Results </h2> : ""}
		<div className="cards-container">{CreditCards}</div>

        </div>
    );
  }
}

export default Credits;