import AddSermonForm from "../form/Sermon";
import uploadFile from "../utils/UploadFile";
import type { SermonFormInputs } from "../form/Sermon";
import useApi from "../hooks/useApi";
import { addSermon } from "../services/sermonService";
import AdminPageHeader from "../components/AdminPageHeader";
import { Mic2 } from "lucide-react";
import { useState } from "react";


const AddSermonPage = () => {

  const { request, loading } = useApi();

  const [uploading,setUploading] = useState(false);



  const handleAddSermon = async (
    data:SermonFormInputs
  ) => {


    await request(async()=>{


      setUploading(true);


      try {


        const [imageUrl,audioUrl] = await Promise.all([


          data.image?.[0]

          ? uploadFile(
              data.image[0],
              "image"
            )

          : "",



          data.audio?.[0]

          ? uploadFile(
              data.audio[0],
              "audio"
            )

          : ""


        ]);



        return addSermon({

          title:data.title,

          scripture:data.scripture,

          preacher:data.preacher,

          category:data.category,

          date:data.date,

          duration:Number(data.duration),

          imageUrl,

          audioUrl,

        });


      }finally{

        setUploading(false);

      }


    },
    
    "Sermon added successfully!");

  };





return (

<div className="p-8 space-y-6">


<AdminPageHeader

title="Add Sermon"

description="Upload and publish a new sermon for members to access"

icon={Mic2}

/>



<div
className="
bg-white
rounded-2xl
border
border-gray-100
shadow-sm
p-6
"
>


{
uploading && (

<div
className="
mb-6
rounded-xl
bg-blue-50
border
border-blue-100
p-4
flex
items-center
gap-3
"
>

<div
className="
w-5
h-5
rounded-full
border-2
border-blue-500
border-t-transparent
animate-spin
"
/>


<div>

<p className="font-medium text-blue-700">

Uploading sermon files...

</p>


<p className="text-sm text-blue-500">

Please wait while images and audio are being processed.

</p>


</div>


</div>

)
}



<AddSermonForm

onSubmit={handleAddSermon}

loading={loading || uploading}

/>


</div>


</div>

)

};


export default AddSermonPage;