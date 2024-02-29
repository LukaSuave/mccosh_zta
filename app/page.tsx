import TaxCalculator from "@/components/calculator"
import { Header } from "@/components/header"

const HomePage = () => {
  return (
    <main className="container">
      <Header />
      <div className="flex flex-col items-center gap-8 md:gap-5 md:items-start md:flex-row">
        <TaxCalculator  />
      </div>
    </main>
  )
}

export default HomePage