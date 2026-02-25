const SubLabelRow = ({ labels }: { labels: string[] }) => (
  <div className="grid grid-cols-2 gap-4 mt-1 text-xs text-gray-500">
    {labels.map((label) => (
      <span key={label}>{label}</span>
    ))}
  </div>
);
export default SubLabelRow