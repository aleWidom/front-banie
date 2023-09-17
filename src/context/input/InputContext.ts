"use client"
import { createContext } from 'react';
import { Input } from '@/interfaces/interfaces';


interface ContextProps {
	input : Input;
	setTypeInput: (description: Input) => void;
}

export const InputContext = createContext({} as ContextProps);
