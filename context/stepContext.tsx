import React, { useState, FC, ReactNode, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'react-use';

interface IStepProps {
    key: string;
    name: string;
    disabled: string;
}

interface IStepContext {
    step: string;
    setStep?(...args: unknown[]): unknown;
}
const StepContext = createContext<IStepContext>({} as IStepContext);
interface IStepContextProvider {
    children: ReactNode;
}

// Create a provider component to manage the active tab state
export const StepContextProvider: FC<IStepContextProvider> = ({ children }) => {

    const { width } = useWindowSize();
        let isMobile = false;
        if (width < Number(process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT_SIZE)) isMobile = true;
    // @ts-ignore
    const [step, setStep] = useState<string>('Step1');

    const stepValue = useMemo(
        () => ({
            step,
            setStep
        }),
        [step, setStep],
    );
    return <StepContext.Provider value={stepValue}>{children}</StepContext.Provider>;
};

StepContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default StepContext;
