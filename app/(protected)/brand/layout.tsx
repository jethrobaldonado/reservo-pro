export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start max-w-full w-full">
      {children}
    </div>
  )
}