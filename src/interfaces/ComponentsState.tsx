export interface ISnackbarState {
	message: string;
	open: boolean;
	type?: "error" | "warning" | "info" | "success";
}
export interface IComponentsState {
	openSidebar: boolean;
	snackBar: ISnackbarState;
}
