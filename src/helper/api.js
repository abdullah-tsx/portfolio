// @ts-nocheck
import {db} from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore/lite'
import {getDownloadURL, getStorage, ref} from 'firebase/storage';

export const getProjects = async () => {

  try {
    const col = collection(db, 'projects');

    const data = await getDocs(col);

    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  } catch (e) {

  }
}

export const getCategories = async () => {
  try {
    const col = collection(db, 'categories');

    const data = await getDocs(col);
    return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  } catch (e) {
  }
}

export const getInfo = async () => {
  try {
    const col = collection(db, 'info');

    const data = await getDocs(col);
    const dataArray = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    const storage = getStorage();

    const url = await getDownloadURL(ref(storage, 'Abdullah_Resume.pdf'));
    return {
      name: dataArray[0].name,
      phone: dataArray[0].phone,
      email: dataArray[0].email,
      linkedin: dataArray[0].linkedin,
      github: dataArray[0].github,
      skills: dataArray[0].skills,
      resume: url
    };
  } catch (e) {

  }


}