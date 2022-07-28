import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    console.log(user)
    useEffect( () =>{
        const email = user?.user?.email;
        const name = user?.user?.name;
        console.log(name)
        const currentUser = {email: email, name:name};
        console.log(currentUser)
        if(email){
            fetch(`http://localhost:5000/users/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.accessToken;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;