import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageProvider";

const languages = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "nl", name: "Nederlands" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={20} />
        <span>{languages.find((lang) => lang.code === language)?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-gray-800 shadow-lg rounded-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="block px-4 py-2 w-full text-left hover:bg-gray-700 text-white"
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
