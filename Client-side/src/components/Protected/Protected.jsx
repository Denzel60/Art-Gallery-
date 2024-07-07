import { Children, useEffect } from 'react'
import userInformationStore from '../../store/userInformationStore'
import { useNavigate } from 'react-router-dom'

function Protected() {
    const userInformation = userInformationStore((state) => state.userInformation)
    const navigate = useNavigate();
    useEffect(() => {
        if (!userInformation) navigate("/Login")
    })
    return <div>{Children}</div>
}

export default Protected