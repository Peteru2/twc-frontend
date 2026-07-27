import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";


interface Props {
  title:string;
  value:number;
  icon:LucideIcon;
  color:string;
}


const StatCard = ({
 title,
 value,
 icon:Icon,
 color
}:Props)=>{


return (

<motion.div
initial={{opacity:0,y:15}}
animate={{opacity:1,y:0}}
className={`p-5 rounded-xl shadow flex justify-between items-center ${color}`}
>


<div>

<p className="text-sm opacity-80">
{title}
</p>


<h2 className="text-3xl font-bold">
{value}
</h2>

</div>


<Icon size={32}/>


</motion.div>

)

}


export default StatCard;