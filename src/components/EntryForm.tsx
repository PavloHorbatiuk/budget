import React, { ChangeEvent, Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

type EntryFormType = {
	description: string;
	value: string | number;
	isExpense: boolean;
	setDescription: (value: string) => void;
	setValue: (value: string) => void;
	setIsExpense: (isExpensive: boolean) => void;
};
export const EntryForm: React.FC<EntryFormType> = ({
	description,
	value,
	isExpense,
	setDescription,
	setValue,
	setIsExpense,
}) => {
	const valueHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setValue(e.currentTarget.value);

	const descriptionHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setDescription(e.currentTarget.value);

	const checkOnchange = () => setIsExpense(!isExpense);

	return (
		<Fragment>
			<Form.Group widths={3}>
				<Form.Input
					value={description}
					icon="tags"
					width={12}
					label="Descriptions"
					onChange={descriptionHandler}
					placeholder="New shining thing"
				/>
				<Form.Input
					type="number"
					value={value}
					width={4}
					label="Value"
					onChange={valueHandler}
					placeholder="100.00"
					icon="dollar"
					iconPosition="left"
				></Form.Input>
			</Form.Group>
			<Segment compact>
				<Checkbox
					checked={isExpense}
					label="Is expensive?"
					onChange={checkOnchange}
					toggle
				/>
			</Segment>
		</Fragment>
	);
};
