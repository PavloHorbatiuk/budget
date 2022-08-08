import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { EntryForm } from './EntryForm';

type FormType = {
	addEntry: (
		description: string,
		value: string,
		expensiveStatus: boolean
	) => void;
	description: string;
	value: string;
	check: boolean;
	setDescription: (value: string) => void;
	setValue: (value: string) => void;
	setCheck: (isExpensive: boolean) => void;
	isDisabled: boolean;
};

export const NewEntryForm: React.FC<FormType> = ({
	addEntry,
	description,
	value,
	check,
	setDescription,
	setValue,
	setCheck,
	isDisabled,
}) => {
	const clickHandler = () => {
		addEntry(description, value, check);
		setValue('');
		setDescription('');
	};

	return (
		<Form unstackable>
			<EntryForm
				description={description}
				value={value}
				check={check}
				setDescription={setDescription}
				setValue={setValue}
				setCheck={setCheck}
			/>
			<ButtonSaveOrCancel
				disabled={isDisabled}
				clickHandler={clickHandler}
				title1={'Cancel'}
				title2={'Ok'}
			/>
		</Form>
	);
};

export default NewEntryForm;
