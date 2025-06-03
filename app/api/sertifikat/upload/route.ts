import { put } from '@vercel/blob';
import { NextApiRequest, NextApiResponse } from 'next';
import multiparty from 'multiparty';
import fs from 'fs';
import { prisma } from '@/lib/prisma';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const form = new multiparty.Form();
        const { fields, files } = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) return reject(err);
                resolve({ fields, files });
            });
        });

        if (!fields.nomor || !fields.pendaftaranId) {
            return res.status(400).json({ message: 'Field nomor dan pendaftaranId wajib diisi.' });
        }

        let fileUrl = '';
        if (files.file && files.file[0]) {
            const file = files.file[0];
            const stream = fs.createReadStream(file.path);
            const contentType = file.headers['content-type'] || 'application/octet-stream';

            const blob = await put(`CTI-${Date.now()}-${file.originalFilename}`, stream, {
                access: 'public',
                contentType,
            });
            fileUrl = blob.url;

            // opsional: hapus file lokal jika perlu
            // fs.unlinkSync(file.path);
        }

        const newSertifikat = await prisma.sertifikat.create({
            data: {
                nomor: fields.nomor[0],
                fileUrl,
                pendaftaranId: fields.pendaftaranId[0],
            },
        });

        return res.status(200).json({
            success: true,
            fileUrl,
            sertifikat: newSertifikat,
        });
    } catch (error: any) {
        console.error('Upload error:', error);
        return res.status(500).json({
            message: 'Upload failed',
            error: error.message,
        });
    }
}
