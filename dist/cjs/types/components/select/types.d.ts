export interface SelectProps {
    items: {
        title: string;
        id: number;
    }[];
    label: string;
    value?: string;
    onChange?: () => void;
}
