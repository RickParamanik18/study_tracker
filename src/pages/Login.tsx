import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        let creator: string | null = prompt("Enter your name");
        localStorage.setItem("creator", creator ? creator : "sumana");
        navigate("/");
    };
    useEffect(() => {
        localStorage.getItem("creator") && navigate("/");
    }, []);
    return (
        <button
            style={{
                margin: "10px 2px",
                padding: "10px 20px",
            }}
            onClick={login}
        >
            Enter
        </button>
    );
};

export default Login;
