

export default function GuestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="w-full">

            <main className="w-full">{children}</main>

        </section>
    );
}