import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import { EntryForm } from './EntryForm';
import { useEntryDetails } from './../hooks/useEntryDetails';

type FormType = {};

export const NewEntryForm: React.FC<FormType> = ({}) => {
	const {
		description,
		setDescription,
		value,
		setValue,
		setIsExpense,
		isExpense,
		addEntry,
		isDisabled,
	} = useEntryDetails();

	const clickHandler = () => addEntry();

	return (
		<Form style={{ marginTop: '10px' }}>
			<EntryForm
				description={description}
				value={value}
				isExpense={isExpense}
				setDescription={setDescription}
				setValue={setValue}
				setIsExpense={setIsExpense}
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
