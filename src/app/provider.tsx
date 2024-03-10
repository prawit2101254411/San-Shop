"use client"
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "@/compronent/model/provider";
import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";

const ToasterProvider = () => {
    const { theme }: any = useTheme() as {
        theme: "light" | "dark";
    };
    return <Toaster theme={theme == "system" || theme == "light" ? "light" : "dark"} className=" bg-white dark:bg-black " />;
};

export const CustomProvider = ({ children }: { children: React.ReactNode },) => {
    return (
        <ThemeProvider
            defaultTheme="system"
            enableSystem
            attribute="class"
        >
           <ToasterProvider/>
            <ModalProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </ModalProvider>
        </ThemeProvider>
    )
}