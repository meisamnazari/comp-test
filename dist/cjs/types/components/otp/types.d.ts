export interface OtpProps {
    logoSrc: string;
    title: string;
    description: string;
    totalSeconds: number;
    buttonClick: () => void;
    requestClick: () => void;
    progressValue: number;
}
