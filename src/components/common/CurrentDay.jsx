import { useState, useEffect } from "react";

function CurrentDay() {
    const [day, setDay] = useState("");

    useEffect(() => {
        const getDay = () => {
            const daysOfWeek = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            const now = new Date();
            setDay(daysOfWeek[now.getDay()]);
        };

        getDay();
        const interval = setInterval(getDay, 86400000); // Update every 24 hours

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return <span>{day}</span>;
}

export default CurrentDay;
