/* eslint-disable no-unused-vars */
import { getDownloadURL, listAll, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../config';
import firebaseError from '../../utils/firebaseError';

export const uploadFiles = async (folder: string, files: File[]) => {
  const promises: any[] = [];

  files.forEach((file) => {
    const storageRef = ref(storage, `${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    promises.push(uploadTask);
  });

  const result: any[] = [];
  await Promise.allSettled(promises).then((res) => {
    res.forEach((item) => {
      if (item.status === 'fulfilled') {
        result.push(item.value);
      }
    });
  });

  const urlPromises = result.map((item) => {
    const path = item.ref.toString();
    return getDownloadURL(ref(storage, path));
  });

  const urls: string[] = [];

  await Promise.allSettled(urlPromises).then((res) => {
    res.forEach((item) => {
      if (item.status === 'fulfilled') {
        urls.push(item.value);
      }
    });
  });

  return urls;
};

export const getFiles = async (folder: string, callback: (urls: string[]) => void) => {
  const listRef = ref(storage, `${folder}`);

  listAll(listRef)
    .then((res) => {
      const urlPromises = res.items.map((itemRef) => {
        const path = itemRef.toString();
        return getDownloadURL(ref(storage, path));
      });

      return Promise.allSettled(urlPromises).then((response) => {
        const urls: string[] = [];

        response.forEach((item) => {
          if (item.status === 'fulfilled') {
            urls.push(item.value);
          }
        });

        callback(urls);
      });
    })
    .catch((err) => firebaseError(err));
};
