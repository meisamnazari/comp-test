export interface SearchableSelectProps {
    items: {
        title: string;
        id: number;
        image: {
            src: string;
            title: string;
        };
    }[];
    label: string;
    value?: string;
    onChange?: () => void;
}
