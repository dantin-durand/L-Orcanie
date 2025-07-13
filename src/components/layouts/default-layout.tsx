import { AppNavbar } from "../navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <AppNavbar />
      <main className="w-full h-full flex flex-col pb-12">{children}</main>
    </div>
  );
}
