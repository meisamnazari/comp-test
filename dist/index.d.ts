import { FC } from 'react';

interface BackdropLoadingProps {
    onClose?: () => void;
    open?: boolean;
}

declare const CustomBackdropLoading: FC<BackdropLoadingProps>;

export { CustomBackdropLoading as BackdropLoading };
