export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start max-w-full w-full pt-4">
      {children}
    </div>
  )
}