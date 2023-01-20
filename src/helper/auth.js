import { useNavigate } from 'react-router-dom';
function authCheck(){
    debugger
    const navigate = useNavigate();
    const token = localStorage.getItem('token') 
    if(!token) {
        // navigate('/', { replace: true });
    }
}
export  {authCheck}