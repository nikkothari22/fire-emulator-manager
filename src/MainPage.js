import React, { useEffect, useContext } from 'react'
import FirebaseContext from './context/FirebaseContext';
const MainPage = () => {

    const firebaseContext = useContext(FirebaseContext)

    let { db, fire, auth, timestamp, fieldValue } = firebaseContext

    return (
        <div>

        </div>
    )
}

export default MainPage
