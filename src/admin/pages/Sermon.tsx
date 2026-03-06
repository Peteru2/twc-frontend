import axios from "axios";
import AddSermonForm from "../form/Sermon";
import type { SermonFormInputs } from "../form/Sermon";

const AddSermonPage = () => {
  const handleAddSermon = async (data: SermonFormInputs) => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("scripture", data.scripture);
      formData.append("preacher", data.preacher);
      formData.append("category", data.category);
      formData.append("date", data.date);
      formData.append("duration", data.duration.toString());
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
        // console.log("It is fine here")
        }
        console.log( data.title)
        console.log( data.scripture)
        console.log( data.preacher)
        console.log( data.category)
        console.log( data.date)
        console.log( data.image[0])
      

    //   formData.append("image", data.image[0]);
    //   formData.append("audio", data.audio[0]);

      await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/addsermon`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Sermon added successfully!");
    } catch (error: any) {
      console.dir(error);
      alert(error.response?.data?.message || "An error occured");
      console.error("FULL ERROR:", error.response?.data.message); // Check the browser console!
    alert(JSON.stringify(error.response?.data) || "Connection error");
    }
  };

  return <AddSermonForm onSubmit={handleAddSermon} />;
};

export default AddSermonPage;