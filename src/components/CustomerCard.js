import React, {useState} from 'react'
import classes from './Card.module.css';
import Button from '@material-ui/core/Button';

export const CustomerCard = ({ customer, index }) => {
    const [showMinimumBid, setShowMinimumBid] = useState(false)

    let getHighestBid = (bids) => {
        return bids.sort((a,b) => a.amount - b.amount).reverse()[0].amount;
    }

    let getLowestBid = (bids) => {
        return bids.sort((a,b) => a.amount - b.amount)[0].amount;
    }

    return (
        <div className={classes.Card} key={index}>
            <h1>Customer Info</h1>
            <hr></hr>
            { customer.avatarUrl &&
                <img src={customer.avatarUrl} alt="avatar"></img>
            }
            { (customer.firstname || customer.lastname) &&
                <h2>{customer.firstname} {customer.lastname}</h2>
            }
            { customer.email &&
                <p>Email: {customer.email}</p>
            }
            { customer.phone &&
                <p>Phone: {customer.phone}</p>
            }
            { customer.bids && customer.bids.length > 0 &&
                <div>
                    <p> Highest bid: {getHighestBid(customer.bids)} </p>
                    { showMinimumBid &&
                        <p> Minimum bid: {getLowestBid(customer.bids)} </p>
                    }
                    <Button variant="outlined" onClick={() => setShowMinimumBid(true)}>Show min bid</Button>
                </div>
            }
        </div>
    )
}
