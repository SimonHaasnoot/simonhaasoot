import { useMediaQuery, useTheme } from '@mui/material';

const useIsMobile = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), { defaultMatches: true });

    return {
        isMobile,
    };
};

export default useIsMobile;
