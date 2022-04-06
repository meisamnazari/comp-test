export interface TextFieldProps {
    type: 'password' | 'text';
    value?: string;
    placeholder?: string;
    label: string;
    onChange?: () => void;
}
