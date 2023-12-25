import React from "react";
import { MaterialUISwitch } from "@/styles/MUI/theme-switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Paper } from "@mui/material";

interface IThemeTogglerProps {
	isDarkMode: boolean;
	setIsDarkMode: any;
}

const ThemeToggler: React.FC<IThemeTogglerProps> = ({
	isDarkMode,
	setIsDarkMode,
}: IThemeTogglerProps) => {
	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<Paper style={{ display: "flex", justifyContent: "flex-end" }}>
			<FormGroup>
				<FormControlLabel
					control={
						<MaterialUISwitch
							sx={{ m: 1 }}
							checked={isDarkMode}
							onChange={toggleTheme}
						/>
					}
					label="Change Mode"
				/>
			</FormGroup>
		</Paper>
	);
};

export default ThemeToggler;
