import { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addEntriesAC } from '../components/reducers/entires.reducer';

export const useEntryDetails = () => {
	const dispatch = useDispatch();
	const [description, setDescription] = useState('');
	const [value, setValue] = useState<string | number>('');
	const [isExpense, setIsExpense] = useState(false);

	const addEntry = () => {
		dispatch(
			addEntriesAC({
				id: v4(),
				description,
				price: +value,
				isExpensive: isExpense,
			})
		);
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
	};
};
