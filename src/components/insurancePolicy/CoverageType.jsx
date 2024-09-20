import { useContext } from 'react';
import questionMark from '../../assets/questionMark.svg';
import { Context } from '../../context/ContextProvider';


function CoverageType() {
    const { userData, setUserData } = useContext(Context);
    return (
        <div>
            <label htmlFor="insurance-type" className="flex justify-between mt-6 mb-2 font-medium text-lg text-gray-500">
                <p>Тип покрытия</p>
                <a href="/">
                    <img src={questionMark} alt="Question Mark" width="20" height="20" />
                </a>
            </label>
            <div className="flex items-center mb-2">
                <input
                    type="radio"
                    id="single-trip"
                    name="insurance-type"
                    className="accent-green-600 w-4 h-4 border-green-300 focus:ring-0"
                    onClick={() => setUserData({ ...userData, coverageType: "Однократное путешествие" })}
                />
                <label htmlFor="single-trip" className="block ms-2  text-sm font-medium">
                    Однократное путешествие
                </label>
            </div>
            <div className="flex items-center mb-2">
                <input
                    type="radio"
                    id="multiple-trip"
                    name="insurance-type"
                    className="accent-green-600 w-4 h-4 border-green-300 focus:ring-0"
                    onClick={() => setUserData({ ...userData, coverageType: "Многократное путешествие" })}
                />
                <label htmlFor="multiple-trip" className="block ms-2 text-sm font-medium">
                    Многократное путешествие
                </label>
            </div>
        </div>
    )
}

export default CoverageType