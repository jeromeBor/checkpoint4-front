import { useState, useEffect } from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({ children }) => {

    const localUser = JSON.parse(localStorage.getItem("access-token")) || null
    const [user, setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        if (user) {
            setIsLoggedIn(true)
        }
    }, [user])

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider