// utils/uploadFile.ts
import axios from "axios";

const uploadFile = async (file: File, type: "audio" | "image") => {
  const token = localStorage.getItem("token");
  console.log(token)
  // Get signed signature from backend
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/cloudinary-signature?type=${type}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", data.apiKey);
  formData.append("timestamp", data.timestamp);
  formData.append("signature", data.signature);
  formData.append("folder", data.folder);


const resourceType = type === "audio" ? "video" : "image";
  const uploadUrl = `https://api.cloudinary.com/v1_1/${data.cloudName}/${resourceType}/upload`;

  const res = await axios.post(uploadUrl, formData);

  return res.data.secure_url;
};

export default uploadFile;