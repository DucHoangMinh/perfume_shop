import {uploadBytes, ref, getDownloadURL, deleteObject} from "firebase/storage";
import {storage} from "@/firebase"
const firebaseService = {
    upload: async (file) => {
        const storageRef = ref(storage,'products/' + file.name + new Date().toString());
        await uploadBytes(storageRef, file);
        const data = getDownloadURL(storageRef)
        return data;
    },
    deleteImagesList: async (imagesLinkList) => {
       for (const item of imagesLinkList) {
        const imageRef = ref(storage, item)
        await deleteObject(imageRef)
          .then()
         .catch(err => {
            console.log(err)
          })
      }
    }
}
export default firebaseService
