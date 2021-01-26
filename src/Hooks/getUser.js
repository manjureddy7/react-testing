import { useEffect, useState } from 'react';


const useUserDetails = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const getUserDetails = async() => {
        try {
            const jsonResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const user = await jsonResponse.json();
            setUser(user);
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
     getUserDetails();
    }, []);
    return { user, error }
}

export default useUserDetails;