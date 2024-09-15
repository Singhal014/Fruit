import React, { useEffect } from "react";
import countries from "./data";

const Translate = () => {
  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const selectTags = document.querySelectorAll("select");
    const translateBtn = document.querySelector("button");

    selectTags.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code === "en-GB"
              ? "selected"
              : ""
            : country_code === "hi-IN"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });

    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTags[0].value;
      let translateTo = selectTags[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          toText.setAttribute("placeholder", "Translation");
        });
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 min-h-screen flex items-center justify-center px-4">
      <div className="wrapper bg-white shadow-2xl rounded-lg p-8 max-w-3xl w-full transform hover:scale-105 transition-transform duration-300">
        <div className="text-input mb-8">
          <textarea
            spellCheck="false"
            className="from-text w-full h-36 p-4 rounded-lg border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 hover:shadow-lg transition-shadow duration-200 placeholder-gray-800 text-gray-900"
            placeholder="Enter text to translate..."
          ></textarea>
          <textarea
            spellCheck="false"
            readOnly
            className="to-text w-full h-36 p-4 mt-4 rounded-lg border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 hover:shadow-lg transition-shadow duration-200 placeholder-gray-800 text-gray-900"
            placeholder="Translated text will appear here..."
          ></textarea>
        </div>
        <div className="controls flex justify-between items-center mb-8">
          <div className="from flex flex-col items-start">
            <div className="icons flex space-x-4 text-2xl text-indigo-600">
              <i className="fas fa-volume-up cursor-pointer hover:text-indigo-800 transition-colors duration-300"></i>
              <i className="fas fa-copy cursor-pointer hover:text-indigo-800 transition-colors duration-300"></i>
            </div>
            <select className="mt-2 p-3 rounded-lg bg-gray-50 border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-200 text-gray-800 shadow-sm transition-colors duration-200">
            </select>
          </div>
          <div className="to flex flex-col items-start">
            <select className="p-3 rounded-lg bg-gray-50 border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-200 text-gray-800 shadow-sm transition-colors duration-200">
            </select>
            <div className="icons flex space-x-4 text-2xl mt-3 text-indigo-600">
              <i className="fas fa-volume-up cursor-pointer hover:text-indigo-800 transition-colors duration-300"></i>
              <i className="fas fa-copy cursor-pointer hover:text-indigo-800 transition-colors duration-300"></i>
            </div>
          </div>
        </div>
        <button
          className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 transform"
        >
          Translate Now
        </button>
      </div>
    </div>
  );
};

export default Translate;
