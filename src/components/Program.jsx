import { useContext, useState } from "react";
import { Context } from '../context/ContextProvider';

function Program({ props }) {
  const {programms, userData, setUserData} = useContext(Context);
  const [selectedProgram, setSelectedProgram] = useState(0);

  const handleClick = (index) => {
    setSelectedProgram(index);
    setUserData({...userData, selectedProgram: programms[index]})
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-3 text-blue-800">Выберите программу</h2>
      <form action="">
        {programms.map((prog, i) => (
          <div key={i} className={`p-3  flex items-start mb-3 rounded-xl border-2 ${selectedProgram === i ? "drop-shadow-lg bg-white text-green-600" : "text-blue-800 bg-gray-100"}`} onClick={() => handleClick(i)}>
            <input
              type="radio"
              name="insurance-type"
              checked={selectedProgram === i}
              onChange={() => handleClick(i)}
              className="accent-green-600 mt-2 w-4 h-4 border-green-300 focus:ring-0"
            />
            <label htmlFor={`program-${i}`} className="block ms-2 text-sm font-medium">
              <p className="text-lg font-normal">{prog.type}</p>
              <p className="font-bold">Общее покрытие - {prog.coverage}</p>
              <p className="text-gray-400 text-xs">{prog.descr}</p>
            </label>
          </div>
        ))}
        <div className="text-center text-lg text-blue-800 font-bold"><a href="/">Сравнить программы</a></div>
        <div className="mt-4">
          {props.currentStep < props.totalSteps &&
            <button onClick={props.nextStep} className="px-4 py-2 w-full flex justify-between text-center bg-green-500 text-white rounded-md">
              <p>Выбрать {userData.selectedProgram.type}</p>
              <p>{userData.selectedProgram.coverage}</p>
            </button>
          }
        </div>
      </form>
    </div>
  );
}

export default Program;
