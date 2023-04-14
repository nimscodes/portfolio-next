import axios from 'axios';
import { saveAs } from 'file-saver';

export const downloadFile = async (url, fileName) => {
  try {
    // Make a GET request to the specified URL to get the file as a Blob
    const response = await axios.get(url, {
      responseType: 'blob',
    });

    // Save the Blob as a file using the FileSaver library
    saveAs(response.data, fileName);
  } catch (error) {
    console.error(error);
  }
};
