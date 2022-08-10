enum ACTION_TYPE {
	ADD_ENTRIES = 'ADD/ENTRIES',
	DELETE_ENTRIES = 'DELETE/ENTRIES',
}

export interface initialEntryType {
	id: string;
	description: string;
	price: number;
	isExpensive: boolean;
}

const initialState: initialEntryType[] = [
	{
		id: '1',
		description: 'beer',
		price: 2,
		isExpensive: false,
	},
	{
		id: '2',
		description: 'milk',
		price: 3,
		isExpensive: false,
	},
	{
		id: '3',
		description: 'samsung S22',
		price: 1200,
		isExpensive: true,
	},
];

export const EntriesReducer = (
	state: initialEntryType[] = initialState,
	action: ActionsType
): initialEntryType[] => {
	switch (action.type) {
		case ACTION_TYPE.ADD_ENTRIES:
			return [...state, action.payload];
		case ACTION_TYPE.DELETE_ENTRIES:
			return state.filter(entry => entry.id !== action.payload);
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

export type ActionsType =
	| ReturnType<typeof addEntriesAC>
	| ReturnType<typeof deleteEntriesAC>;
