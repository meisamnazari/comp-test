import { ReactElement } from "react";
export interface AvatarProps {
    alt: string;
    src?: string;
    size: {
        height: number;
        width: number;
        bgcolor: string;
    };
    icon?: ReactElement;
    variant: 'circular' | 'square';
}
