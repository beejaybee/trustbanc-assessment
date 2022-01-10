import { Link } from 'react-router-dom';
import { useFetchAccount } from "../hooks/useFetchAccount";
import { useFetchTransaction } from "../hooks/useFetchTransaction";

import AccountDetails from './AccountDetails'
import Transaction from "./Transaction";



const Account = () => {
    const { loading, accountDetails } = useFetchAccount();
    const { transactionDetails } = useFetchTransaction();
    const name = JSON.parse(localStorage.getItem('name'));
    

    if (loading) return (
        <h1 className="account">Loading....</h1>
    )

    return (
        <main className="account">
            <div className="account-header">
                <div className="account-header__content">
                    <button className="account-header__content-button">
                        make a transfer
                    </button>
                    <div className="account-header__content-profile">
                        <div className="account-header__content-profile-hero">
                            <h5 className='name'>{name}</h5>
                            <Link to="/dashboard" >click here to view profile</Link>
                        </div>
                        <div className="account-header__content-profile-avatar">
                            <h1>{name.slice(0, 1)} </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-info">
                <div className="account-info__body">

                    <div className="account-info__body-details">
                        <div>
                            <h4 className="title"> my account(s) </h4>
                            <div className="underline"></div>
                        </div>

                        <div className="account-info__body-details__card">
                            {accountDetails.map((account, index) => {
                                const { accountNumber, availableBalance, ledgerBalance } = account;
                                return <AccountDetails
                                    key={index}
                                    accountNumber={accountNumber}
                                    availableBalance={availableBalance}
                                    ledgerBalance={ledgerBalance}
                                />
                            })}
                        </div>

                    </div>

                    <div className="account-info__body-transactions">
                        <div>
                            <h4 className="title"> Transaction history </h4>
                            <div className="underline"></div>

                            <div className="account-info__body-transaction__card">
                            {transactionDetails.map(transaction => {
                                const { narration, transactionId, amount } = transaction;
                                return <Transaction
                                    key={transactionId}
                                    narration={narration}
                                    transactionId={transactionId}
                                    amount={amount}
                                />
                            })}
                        </div>
                        </div>
                    </div>
                    
                
                </div>
                
            </div>
            
            
        </main>
    )
} 

export default Account;