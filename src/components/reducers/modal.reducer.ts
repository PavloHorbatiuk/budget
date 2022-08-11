enum ModalTypes {
	MODAL_IS_OPEN = 'MODAL/IS/OPEN',
	MODAL_IS_CLOSE = 'MODAL/IS/CLOSE',
}

type ModalStateType = {
	isOpen: boolean;
	id: string;
};

const initialModalState: ModalStateType = {
	isOpen: false,
	id: '',
};

const ModalsReducer = (
	state: ModalStateType = initialModalState,
	action: ModalActionType
) => {
	switch (action.type) {
		case ModalTypes.MODAL_IS_OPEN:
			return { ...state, isOpen: true, id: action.payload.id };
		case ModalTypes.MODAL_IS_CLOSE:
			return { ...state, isOpen: false, id: null };
		default:
			return state;
	}
};

export const modalEditIsOpenRedux = (id: string) =>
	({
		type: ModalTypes.MODAL_IS_OPEN,
		payload: { id },
	} as const);

export const modalEditCloseRedux = () =>
	({ type: ModalTypes.MODAL_IS_CLOSE } as const);

type ModalActionType =
	| ReturnType<typeof modalEditIsOpenRedux>
	| ReturnType<typeof modalEditCloseRedux>;

export default ModalsReducer;
