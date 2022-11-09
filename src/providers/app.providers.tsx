import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export const AppProviders = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
