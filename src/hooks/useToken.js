import { useEffect, useState } from "react";

const useToken = (user) => {
    const email  = user?.user.email;
    console.log(email);
    const [token, setToken] = useState();
    useEffect(() => {
     if(email){
        fetch(`http://localhost:5000/login?email=${email}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            
        }).then(response => response.json())
            .then(data => {
                const token = data.token;
                localStorage.setItem('jwtToken', token);
                setToken(token)
            })
     }
}, [user, email])
return [token]
}
export default useToken