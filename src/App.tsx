import { useEffect } from "react";
import { Requester } from "./apis/caller";
import { Button } from "@/components/ui/button";

function App() {
  const call = async () => {
    const t = await Requester.GET("v1/users");

    console.log(t);
  };

  useEffect(() => {
    call();
  }, []);

  return <Button onClick={() => console.log("hey?")}> Click me! </Button>;
}
export default App;
