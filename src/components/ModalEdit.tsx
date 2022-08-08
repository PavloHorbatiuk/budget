import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { EntryForm } from './EntryForm';

type ModalType = {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	description: string;
	value: string;
	check: boolean;
	setDescription: (value: string) => void;
	setValue: (value: string) => void;
	setCheck: (isExpensive: boolean) => void;
};

export const ModalEdit: React.FC<ModalType> = ({
	isOpen,
	setIsOpen,
	description,
	value,
	check,
	setDescription,
	setValue,
	setCheck,
}) => {
	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<EntryForm
					description={description}
					value={value}
					check={check}
					setDescription={setDescription}
					setValue={setValue}
					setCheck={setCheck}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setIsOpen(false)}>Close</Button>
				<Button onClick={() => setIsOpen(false)}>Ok</Button>
			</Modal.Actions>
		</Modal>
	);
};
