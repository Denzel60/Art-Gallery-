import { Children, useEffect } from 'react'
import useUsernameStore from '../../store/userInformationStore';
import { useNavigate } from 'react-router-dom'

function Protected() {
    const user = useUsernameStore(state => state.user)
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate("/Login")
    })
    return <div>{Children}</div>
}

export default Protected