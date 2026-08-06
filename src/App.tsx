import React, { useRef, useState } from 'react';
import { Download, Loader2, Info } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showIframeNotice, setShowIframeNotice] = useState(false);

  const handlePrint = () => {
    // If we are inside an iframe (like the AI Studio preview window), 
    // downloads and printing might be silently blocked by the browser's security sandbox.
    if (window.self !== window.top) {
      alert("⚠️ PREVIEW RESTRICTION ⚠️\n\nTo download or print this form as a PDF, you must open it in a full browser tab.\n\nPlease click the 'Open in new tab' icon (↗) at the top right of this preview window, then click the Download button again.");
      return;
    }

    // Use native browser print which allows "Save as PDF" in high quality
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-4 sm:p-8 font-sans text-[#111827] overflow-y-auto print:bg-white print:p-0">
      <div className="w-full max-w-[850px] flex flex-col items-end gap-3 mb-4 print:hidden">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-xs font-bold rounded shadow-lg shadow-blue-200 uppercase tracking-widest hover:bg-blue-700 transition-colors"
        >
          <Download size={16} />
          Download / Print PDF
        </button>
      </div>
      <div ref={formRef} className="bg-white shadow-2xl rounded-xl border border-gray-200 max-w-[850px] w-full p-6 sm:p-8 sm:px-12 flex flex-col gap-3 relative print:shadow-none print:border-none print:p-0 print:m-0 print:h-screen print:w-full">
        
        {/* Header */}
        <div className="flex flex-col text-center border-b border-gray-200 pb-3 mb-1">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 mb-1">BU TRANSPORT REQUISITION FORM (WITHIN STATION)</h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-medium italic">(To reach the Transport Officer in duplicate not less than 24 hours in advance).</p>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold text-gray-600 w-4">a.</span>
            <span className="text-[11px] font-bold uppercase text-gray-600">Transport Officer</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold text-gray-600 w-4">b.</span>
            <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap">MT pool of</span>
            <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 w-64 print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
          </div>
          
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 flex items-center gap-2 mt-1 print:text-black">
            <span className="w-4 h-[1px] bg-blue-600 print:bg-black"></span> Request transport be provided as under:
          </h2>

          <div className="grid grid-cols-1 gap-y-2 mt-1">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold text-gray-600 w-4">c.</span>
              <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap w-64">Date and time on which required</span>
              <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold text-gray-600 w-4">d.</span>
              <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap w-64">Type of vehicle required</span>
              <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold text-gray-600 w-4">e.</span>
              <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap w-64">Nature of Duty</span>
              <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold text-gray-600 w-4">f.</span>
              <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap w-64">Destination with routes</span>
              <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold text-gray-600 w-4">g.</span>
              <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap w-64">Duration for which required</span>
              <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
            </div>
          </div>
        </div>

        {/* Signatures part 1 */}
        <div className="flex flex-col items-end mt-4 mb-2 space-y-3">
           <div className="flex items-center gap-4 w-72">
             <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap w-20">Signature</span>
             <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
           </div>
           <div className="flex items-center gap-4 w-72">
             <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap w-20">Designation</span>
             <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
           </div>
        </div>

        {/* Part II */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-4">
          <p className="text-[11px] font-bold uppercase text-gray-400 text-center tracking-widest print:text-black">For use of Transport Officer</p>
          <div className="text-center text-xs font-black uppercase tracking-[0.2em] text-blue-600 flex justify-center items-center gap-2 mb-1 print:text-black">
            <span className="w-6 h-[1px] bg-blue-600 print:bg-black"></span> PART-II <span className="w-6 h-[1px] bg-blue-600 print:bg-black"></span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4 w-full">
              <span className="text-[11px] font-bold text-gray-600 w-4">a.</span>
              <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap">Transport No.</span>
              <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
              <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap">has been booked.</span>
            </div>

            <div className="flex items-center gap-4 w-full">
               <span className="text-[11px] font-bold text-gray-600 w-4">b.</span>
               <span className="text-[11px] font-bold uppercase text-gray-600 whitespace-nowrap">Transport not available due to</span>
               <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 flex-grow print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
            </div>
            
            <div className="w-full pl-8">
               <input type="text" className="h-8 border border-gray-300 rounded bg-gray-50 px-3 text-sm focus:outline-none focus:border-blue-600 w-full print:bg-transparent print:border-t-0 print:border-l-0 print:border-r-0 print:border-b-gray-400 print:rounded-none" />
            </div>
          </div>
        </div>

        {/* MTO Signature */}
        <div className="flex justify-end mt-8 mb-4 mr-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-40 h-8 border-b border-gray-900 relative">
              <input type="text" className="absolute bottom-1 w-full text-center bg-transparent focus:outline-none font-serif italic text-sm text-gray-800" placeholder="" />
            </div>
            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest print:text-black">MTO</label>
          </div>
        </div>

        {/* Approval */}
        <div className="text-center mt-6 mb-6 flex justify-center">
           <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-gray-700 bg-gray-100 px-6 py-2 rounded-md print:bg-transparent print:text-black print:border print:border-black">
             Approved &nbsp;/&nbsp; Not Approved
           </span>
        </div>

        {/* Director Signature */}
        <div className="flex justify-center mt-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-56 h-8 border-b border-gray-900 relative">
              <input type="text" className="absolute bottom-1 w-full text-center bg-transparent focus:outline-none font-serif italic text-sm text-gray-800" placeholder="" />
            </div>
            <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest print:text-black">Director</label>
          </div>
        </div>


      </div>
    </div>
  );
}
