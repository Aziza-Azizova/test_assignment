import SelectCountry from './insurancePolicy/SelectCountry';
import CoverageType from './insurancePolicy/CoverageType';
import StartDate from './insurancePolicy/StartDate';
import EndDate from './insurancePolicy/EndDate';
import Purpose from './insurancePolicy/Purpose';
import PhoneNumber from './insurancePolicy/PhoneNumber';
import { useContext } from 'react';
import { Context } from '../context/ContextProvider';


function InsurancePolicy({ props }) {
  const {userData} = useContext(Context);

  function isFormCompleted(){
    return userData.country && userData.coverageType && userData.startDate && userData.endDate && userData.purpose && userData.phoneNumber
  }

  return (
    <div className='text-gray-500 font-semibold'>
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Покупка страхового полиса</h2>

      <form action="">
        <SelectCountry/>
        <CoverageType />
        <StartDate />
        <EndDate />
        <Purpose />
        <PhoneNumber />

        <div className="mt-5">
          {props.currentStep < props.totalSteps &&
            <button 
            onClick={props.nextStep}
            disabled={!isFormCompleted()}
            className={`px-4 py-2 w-1/3 bg-green-500 text-white rounded-md ${!isFormCompleted() && "cursor-not-allowed"}`}>
              Далее
            </button>}
        </div>
        
      </form>
    </div>
  )
}

export default InsurancePolicy