import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddSermonForm from "../form/Sermon";
import uploadFile from "../utils/UploadFile";
import { updateSermon, getSingleSermon } from "../services/sermonService";
import useApi from "../hooks/useApi";
import type { SermonFormInputs } from "../form/Sermon";

const EditSermonPage = () => {
  const { id } = useParams();
  const { request, loading } = useApi();

  const [sermon, setSermon] = useState<any>(null);

  useEffect(() => {
    const fetchSermon = async () => {
      const res = await getSingleSermon(id!);
      setSermon(res.data.data);
    };

    fetchSermon();
  }, [id]);

  const handleEditSermon = async (data: SermonFormInputs) => {
    await request(async () => {

      const [imageUrl, audioUrl] = await Promise.all([
        data.image?.[0]
          ? uploadFile(data.image[0], "image")
          : sermon.imageUrl,

        data.audio?.[0]
          ? uploadFile(data.audio[0], "audio")
          : sermon.audioUrl,
      ]);

      return updateSermon(id!, {
        title: data.title,
        scripture: data.scripture,
        preacher: data.preacher,
        category: data.category,
        date: data.date,
        duration: Number(data.duration),
        imageUrl,
        audioUrl,
      });

    }, "Sermon updated successfully!");
  };

  if (!sermon) {
    return <p>Loading sermon...</p>;
  }

  return (
    <AddSermonForm
      onSubmit={handleEditSermon}
      loading={loading}
      defaultValues={sermon}
    />
  );
};

export default EditSermonPage;