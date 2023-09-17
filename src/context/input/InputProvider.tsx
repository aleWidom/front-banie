"use client"
import { useState } from 'react';
import { InputContext } from './InputContext';
import { Input } from '@/interfaces';

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const InputProvider = ({ children }: Props) => {

	const [input, setTypeInput] = useState<Input>({
		type: "Base"
	});

	return (
		<InputContext.Provider
			value={{
                input,
				setTypeInput
			}}
		>
			{children}
		</InputContext.Provider>
	);
};
