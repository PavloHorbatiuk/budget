enum ACTION_TYPE {
	ADD_ENTRIES = 'ADD/ENTRIES',
	DELETE_ENTRIES = 'DELETE/ENTRIES',
	UPDATE_ENTRY = 'UPDATE/ENTRY',
}

export interface initialEntryType {
	id: string;
	description: string;
	value: number;
	isExpense: boolean;
}

const initialState: initialEntryType[] = [
	{
		id: '1',
		description: 'beer',
		value: 2,
		isExpense: false,
	},
	{
		id: '2',
		description: 'milk',
		value: 3,
		isExpense: false,
	},
	{
		id: '3',
		description: 'samsung S22',
		value: 1200,
		isExpense: true,
	},
];

export const EntriesReducer = (
	state: initialEntryType[] = initialState,
	action: ActionsType
): initialEntryType[] => {
	switch (action.type) {
		case ACTION_TYPE.ADD_ENTRIES: {
			const newEntries = state.concat({ ...action.payload });
			return newEntries;
		}
		case ACTION_TYPE.DELETE_ENTRIES:
			return state.filter(entry => entry.id !== action.payload);
		case ACTION_TYPE.UPDATE_ENTRY:
			const copyEntries = [...state];
			const index = copyEntries.findIndex(i => i.id === action.payload.id);
			copyEntries[index] = { ...action.payload.entry };
			return copyEntries;
		default:
			return state;
	}
};

export const addEntriesAC = (entry: initialEntryType) =>
	({
		type: ACTION_TYPE.ADD_ENTRIES,
		payload: entry,
	} as const);

export const deleteEntriesAC = (id: string) =>
	({
		type: ACTION_TYPE.DELETE_ENTRIES,
		payload: id,
	} as const);

export const updateEntryRedux = (id: string, entry: initialEntryType) =>
	({
		type: ACTION_TYPE.UPDATE_ENTRY,
		payload: { id, entry },
	} as const);

export type ActionsType =
	| ReturnType<typeof addEntriesAC>
	| ReturnType<typeof deleteEntriesAC>
	| ReturnType<typeof updateEntryRedux>;
