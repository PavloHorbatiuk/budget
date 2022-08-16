export enum ACTION_TYPE {
	ADD_ENTRIES = 'ADD/ENTRIES',
	DELETE_ENTRIES = 'DELETE/ENTRIES',
	UPDATE_ENTRY = 'UPDATE/ENTRY',
	GET_ALL_ENTRIES = 'GET/ALL/ENTRIES',
	POPULATE_ENTRIES = 'POPULATE_ENTRIES',
}

export interface initialEntryType {
	id: string;
	description: string;
	value: number;
	isExpense: boolean;
}

const initialState: initialEntryType[] = [];

export const EntriesReducer = (
	state: initialEntryType[] = initialState,
	action: ActionsType
): initialEntryType[] => {
	switch (action.type) {
		case ACTION_TYPE.POPULATE_ENTRIES: {
			console.log(action.payload.data);
			return action.payload.data;
		}
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

export const getAllEntriesRedux = () =>
	({ type: ACTION_TYPE.GET_ALL_ENTRIES } as const);

export const populateEntries = (data: initialEntryType[]) =>
	({
		type: ACTION_TYPE.POPULATE_ENTRIES,
		payload: { data },
	} as const);

export type ActionsType =
	| ReturnType<typeof addEntriesAC>
	| ReturnType<typeof deleteEntriesAC>
	| ReturnType<typeof updateEntryRedux>
	| ReturnType<typeof populateEntries>;
