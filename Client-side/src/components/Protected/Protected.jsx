// import { useEffect } from 'react'
// import useUsernameStore from '../../store/userInformationStore';
// import { useNavigate } from 'react-router-dom'

// // eslint-disable-next-line react/prop-types
// function Protected({ children }) {
//     const user = useUsernameStore(state => state.user)
//     const navigate = useNavigate();
//     useEffect(() => {
//         console.log(user);
//     }, [user]);

//     useEffect(() => {
//         if (!user) { navigate("/Login") }
//         else {
//             navigate("/Dashboard")
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [user])
//     return <div>{children}</div>
// }

// export default Protected

// ProtectedRoute.jsx

import { Navigate, Route, Routes } from 'react-router-dom';
import useUserStore from '../../store/userInformationStore'; // Import your Zustand store

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element: Element, ...rest }) => {
    const { loading, isAuthenticated } = useUserStore((state) => ({
        loading: state.user === '',
        isAuthenticated: !!state.user,
    }));

    if (loading) {
        // You can add a loading spinner or other UI here
        return null;
    }

    return (
        <Routes>
            <Route
                {...rest}
                element={
                    isAuthenticated ? (
                        <Element />
                    ) : (
                        <Navigate to="/Login" replace />
                    )
                }
            />
        </Routes>
    );
};

export default ProtectedRoute;
