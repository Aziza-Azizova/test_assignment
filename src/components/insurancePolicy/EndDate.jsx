import { useContext } from 'react';
import questionMark from '../../assets/questionMark.svg';
import { Context } from '../../context/ContextProvider';

function EndDate() {
    const { userData, setUserData } = useContext(Context);
    return (
        <div className="mt-4">
            <label htmlFor="end-date" className="flex justify-between mb-2 text-lg font-medium text-gray-500">
                <p>Конец страхования</p>
                <a href="/">
                    <img src={questionMark} alt="Question Mark" width="20" height="20" />
                </a>
            </label>
            <input
                type="date"
                id="end-date"
                onFocus={(e) => e.target.showPicker()}
                onChange={(e) => { setUserData({ ...userData, endDate: e.target.value }) }}
                className="border text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 border-green-600"
            />
        </div>
    )
}

export default EndDate