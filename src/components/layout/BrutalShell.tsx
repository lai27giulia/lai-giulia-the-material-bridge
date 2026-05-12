export default function BrutalShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[var(--mb-offwhite)] text-black">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col border-x-4 border-black">
        {children}
      </div>
    </div>
  );
}

