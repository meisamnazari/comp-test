import { FC } from 'react';

interface PinCodeInputProps {
    length: number;
    onChange?: () => void;
    onComplete?: () => void;
    disabled?: boolean;
}

declare const PinCodeInput: FC<PinCodeInputProps>;

declare const CustomBackdropLoading: any;

export { CustomBackdropLoading as BackdropLoading, PinCodeInput };
