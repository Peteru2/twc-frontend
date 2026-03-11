import { Link } from "react-router";

interface Props {
  title: string;
  link:string;
  items: any[];
  renderItem: (item: any) => React.ReactNode;
}

const RecentList = ({ title, link, items, renderItem }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <Link to={link} className="text-red-500 text-sm font-medium cursor-pointer hover:underline">
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border-b pb-3 last:border-none"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentList;