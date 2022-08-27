import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { EntryForm } from './EntryForm';
import { useDispatch } from 'react-redux';
import { modalEditCloseRedux } from './reducers/modal.reducer';
import { useEntryDetails } from '../hooks/useEntryDetails';

type ModalType = {
	id?: string;
	isOpen?: boolean;
	description?: string;
	value?: number;
	isExpense?: boolean;
};

export const ModalEdit: React.FC<ModalType> = ({
	id,
	isOpen,
	description,
	value,
	isExpense,
}) => {
	const valueString = String(value);
	const entryUpdate = useEntryDetails(description, valueString, isExpense);
	const entryId: string = id!;
	const dispatch = useDispatch();

	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<Form>
					<EntryForm
						description={entryUpdate.description}
						value={entryUpdate.value}
						isExpense={entryUpdate.isExpense}
						setDescription={entryUpdate.setDescription}
						setValue={entryUpdate.setValue}
						setIsExpense={entryUpdate.setIsExpense}
					/>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => dispatch(modalEditCloseRedux())}>Close</Button>
				<Button
					onClick={() => {
						entryUpdate.updateEntry(entryId);
					}}
				>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
	);
};
