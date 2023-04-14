import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Define the path to the resume PDF file
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');

    // Read the resume PDF file and stream it to the response
    const fileStream = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    fileStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
