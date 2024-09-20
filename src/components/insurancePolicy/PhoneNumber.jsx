import { useContext, useEffect, useState } from 'react';
import questionMark from '../../assets/questionMark.svg';
import { Context } from '../../context/ContextProvider';

function PhoneNumber() {
    const { userData, setUserData } = useContext(Context);
    const [countryCode, setCountryCode] = useState("+998");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        setUserData({ ...userData, phoneNumber: countryCode +" "+ phoneNumber });        
    }, [countryCode, phoneNumber]);

    return (
        <div className="mt-4 mb-4">
            <label htmlFor="end-date" className="flex justify-between mb-2 text-lg font-medium text-gray-500">
                <p>Номер мобильного телефона</p>
                <a href="/"><img src={questionMark} alt="Question Mark" width="20" height="20" /></a>
            </label>
            <div className="flex">
                <select 
                    id="phone-code" 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)} 
                    className="border text-sm rounded-l-lg focus:ring-green-500 focus:border-green-500 block p-2.5 border-green-600 border-r-0"
                >
                    <option value="+998">(+998) UZ</option>
                    <option value="+7">(+7) RU</option>
                    <option value="+380">(+380) UA</option>
                    <option value="+1">(+1) US</option>
                </select>
                <input
                    type="text"
                    id="phone"
                    placeholder="12 345 67 89"
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    className="border text-sm rounded-r-lg focus:ring-green-500 focus:border-green-500 block w-3/4 p-2.5 border-green-600"
                />
            </div>
        </div>
    );
}

export default PhoneNumber;
