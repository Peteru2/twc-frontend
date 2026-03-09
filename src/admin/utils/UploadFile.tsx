import axios from "axios";

const uploadFile = async (file: File, type: "audio" | "image") => {
  try {
    const token = localStorage.getItem("token");

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

    const res = await axios.post(uploadUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data.secure_url;

  } catch (error: any) {
    console.error("Cloudinary Upload Error:", error.response?.data || error);
    throw new Error("Upload failed");
  }
};

export default uploadFile;