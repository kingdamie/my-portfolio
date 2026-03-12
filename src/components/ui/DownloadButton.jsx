import { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function DownloadButton() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        setTimeout(() => {
            setIsDownloading(false);
            const link = document.createElement("a");
            link.href = "/your-cv.pdf"; // replace with your actual CV file path
            link.download = "Damilare_CV.pdf";
            link.click();
        }, 2000);
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="relative flex items-center gap-2 px-6 py-2 mt-4 font-semibold rounded-full mt-6 border border-black bg-white text-black overflow-hidden transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-70 disabled:cursor-not-allowed"
        >
            <FaCloudDownloadAlt
                className={`w-5 h-5 transition-transform duration-500 ${isDownloading ? "animate-bounce" : ""}`}
            />
            <span>{isDownloading ? "Downloading..." : "Download CV"}</span>

            {/* Loading bar */}
            {isDownloading && (
                <span className="absolute left-0 bottom-0 h-1 bg-black animate-[slide_2s_linear_forwards]"></span>
            )}
        </button>
    );
}