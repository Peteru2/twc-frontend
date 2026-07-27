import { useState } from "react";
import { Inbox, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import DataModal from "./DataModal";

interface Column {
label: string;
key: string;
render?: (row: any) => React.ReactNode;
}

interface Field {
label: string;
key: string;
}

interface Props {
title: string;
data: any[];
columns: Column[];
modalFields: Field[];
}

const AdminTable = ({ title, data, columns, modalFields }: Props) => {
const [selected, setSelected] = useState<any>(null);

return (
<div className="space-y-6">

{/* Table Card */}

<div
className="
bg-white
rounded-2xl
border
border-gray-100
shadow-sm
overflow-hidden
"
>
{data.length === 0 ? (
<div
className="
py-20
flex
flex-col
items-center
justify-center
text-center
"
>
<div
className="
w-16
h-16
rounded-full
bg-gray-100
flex
items-center
justify-center
mb-4
"
>
<Inbox className="text-gray-400" />
</div>

<h3
className="
font-semibold
text-gray-700
"
>
No {title} found
</h3>

<p
className="
text-sm
text-gray-400
mt-2
"
>
New records will appear here when available.
</p>
</div>
) : (
<div
className="
overflow-x-auto
"
>
<table
className="
w-full
text-sm
"
>
<thead>
<tr
className="
bg-gray-50
border-b
border-gray-100
"
>
{columns.map((col) => (
<th
key={col.key}
className="
px-6
py-4
text-left
font-semibold
text-gray-500
uppercase
text-xs
tracking-wide
"
>
{col.label}
</th>
))}

<th
className="
px-6
py-4
"
></th>
</tr>
</thead>

<tbody>
{data.map((row, index) => (
<motion.tr
key={row._id}
initial={{
opacity: 0,
y: 10,
}}
animate={{
opacity: 1,
y: 0,
}}
transition={{
delay: index * 0.03,
}}
onClick={() => setSelected(row)}
className="
group
border-b
border-gray-100
hover:bg-gray-50
cursor-pointer
transition
"
>
{columns.map((col) => (
<td
key={col.key}
className="
px-6
py-5
text-gray-700
"
>
{col.render ? col.render(row) : (row[col.key] ?? "-")}
</td>
))}

<td
className="
px-6
py-5
"
>
<div
className="
w-8
h-8
rounded-full
bg-gray-100
flex
items-center
justify-center
group-hover:bg-red-100
transition
"
>
<ChevronRight
size={16}
className="
text-gray-400
group-hover:text-red-500
"
/>
</div>
</td>
</motion.tr>
))}
</tbody>
</table>
</div>
)}
</div>

{selected && (
<DataModal
title={title}
data={selected}
fields={modalFields}
onClose={() => setSelected(null)}
/>
)}
</div>
);
};

export default AdminTable;
