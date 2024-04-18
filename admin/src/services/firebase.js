import {uploadBytes, ref, getDownloadURL} from "firebase/storage";
import {storage} from "@/firebase"
const firebaseService = {
    upload: async (file) => {
        const storageRef = ref(storage,'products/' + file.name + new Date().toString());
        await uploadBytes(storageRef, file);
        const data = getDownloadURL(storageRef)
        return data;
    }
}
export default firebaseService
