import { configureStore } from "@reduxjs/toolkit";
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from "react-redux/es/exports";

import components from "./reducers/components/components.reducer";
import userAuth from "./reducers/userAuth/userAuth.reducer";

export const store = configureStore({
	reducer: {
		components,
		userAuth,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
