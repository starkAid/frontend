import DashboardFooter from "@/components/shared/DashboardFooter";
import Header from "@/components/shared/Header";
import MaxWrapper from "@/components/shared/MaxWrapper";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MaxWrapper>
            <Header />
            <main className="w-full">{children}</main>
            <ScrollToTopButton />
            <DashboardFooter />
        </MaxWrapper>
    );
}