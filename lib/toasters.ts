import toast from "react-hot-toast";

export const showErrorToast = (message: string) => {
    toast.error(message, {
        duration: 10000,
        position: "top-right",
        style: {
        backgroundColor: "#E8E9E9",
        fontSize: '14px',
        fontWeight: 500,
        fontStyle: "normal",
        },
    });
};