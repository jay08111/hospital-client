import { useEffect } from "react";
import { Requester } from "./apis/caller";

function App() {
    const call = async () => {
        const t = await Requester.GET("v1/users");

        console.log(t);
    };
    useEffect(() => {
        call();
    }, []);
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
