import { Link } from "react-router-dom";
import infinity from "../../assets/infinity-white.png";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const [userName, setUserName] = useState('');
    const [log, setLog] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.userName) {
            setUserName(location.state.userName);
        } else {
            const unsubscribe = auth.onAuthStateChanged((user) => {
                if (user) {
                    setUserName(user.displayName || "");
                    setLog(true);
                } else {
                    setLog(false);
                }
            });

            return () => unsubscribe();
        }
    }, [location.state]);

    const logoutUser = async () => {
        await signOut(auth);
        navigate("/login");
    }

    return (
        <>
            <div className="bg-black p-3">
                <nav className="flex justify-around">
                    <Link to={'/'} className="flex items-center">
                        <img className="w-8 h-8 inline-block" src={infinity} alt="Mu2 Logo" />
                        <h1 className="text-2xl text-white font-medium italic">finity<span className="text-sm">.in</span></h1>
                    </Link>
                    <p className="bg-white">{userName}</p>

                    {
                        log ? <button className="bg-white rounded-md p-1" onClick={logoutUser}>Logout</button> : <button className="bg-white rounded-md p-1" onClick={() => navigate("/login")}>Login</button>
                    }

                </nav>
            </div>
        </>
    );
}

export default Home;


