import { motion } from "framer-motion"
import { Copy } from "lucide-react"
import { useState } from "react"

type AccountCardProps = {
  bank: string
  accountType: string
  accountNumber: string
  accountName: string
  logo: string
  full?: boolean
}

const AccountCard = ({
  bank,
  accountType,
  accountNumber,
  accountName,
  logo,
  full,
}: AccountCardProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`bg-gray-200 lato rounded-2xl p-5 shadow-sm ${
        full ? "md:col-span-2" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img src={logo} className="w-8 h-8 object-contain" />
        <p className="font-semibold">{bank}</p>
      </div>

      {/* Account Box */}
      <div className="bg-white rounded-xl p-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500 font-bold mb-1">{accountType}</p>
          <p className="text-red-600 font-bold text-xl tracking-wide">
            {accountNumber}
          </p>
          <p className="text-[11px] text-gray-500 mt-1">
            {accountName}
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="text-gray-500 hover:text-black transition"
        >
          <Copy size={18} />
        </button>
      </div>

      {copied && (
        <p className="text-green-600 text-xs mt-2">Copied successfully ✓</p>
      )}
    </motion.div>
  )
}

export default function BankAccounts() {
  return (
    <div className="max-w-4xl mx-auto px-4 ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">

        {/* Access Bank */}
        <AccountCard
          bank="Access (Diamond)"
          accountType="Naira Account"
          accountNumber="0076477140"
          accountName="True Worshippers Revival Global Ministry Inc."
          logo="/access.png"
        />

        {/* UBA Naira */}
        <AccountCard
          bank="United Bank Of Africa"
          accountType="Naira Account"
          accountNumber="2276766178"
          accountName="True Worshippers (Celebration Arena)"
          logo="/uba.png"
        />

        {/* UBA Dollar */}
        <AccountCard
          bank="United Bank of Africa (UBA)"
          accountType="Dollar Account"
          accountNumber="1025854113"
          accountName="True Worshippers (Celebration Arena)"
          logo="/uba.png"
          full
        />
      </div>
    </div>
  )
}