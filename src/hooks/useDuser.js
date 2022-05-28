import { useEffect, useState } from "react"

const useDuser = ()=>{
    const[dUser, setDuser] = useState({})
    useEffect(() => {
        fetch('https://blooming-woodland-85127.herokuapp.com/profile', {
            method: 'GET',
            headers: { 'authorization': `Bearer ${localStorage.getItem('jwtToken')}`, }
        }).then(response => response.json())
            .then(data => setDuser(data))
    }, []);
    return [dUser]
}
export default useDuser;