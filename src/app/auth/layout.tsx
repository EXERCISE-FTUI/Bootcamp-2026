import "../globals.css";

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="min-h-screen"
            style={{
                background:
                    "linear-gradient(119.97deg, #10152C 7.46%, #59001a 44.79%, #121212 85.66%)",
                minHeight: "100vh",
            }}
        >
            <div className="pt-28 lg:pt-12 w-full">{children}</div>
        </div>
    );
}
