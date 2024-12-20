import { useEffect, useState } from "react";
import "./Garland.scss"

const GarlandComponent = () => {
    const [garland, setGarland] = useState<string>("gir_1")

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setGarland((prevGarland) => {
              if (prevGarland === "gir_1") {
                return "gir_2";
              } else if (prevGarland === "gir_2") {
                return "gar_3";
              } else {
                return "gir_1";
              }
            });
        }, 350);

        return () => clearInterval(intervalId);
        
    }, [garland])

    return ( 
        <>
            <div className={garland} id="gir"></div>
        </>
    );
}
 
export default GarlandComponent;