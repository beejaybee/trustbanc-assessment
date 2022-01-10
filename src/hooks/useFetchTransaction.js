import { useState, useEffect , useContext} from 'react';

import { API } from '../api';
import AuthContext from '../context/AuthProvider';

export const useFetchTransaction = () => {
    const [loading, setLoading] = useState(false);
    const [transactionDetails, setTransactionDetails] = useState([]);

    const { accountNumber } = useContext(AuthContext);


    const session = JSON.parse(localStorage.getItem('profile'));
    const phoneNumber = JSON.parse(localStorage.getItem('bvn'));

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                setLoading(true);
                const response = await API.post('/Account/FetchTransactions',
                    { phoneNumber, session , accountNumber},
                    { headers: { 'Content-Type': 'Application/json' } }
                );

                setTransactionDetails( [...response.data.transactions] );
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchTransaction();
    }, [session, phoneNumber, accountNumber]);

return { loading, transactionDetails}
}