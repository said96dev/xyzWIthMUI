import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setTheme } from '@/rtk/theme/thmeeSlice';
import { RootState } from '@/rtk/store';

const ThemeToggleButton = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state: RootState) => state.theme.theme);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    };

    return (
        <Button onClick={toggleTheme}>
            Toggle to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
    );
};

export default ThemeToggleButton;
