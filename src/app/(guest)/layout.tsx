import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MaxWrapper from "@/components/shared/MaxWrapper";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import TopHeader from "@/components/shared/TopHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GuestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MaxWrapper>
            <TopHeader />
            <Header />
            <main className="w-full">{children}</main>
            <ScrollToTopButton />
            <Footer />
        </MaxWrapper>
    );
}