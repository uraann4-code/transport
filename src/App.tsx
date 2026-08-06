import React, { useRef } from 'react';
import { Download } from 'lucide-react';

export default function App() {
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
    <div className="min-h-screen bg-gray-200 py-10 flex flex-col items-center justify-center px-4 font-sans text-gray-900 print:bg-white print:py-0">
      <div className="w-full max-w-[800px] flex justify-end mb-4 print:hidden">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-xs font-bold rounded shadow-lg shadow-blue-200 uppercase tracking-widest hover:bg-blue-700 transition-colors"
        >
          <Download size={16} />
          Download / Print PDF
        </button>
      </div>

      <div className="bg-white shadow-xl max-w-[800px] w-full p-12 sm:p-16 text-[15px] leading-relaxed relative print:shadow-none print:p-0 print:m-0 print:w-full print:max-w-full">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[17px] mb-2 font-normal">BU TRANSPORT REQUISITION FORM (WITHIN STATION)</h1>
          <p className="text-[15px]">(To reach the Transport Officer in duplicate not less than 24 hours in advance).</p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <div className="flex gap-4 mb-2">
            <span className="w-4">a.</span>
            <span>Transport Officer</span>
          </div>
          
          <div className="flex items-end gap-4 mb-6">
            <span className="w-4">b.</span>
            <span className="whitespace-nowrap">MT pool of....</span>
            <input type="text" className="border-b border-dotted border-gray-400 focus:outline-none w-32 bg-transparent pb-0.5" />
          </div>
          
          <p className="mb-4">Request transport be provided as under:</p>

          <div className="space-y-4 pl-4">
            <div className="flex items-end gap-2">
              <span className="w-6">c</span>
              <span className="whitespace-nowrap">Date and time on which required</span>
              <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
            </div>
            
            <div className="flex items-end gap-2">
              <span className="w-6">d.</span>
              <span className="whitespace-nowrap">Type of vehicle required</span>
              <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
            </div>

            <div className="flex items-end gap-2">
              <span className="w-6">e.</span>
              <span className="whitespace-nowrap">Nature of Duty</span>
              <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
            </div>

            <div className="flex items-end gap-2">
              <span className="w-6">f</span>
              <span className="whitespace-nowrap">Destination with routes</span>
              <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
            </div>

            <div className="flex items-end gap-2">
              <span className="w-6">g.</span>
              <span className="whitespace-nowrap">Duration for which required</span>
              <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
            </div>
          </div>
        </div>

        {/* Signatures part 1 */}
        <div className="flex flex-col items-end mt-16 mb-16 space-y-4">
           <div className="flex items-end gap-4 w-72">
             <span className="whitespace-nowrap">Signature</span>
             <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
           </div>
           <div className="flex items-end gap-4 w-72">
             <span className="whitespace-nowrap">Designation</span>
             <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
           </div>
        </div>

        {/* Part II */}
        <div className="mt-12">
          <p className="mb-6">For use of Transport Officer</p>
          <div className="text-center mb-8">PART-II</div>
          
          <div className="space-y-6">
            <div className="flex items-end gap-2 w-full">
              <span className="w-4">a.</span>
              <span className="whitespace-nowrap">Transport No.</span>
              <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
              <span className="whitespace-nowrap">has been booked.</span>
            </div>

            <div className="flex items-end gap-2 w-full">
               <span className="w-4">b.</span>
               <span className="whitespace-nowrap">Transport not available due to</span>
               <input type="text" className="border-b border-black focus:outline-none flex-grow bg-transparent pb-0.5" />
            </div>
            
            <div className="w-full pl-6">
               <input type="text" className="border-b border-black focus:outline-none w-full bg-transparent mt-2 pb-0.5" />
            </div>
          </div>
        </div>

        {/* MTO Signature */}
        <div className="flex justify-end mt-20 mb-12 mr-12">
          <div className="w-32 text-center flex flex-col items-center">
            <span className="text-gray-900">MTO</span>
          </div>
        </div>

        {/* Approval */}
        <div className="text-center mt-12 mb-20 font-semibold">
           Approved/Not Approved
        </div>

        {/* Director Signature */}
        <div className="flex justify-center mt-16">
          <div className="w-48 text-center flex flex-col items-center">
            <span className="text-gray-900">Director</span>
          </div>
        </div>

      </div>
    </div>
  );
}


