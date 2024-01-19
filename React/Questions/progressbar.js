import { useState } from "react";
import { useEffect } from "react";

export const ProgressBar = function ({ progressParent }) {

    /*
        we can use this code in parent component and pass down the progress to child
    */
    // start
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (progress < 100) {
                setProgress(p => p + 1);
            }
        }, 100);
        return () => {
            clearTimeout(timer)
        }
    }, [progress])

    // end

    return <div className="wrapper">
        <div className="outer" style={
            {
                width: '300px',
                backgroundColor: "gray",
                border: '1px solid black',
                borderRadius: '5px',
                height: '10px',
            }
        }>
            <div className="inner" style={
                {
                    width: `${progress || 0}%`,
                    backgroundColor: "black",
                    height: '10px',
                }
            }></div>
        </div>
        {progress || 0}%
    </div >
}

