import BankAccounts from "../components/giving/BankAccounts"
import Giving from "../components/giving/Giving"
import { Seo } from "../components/seo/Seo"

const Give = () => {
  return (
    <>
      <Seo
          title="Support the Ministry of True Worshippers Church"
          description="Partner with the vision of True Worshippers Church through your giving. Your generosity helps advance the Gospel, support missions, and impact lives for Christ."
          url="/give"
        />
    <div>

        <Giving />
        <BankAccounts />

    </div>
    </>

  )
}

export default Give