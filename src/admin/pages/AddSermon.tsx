
import AddSermonForm from "../form/Sermon";
import uploadFile from "../utils/UploadFile";
import type { SermonFormInputs } from "../form/Sermon";
import useApi from "../hooks/useApi";
import { addSermon } from "../services/sermonService";


const AddSermonPage = () => {
    const { request, loading } = useApi();

    const handleAddSermon = async (data: SermonFormInputs) => {
  await request(async () => {
    const [imageUrl, audioUrl] = await Promise.all([
      data.image?.[0] ? uploadFile(data.image[0], "image") : "",
      data.audio?.[0] ? uploadFile(data.audio[0], "audio") : "",
    ]);

    return addSermon({
      title: data.title,
      scripture: data.scripture,
      preacher: data.preacher,
      category: data.category,
      date: data.date,
      duration: Number(data.duration),
      imageUrl,
      audioUrl,
    });
  }, "Sermon added successfully!");
};






  return <AddSermonForm onSubmit={handleAddSermon} loading={loading} />;
};

export default AddSermonPage;