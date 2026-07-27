import { Link } from "react-router-dom";
import { ArrowRight, Inbox } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  link: string;
  items: any[];
  renderItem: (item: any) => React.ReactNode;
  emptyMessage: string;
}

const RecentList = ({
  title,
  link,
  items,
  renderItem,
  emptyMessage,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
        bg-white 
        rounded-2xl 
        border 
        border-gray-100
        shadow-sm 
        hover:shadow-md
        transition-shadow
        p-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>

          <p className="text-xs text-gray-400 mt-1">
            Latest updates and activities
          </p>
        </div>

        <Link
          to={link}
          className="
            group
            flex
            items-center
            gap-1
            text-sm
            font-medium
            text-red-500
            hover:text-red-600
            transition
          "
        >
          View All
          <ArrowRight
            size={15}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Content */}

      {items.length === 0 ? (
        <div
          className="
              flex
              flex-col
              items-center
              justify-center
              py-10
              text-center
              rounded-xl
              bg-gray-50
            "
        >
          <div
            className="
                w-12
                h-12
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                shadow-sm
                mb-3
              "
          >
            <Inbox size={22} className="text-gray-400" />
          </div>

          <p className="text-sm font-medium text-gray-600">{emptyMessage}</p>

          <p className="text-xs text-gray-400 mt-1">
            New activities will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="
                    group
                    rounded-xl
                    p-4
                    hover:bg-gray-50
                    transition
                    border
                    border-transparent
                    hover:border-gray-100
                  "
            >
              {renderItem(item)}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default RecentList;
