import { Upload, Image as LucideImage, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ThumbnailUploader = () => {
    const [thumbnailFiles, setThumbnailFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setThumbnailFiles((prev) => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setThumbnailFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-3">
            <label className="block text-base font-semibold text-gray-800">
                Upload Thumbnails (Multiple)
            </label>

            {/* Upload Area */}
            <div className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="thumbnail-upload"
                />
                <label
                    htmlFor="thumbnail-upload"
                    className="flex flex-col items-center justify-center w-full cursor-pointer"
                >
                    <Upload className="w-8 h-8 mb-3 text-gray-500" />
                    <p className="text-sm text-gray-600">
                        <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">Supports: PNG, JPG, JPEG, WEBP</p>
                </label>
            </div>

            {/* Preview Uploaded Files */}
            {thumbnailFiles.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                    {thumbnailFiles.map((file, index) => (
                        <div key={index} className="relative group">
                            <div className="overflow-hidden rounded-lg aspect-video bg-gray-200 flex items-center justify-center">
                                {file.type.startsWith('image/') ? (
                                    <Image
                                        src={URL.createObjectURL(file)}
                                        alt={`Preview ${index}`}
                                        width={300}   // atau sesuai kebutuhan
                                        height={170}  // sesuaikan aspect ratio
                                        className="object-cover w-full h-full"
                                    />

                                ) : (
                                    <LucideImage className="w-10 h-10 text-gray-400" />
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="absolute top-1 right-1 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X className="w-3 h-3 text-white" />
                            </button>
                            <p className="mt-1 text-xs text-gray-600 truncate">
                                {file.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ThumbnailUploader;