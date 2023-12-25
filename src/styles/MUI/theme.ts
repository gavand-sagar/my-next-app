import { createTheme } from "@mui/material/styles";

// Light Mode Theme
export const lightTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "#fff",
		},
		primary: {
			main: "#1976D2",
		},
		secondary: {
			main: "#f50057",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: "#fff",
					backgroundColor: "#1976D2",
					"&:hover": {
						backgroundColor: "#135ca3",
					},
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					color: "#000",
					backgroundColor: "#fff",
					"&:hover": {
						backgroundColor: "#fff",
					},
				},
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: {
					color: "#000",
					backgroundColor: "#fff",
				},
			},
		},
	},
});

// Dark Mode Theme
export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#000",
		},
		primary: {
			main: "#90caf9",
		},
		secondary: {
			main: "#f48fb1",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: "#fff",
					backgroundColor: "#90caf9",
					"&:hover": {
						backgroundColor: "#6b9bc2",
					},
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					color: "#fff",
					backgroundColor: "#211f1f",
					"&:hover": {
						backgroundColor: "#211f1f",
					},
				},
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: {
					color: "#fff",
					backgroundColor: "#000",
				},
			},
		},
	},
});
