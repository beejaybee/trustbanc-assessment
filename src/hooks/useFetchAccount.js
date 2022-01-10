import { useState, useEffect } from 'react';

import { API } from '../api'



export const useFetchAccount = () => {
    const [loading, setLoading] = useState(false);
    const [accountDetails, setAccountDetails] = useState([]);

    const session = JSON.parse(localStorage.getItem('profile'));
    const phoneNumber = JSON.parse(localStorage.getItem('bvn'));


    useEffect(() => {
        const fetchAccount = async () => {
            try {
                setLoading(true);
                const response = await API.post('/Account/FetchAccounts',
                    { phoneNumber, session },
                    { headers: { 'Content-Type': 'Application/json' } }
                )
                setAccountDetails( [...response.data.accounts] );
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAccount();
    }, [session, phoneNumber]);
    
    return { loading, accountDetails };
}