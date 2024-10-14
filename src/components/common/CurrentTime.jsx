import { useState, useEffect } from "react";

function CurrentTime() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const getTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);
        };

        getTime();
        const interval = setInterval(getTime, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return <span>{time}</span>;
}

export default CurrentTime;
