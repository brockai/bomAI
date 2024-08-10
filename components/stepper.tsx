import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface StepperProps {
  currentStep: number;
}

const steps: Step[] = [
  { id: 1, title: 'Step 1', description: 'Description for step 1' },
  { id: 2, title: 'Step 2', description: 'Description for step 2' },
  { id: 3, title: 'Step 3', description: 'Description for step 3' },
];

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto mt-10">
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex-1">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep === step.id ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {step.id}
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 ${
                currentStep > step.id ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          )}
          <div className="mt-2 text-center">
            <div className={`font-semibold ${currentStep === step.id ? 'text-blue-500' : ''}`}>
              {step.title}
            </div>
            <div className="text-sm text-gray-500">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
