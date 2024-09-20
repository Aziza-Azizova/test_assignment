import { useContext } from 'react';
import questionMark from '../../assets/questionMark.svg';
import { Context } from '../../context/ContextProvider';

function SelectCountry() {
    const { userData, setUserData } = useContext(Context);
    const countries = ["Латвия", "Узбекистан", "Россия", "Корея", "Грузия"];

    return (
        <div>
            <label htmlFor="countries" className="flex justify-between mb-2 text-lg font-medium text-gray-500">
                <p>Страна путешествия</p>
                <a href="/">
                    <img src={questionMark} alt="Question Mark" width="20" height="20" />
                </a>
            </label>
            <select
                id="countries"
                onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                className="border text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 border-green-600"
            >
                {countries.map((country, i) => <option key={i}>{country}</option>)}
            </select>
        </div>
    )
}

export default SelectCountry