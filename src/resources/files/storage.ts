import { diskStorage } from 'multer';

const generateId = () =>
  Array.from({ length: 18 }, () =>
    Math.round(Math.random() * 16).toString(16),
  ).join('');

const normalizeFileName = (req: any, file: any, cb: any) => {
  const fileExtName = file.originalname.split('.').pop();
  cb(null, `${generateId()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
