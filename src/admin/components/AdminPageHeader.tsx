import type { LucideIcon } from "lucide-react";


interface Props {
  title:string;
  description:string;
  icon:LucideIcon;
}


const AdminPageHeader = ({
 title,
 description,
 icon:Icon
}:Props)=>{


return (

<div
className="
bg-white
rounded-2xl
p-6
shadow-sm
border
border-gray-100
"
>

<div className="flex items-center gap-4">


<div
className="
h-12
w-12
rounded-xl
bg-red-100
flex
items-center
justify-center
"
>

<Icon
size={25}
className="text-red-500"
/>

</div>



<div>

<h1
className="
text-2xl
font-bold
text-gray-800
"
>
{title}
</h1>


<p
className="
text-sm
text-gray-500
mt-1
"
>
{description}
</p>


</div>


</div>

</div>

)

}


export default AdminPageHeader;