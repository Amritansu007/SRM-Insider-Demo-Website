import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { PageWrapper } from "@/components/shared/PageWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors">
        <Navbar />

        <PageWrapper>
          {children}
        </PageWrapper>

      </body>
    </html>
  );
}