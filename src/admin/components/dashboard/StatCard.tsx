import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
}

const StatCard = ({ title, value, icon: Icon, color }: Props) => {
  return (
    <div className={`p-5 rounded-xl  shadow flex justify-between ${color}`}>

      <div>
        <p className="text-sm opacity-80">{title}</p>
        <h2 className="text-3xl font-bold">{value}</h2>
      </div>

      <Icon size={30} />

    </div>
  );
};

export default StatCard;