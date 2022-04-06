export interface ButtonProps {
    text: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    sx?: {};
    variant?: 'contained' | 'text';
    onClick?: () => void;
    disabled?: boolean;
}
