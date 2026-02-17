import { useNavigate } from "react-router-dom";

export default function Example() {
    const navigate = useNavigate();
    // const { page } = useParams();

    const Hello = (name) => {
        console.log(`Hello, ${name}`);
    }

    const setNavigate = (page) => {
        navigate(`/examp/${page}`);
    }

    Hello('Nuwangi');

    return (
        <>
            <button onClick={() => setNavigate('login')}>login</button>
            <button onClick={() => setNavigate('register')}>register</button>
            <button onClick={() => setNavigate('home')}>home</button>
        </>
    );
}