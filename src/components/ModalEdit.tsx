import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { EntryForm } from './EntryForm';
import { useDispatch } from 'react-redux';
import { modalEditCloseRedux } from './reducers/modal.reducer';
import { useEntryDetails } from './../hooks/useEntryDetails';

type ModalType = {
	id?: string;
	isOpen?: boolean;
	description?: string;
	price?: number;
	isExpensive?: boolean;
};

export const ModalEdit: React.FC<ModalType> = ({
	isOpen,
	description,
	price,
	isExpensive,
}) => {
	const { setDescription, setValue, setIsExpense } = useEntryDetails();
	const dispatch = useDispatch();
	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<Form>
					<EntryForm
						description={description}
						value={price}
						isExpense={isExpensive}
						setDescription={setDescription}
						setValue={setValue}
						setIsExpense={setIsExpense}
					/>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => dispatch(modalEditCloseRedux())}>Close</Button>
				<Button onClick={() => {}}>Ok</Button>
			</Modal.Actions>
		</Modal>
	);
};
