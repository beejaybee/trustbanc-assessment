import { useEffect, useContext } from 'react';

import AuthContext from '../context/AuthProvider'


const AccountDetails = ({ accountNumber, availableBalance, ledgerBalance }) => {
    const {setAccountNumber} = useContext(AuthContext)
    
    useEffect(() => {
        setAccountNumber(accountNumber);
    }, [accountNumber, setAccountNumber]);
    
    return (
        <div>
            <div className="account-number">
                <h4>Savings Account</h4>
                <p>{accountNumber}</p>
            </div>

            <div className='account-balance'>
                <p>
                    Available Balance
                </p>
                <h3> ₦{availableBalance}</h3>
                <p>Book Balance: ₦{ledgerBalance}</p>
            </div>
        </div>
    )
}
    
export default AccountDetails;