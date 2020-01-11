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
const DebitsCard = props => {
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

class Debits extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            debits: [],
            isError: false
        }
      }

      componentDidMount() {
		axios
			.get(`https://moj-api.herokuapp.com/debits`)
			.then(debitsItems => {
				let newDebitsArr = debitsItems.data.map(item => {
					return {
						description: item.description,
						amount: item.amount,
						date: item.date
					};
				});
				this.setState({ debits: newDebitsArr, isError: false });
            })
            .then(console.log(this.state.debits))
			.catch(err => {
				this.setState({ isError: true, newDebitsArr: [] });
			});
	}


  render() {

    const Cards = this.state.debits.map(item => (
        <DebitsCard
            description={item.description}
            amount={item.amount}
            date={item.date}
        ></DebitsCard>
    ));

    return (
        <div>
        <Link to="/">Home</Link>

        <h1>Debits!</h1>

        <AccountBalance accountBalance={this.props.accountBalance}/>

        {this.state.isError ? <h2> No Results </h2> : ""}
		<div className="cards-container">{Cards}</div>

        </div>
    );
  }
}

export default Debits;