"use client"
import { useState } from 'react';
import { InputContext } from './InputContext';
import { StateInputs } from '@/interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const InputProvider = ({ children }: Props) => {

	const [inputState, setInputState] = useState<StateInputs>({
		email: "Base",
		password: "Base"
	});

	return (
		<InputContext.Provider
			value={{
				inputState, setInputState
			}}
		>
			{children}
		</InputContext.Provider>
	);
};
