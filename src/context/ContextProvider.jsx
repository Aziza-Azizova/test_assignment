import { createContext, useEffect, useState } from "react";

export const Context = createContext();

function ContextProvider({children}) {
    const programms = [
        {
            type: "Silver",
            coverage: "20 000 EUR",
            descr: "Медицинское лечение, репатрация и другое",
            default: true
        },
        {
            type: "Gold",
            coverage: "60 000 EUR",
            descr: "Всё вышеперечисленное + спасательная операция"
        },
        {
            type: "Platinum",
            coverage: "90 000 EUR",
            descr: "Всё вышеперечисленное во всех странах мира"
        },
        {
            type: "Stopvirus I (С покрытием COVID)",
            coverage: "60 000 EUR",
            descr: "Всё вышеперечисленное + COVID"
        },
        {
            type: "Stopvirus II (С покрытием COVID)",
            coverage: "90 000 EUR",
            descr: "Всё вышеперечисленное + COVID, во всех странах мира"
        }
    ];
    
    const userInfo = {
        country: "Латвия",
        coverageType: "",
        startDate: "",
        endDate: "",
        purpose: "",
        phoneNumber: "",
        selectedProgram: programms[0]
    }
    const [userData, setUserData] = useState(userInfo);

    useEffect(() => {
        console.log("userData", userData);
    }, [userData])

    return (
        <Context.Provider value={{programms, userData, setUserData}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider