import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

interface TypeSnowfallComponents{
    SnowfallIncluded: boolean
}

const SnowfallComponents:React.FC<TypeSnowfallComponents> = ({SnowfallIncluded}) => {
    const [countSnow, setCountSnow] = useState<number>(900)

    useEffect(() => {
        setTimeout(() => {
            setCountSnow(200)
        }, 6000)
    }, [])

    return ( 
        <>
            {SnowfallIncluded && <Snowfall snowflakeCount={countSnow} />}
        </>
    )
}
 
export default SnowfallComponents;