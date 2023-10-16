"use client"
import { createContext } from 'react';
import { StateInputs} from '@/interfaces';



interface ContextProps {
	inputState : StateInputs;
	setInputState: (description: StateInputs) => void;
}

export const InputContext = createContext({} as ContextProps);
