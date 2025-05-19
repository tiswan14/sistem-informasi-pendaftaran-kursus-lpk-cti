import { Kursus } from '@/app/generated/prisma'
import React from 'react'

type EditKursusFormProps = {
    kursus: Kursus;
    instruktur: Kursus;
};

const EditKursusForm: React.FC<EditKursusFormProps> = ({ kursus, instruktur }) => {
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Edit Kursus</h1>
            <h2>{kursus.nama}</h2>
            {/* Kamu bisa lanjutkan form-nya di bawah ini */}
        </div>
    )
}

export default EditKursusForm;
