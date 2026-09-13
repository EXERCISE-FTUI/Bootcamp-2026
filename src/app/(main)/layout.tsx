import "../globals.css";

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            style={{
                background:
                    "linear-gradient(180deg, #527182 0%, #527182 20.22%, #A1140B 39.59%, #2B7696 55.12%, #1C465C 69.89%, #15394A 85.23%, #0D2734 100%)",
                minHeight: "100vh",
            }}
        >
            <div className="pt-28 lg:pt-12 w-full">{children}</div>
        </div>
    );
}
