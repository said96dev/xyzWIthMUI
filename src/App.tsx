import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './rtk/store'; // Adjust path as necessary
import { getThemeSettings } from './DesignTokens';
import { useMemo } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { router } from './routes'; // Adjust path as necessary

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.theme);
  const theme = useMemo(() => createTheme(getThemeSettings(themeMode)), [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
