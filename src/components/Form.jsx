import React, { useState } from 'react';
import InsurancePolicy from './InsurancePolicy';
import Program from './Program';
import arrowLeft from '../assets/arrow-left-circle.svg'

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    setCurrentStep(prev => (prev < totalSteps ? prev + 1 : prev));
  };
  const prevStep = () => {
    setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="formh max-w-lg w-3/4 mx-auto px-8 py-5 bg-white border-2 shadow-md rounded-lg">
      {/* Progress Bar */}
      <div className="flex items-center mb-5">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className={`flex-1 h-2 rounded-full mx-1 ${index + 1 !== currentStep ? 'bg-gray-300' : 'bg-green-500'}`}></div>
        ))}
        {
          currentStep > 1 && <button onClick={prevStep} className="">
            <img src={arrowLeft} alt="arrow left" className='ms-2' />
          </button>
        }
      </div>

      {/* Content */}
      <div>
        {currentStep === 1 && <InsurancePolicy props={{ currentStep, totalSteps, nextStep }} />}
        {currentStep === 2 && <Program props={{ currentStep, totalSteps, nextStep }} />}
        {currentStep === 3 && <div className='text-center font-bold text-blue-800'><p>Спасибо за предоставленную информацию! Мы свяжемся с вами в ближайшее время.</p></div>}
      </div>

      <div className="flex justify-center items-center mt-5">
        {
          currentStep === totalSteps &&
          <button
            onClick={() => alert('Спасибо! Ваша форма успешно отправлена.')}
            className="px-4 py-2 bg-blue-800 text-white rounded-md"
          >
            Submit
          </button>
        }
      </div>
    </div>
  );
};

export default Form;
