import { useContext } from 'react';
import questionMark from '../../assets/questionMark.svg';
import { Context } from '../../context/ContextProvider';

function Purpose() {
    const { userData, setUserData } = useContext(Context);
    const purposes = ["Туризм", "Работа", "Учеба", "Спорт"];
    return (
        <div>
            <label htmlFor="insurance-purpose" className="flex justify-between mt-6 mb-2 font-medium text-lg text-gray-500">
                <p>Цель</p>
                <a href="/">
                    <img src={questionMark} alt="Question Mark" width="20" height="20" />
                </a>
            </label>
            <div className="flex justify-between">
                {purposes.map((goal, i) => (
                    <div key={i} className="flex items-center mb-4">
                        <input
                            id={`purpose-${i}`}
                            type="radio"
                            name="insurance-purpose"
                            onChange={() => {setUserData({...userData, purpose: goal})}}
                            className="accent-green-600 w-4 h-4 border-green-300 focus:ring-0"
                        />
                        <label htmlFor={`purpose-${i}`} className="block ms-2  text-sm font-medium">
                            {goal}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Purpose