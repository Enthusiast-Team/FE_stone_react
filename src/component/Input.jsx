import React, { Component } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import {
  getStorage,
  uploadBytes,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import { Fire } from "../config/firebase";

export default class Input extends Component {
  state = {
    JudulArtikel: "",
    GambarArtikel1: null,
    IsiArtikel1: "",
    GambarArtikel2: null,
    IsiArtikel2: "",
    formErrors: {
      JudulArtikel: "",
      GambarArtikel1: "",
      IsiArtikel1: "",
      GambarArtikel2: "",
      IsiArtikel2: "",
    },
    formValid: false,
  };
  validateForm() {
    const {
      JudulArtikel,
      GambarArtikel1,
      IsiArtikel1,
      GambarArtikel2,
      IsiArtikel2,
    } = this.state;
    const formErrors = {
      JudulArtikel: "",
      GambarArtikel1: "",
      IsiArtikel1: "",
      GambarArtikel2: "",
      IsiArtikel2: "",
    };

    let formValid = true;
    if (!JudulArtikel) {
      formErrors.JudulArtikel = "Judul Artikel wajib diisi";
      formValid = false;
    }
    if (!GambarArtikel1) {
      formErrors.GambarArtikel1 = "GambarArtikel1 wajib diisi";
      formValid = false;
    }
    if (!IsiArtikel1) {
      formErrors.IsiArtikel1 = "Asal Perguruan Tinggi wajib diisi";
      formValid = false;
    }
    if (!GambarArtikel2) {
      formErrors.GambarArtikel2 = "Link Drive Bukti Pembayaran";
      formValid = false;
    }
    if (!IsiArtikel2) {
      formErrors.IsiArtikel2 = "No. WhatsApp Ketua wajib diisi";
      formValid = false;
    }

    this.setState({ formErrors });
    return formValid;
  }
  handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      // Jika input adalah file, simpan file
      this.setState({ [name]: e.target.files[0] });
    } else {
      // Jika bukan file, simpan nilai biasa
      this.setState({ [name]: value });
    }
  };
  handleSaveArtikel = async () => {
    const {
      JudulArtikel,
      GambarArtikel1,
      IsiArtikel1,
      GambarArtikel2,
      IsiArtikel2,
    } = this.state;
  
    if (this.validateForm()) {
      const db = getDatabase(Fire);
      const workshopRef = ref(db, "Artikel" + "/");
      const newWorkshopRef = push(workshopRef);
  
      const storage = getStorage();
      
      // Proses upload gambar pertama
      const storageReference1 = storageRef(storage, `/gambar1_${JudulArtikel}`);
      await uploadBytes(storageReference1, GambarArtikel1);
      const downloadURL1 = await getDownloadURL(storageReference1);
  
      // Proses upload gambar kedua
      const storageReference2 = storageRef(storage, `/gambar2_${JudulArtikel}`);
      await uploadBytes(storageReference2, GambarArtikel2);
      const downloadURL2 = await getDownloadURL(storageReference2);
  
      const newData = {
        JudulArtikel,
        IsiArtikel1,
        GambarArtikel1: downloadURL1, // URL gambar pertama
        IsiArtikel2,
        GambarArtikel2: downloadURL2, // URL gambar kedua
      };
  
      set(newWorkshopRef, newData)
        .then(() => {
          console.log("Data berhasil disimpan ke Firebase");
          // window.location.href = "/success";
        })
        .catch((error) => {
          console.error("Gagal menyimpan data ke Firebase:", error);
        });
    } else {
      console.error("Form tidak valid. Mohon periksa kembali.");
    }
  };
  

  handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    const {
      JudulArtikel,
      GambarArtikel1,
      IsiArtikel1,
      GambarArtikel2,
      IsiArtikel2,
    } = this.state;

    return (
      <div className="mt-32">
        <input
          type="text"
          id="JudulArtikel"
          name="JudulArtikel"
          onChange={this.handleChange}
        />
        <input
          type="file"
          id="GambarArtikel1"
          name="GambarArtikel1"
          onChange={this.handleChange}
        />
        <input
        type="file"
        id="GambarArtikel2"
        name="GambarArtikel2"
        onChange={this.handleChange}
        />
        <textarea
          id="IsiArtikel1"
          name="IsiArtikel1"
          value={IsiArtikel1}
          onChange={this.handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
        <textarea
          id="IsiArtikel2"
          name="IsiArtikel2"
          value={IsiArtikel2}
          onChange={this.handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
        <button
          onClick={this.handleSaveArtikel}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Simpan Artikel
        </button>
      </div>
    );
  }
}
