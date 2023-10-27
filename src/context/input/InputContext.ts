"use client"
import { createContext } from 'react';
import { InfoButtonsState} from '@/interfaces';



interface ContextProps {
	inputState : InfoButtonsState;
	setInputState: (description: InfoButtonsState) => void;
	visiblePassword : boolean;
	setVisiblePassword: (condition: boolean) => void;
}

export const InputContext = createContext({} as ContextProps);

