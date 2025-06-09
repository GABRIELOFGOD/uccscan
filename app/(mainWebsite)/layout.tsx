import Header from "@/components/layout/header"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      <div className="h-full overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default MainLayout