"use client"
import ButtonAuth from "../button"
import Link from "next/link"
import { useActionState } from "react"
import { RegisterCredentials } from "@/lib/action"

const FormRegister = () => {
    const [state, formAction] = useActionState(RegisterCredentials, null)
    return (
        <form action={formAction} className="space-y-6">

            {/* Pesan umum */}
            {state?.message ? (
                <div className="p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                    <span>{state?.message}</span>
                </div>
            ) : null}

            {/* Nama */}
            <div>
                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukkan nama lengkap"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.nama}</span>
                </div>
            </div>

            {/* NIK */}
            <div>
                <label htmlFor="nik" className="block mb-2 text-sm font-medium text-gray-900">NIK</label>
                <input type="number" name="nik" placeholder="Masukkan NIK"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.nik}</span>
                </div>
            </div>

            {/* Jenis Kelamin */}
            <div className="mb-4">
                <legend className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Kelamin
                </legend>

                <div className="flex gap-6">
                    <div className="flex items-center">
                        <input
                            id="jenisKelamin-laki"
                            name="jenisKelamin"
                            type="radio"
                            value="Laki-laki"
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                            htmlFor="jenisKelamin-laki"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Laki-laki
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="jenisKelamin-perempuan"
                            name="jenisKelamin"
                            type="radio"
                            value="Perempuan"
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label
                            htmlFor="jenisKelamin-perempuan"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Perempuan
                        </label>
                    </div>
                </div>

                {state?.error?.jenisKelamin && (
                    <p className="mt-1 text-sm text-red-600" id="jenisKelamin-error">
                        {state.error.jenisKelamin}
                    </p>
                )}
            </div>

            {/* Tempat Lahir */}
            <div>
                <label htmlFor="tempatLahir" className="block mb-2 text-sm font-medium text-gray-900">Tempat Lahir</label>
                <input type="text" name="tempatLahir" placeholder="Contoh: Tasikmalaya"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.tempatLahir}</span>
                </div>
            </div>

            {/* Tanggal Lahir */}
            <div>
                <label htmlFor="tanggalLahir" className="block mb-2 text-sm font-medium text-gray-900">Tanggal Lahir</label>
                <input type="date" name="tanggalLahir"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.tanggalLahir}</span>
                </div>
            </div>

            {/* Media Sosial */}
            <div>
                <label htmlFor="mediaSosial" className="block mb-2 text-sm font-medium text-gray-900">Media Sosial</label>
                <input type="text" name="mediaSosial" placeholder="Contoh: IG @nama / FB Nama Lengkap"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.mediaSosial}</span>
                </div>
            </div>

            {/* No HP / WA */}
            <div>
                <label htmlFor="noHp" className="block mb-2 text-sm font-medium text-gray-900">No Handphone / WA</label>
                <input type="text" name="noHp" placeholder="08xxxxxxxxxx"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.noHp}</span>
                </div>
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" placeholder="contoh@email.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.email}</span>
                </div>
            </div>

            {/* Password */}
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" placeholder="Buat password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.password}</span>
                </div>
            </div>

            {/* Agama */}
            <div>
                <label htmlFor="agama" className="block mb-2 text-sm font-medium text-gray-900">
                    Agama
                </label>
                <select
                    name="agama"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
                >
                    <option value="">-- Pilih Agama --</option>
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Konghucu">Konghucu</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.agama}</span>
                </div>
            </div>



            {/* Jurusan */}
            <div>
                <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-gray-900">Jurusan</label>
                <select name="jurusan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5">
                    <option value="">-- Pilih Jurusan --</option>
                    <option value="Networking">Networking</option>
                    <option value="Pemrograman">Pemrograman</option>
                    <option value="Multimedia">Multimedia</option>
                    <option value="GraphicDesign">Graphic Design</option>
                    <option value="AdministrasiPerkantoran">Administrasi Perkantoran</option>
                    <option value="DigitalMarketing">Digital Marketing</option>
                    <option value="Akuntansi">Akuntansi</option>
                    <option value="AutoCAD">AutoCAD</option>
                </select>
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.jurusan}</span>
                </div>
            </div>

            {/* Tahun Akademik */}
            <div>
                <label htmlFor="tahunAkademik" className="block mb-2 text-sm font-medium text-gray-900">Tahun Akademik</label>
                <input type="text" name="tahunAkademik" placeholder="Contoh: 2024/2025"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
                <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-red-500">{state?.error?.tahunAkademik}</span>
                </div>
            </div>

            {/* Tombol Daftar */}
            <ButtonAuth label="Daftar" />

            {/* Link Login */}
            <p className="text-sm text-center font-light text-gray-500">
                Sudah punya akun?
                <Link href="/login">
                    <span className="font-medium pl-1 text-blue-600 hover:text-blue-800 hover:underline transition duration-200 cursor-pointer">
                        Login
                    </span>
                </Link>
            </p>
        </form>
    )
}

export default FormRegister
