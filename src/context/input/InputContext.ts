"use client"
import { createContext } from 'react';
import { InfoButtonsState} from '@/interfaces';



interface ContextProps {
	inputState : InfoButtonsState;
	setInputState: (description: InfoButtonsState) => void;
}

export const InputContext = createContext({} as ContextProps);
