import { FC } from 'react';

interface PinCodeInputProps {
    length: number;
    onChange?: () => void;
    onComplete?: () => void;
    disabled?: boolean;
}

declare const PinCodeInput: FC<PinCodeInputProps>;

interface BackdropLoadingProps {
    onClose?: () => void;
    open?: boolean;
}

declare const CustomBackdropLoading: FC<BackdropLoadingProps>;

export { CustomBackdropLoading as BackdropLoading, PinCodeInput };
