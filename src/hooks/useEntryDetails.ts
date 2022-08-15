import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import {
	addEntriesAC,
	updateEntryRedux,
} from '../components/reducers/entires.reducer';
import { modalEditCloseRedux } from '../components/reducers/modal.reducer';

export const useEntryDetails = (desc = '', val = '', isExs = true) => {
	const dispatch = useDispatch();
	const [description, setDescription] = useState(desc);
	const [value, setValue] = useState<string>(val);
	const [isExpense, setIsExpense] = useState<boolean>(isExs);

	useEffect(() => {
		setDescription(desc);
		setValue(val);
		setIsExpense(isExs);
	}, [desc, val, isExpense]);

	const addEntry = () => {
		dispatch(
			addEntriesAC({
				id: v4(),
				description,
				value: +value,
				isExpense,
			})
		);
		resetValues();
	};

	const updateEntry = (id: string) => {
		dispatch(
			updateEntryRedux(id, {
				id,
				value: +value,
				description,
				isExpense,
			})
		);
		dispatch(modalEditCloseRedux());
		resetValues();
	};
	const resetValues = () => {
		setDescription('');
		setValue('');
		setIsExpense(true);
	};
	const isDisabled = description.length < 2 || value === '';

	return {
		description,
		setDescription,
		value,
		setValue,
		setIsExpense,
		isExpense,
		addEntry,
		isDisabled,
		updateEntry,
	};
};
