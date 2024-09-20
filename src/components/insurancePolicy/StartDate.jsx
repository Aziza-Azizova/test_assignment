import { useContext } from 'react';
import questionMark from '../../assets/questionMark.svg';
import { Context } from '../../context/ContextProvider';

function StartDate() {
    const { userData, setUserData } = useContext(Context);
    return (
        <div className="mt-4">
            <label htmlFor="start-date" className="flex justify-between mt-6 mb-2 font-medium text-lg text-gray-500">
                <p>Начало страхования</p>
                <a href="/">
                    <img src={questionMark} alt="Question Mark" width="20" height="20" />
                </a>
            </label>
            <input
                type="date"
                id="start-date"
                onFocus={(e) => e.target.showPicker()}
                onChange={(e) => { setUserData({ ...userData, startDate: e.target.value }) }}
                className="border text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 border-green-600"
            />
        </div>
    )
}

export default StartDate