export function ItenaryPage() {
  return (
    <section className=" mx-auto max-w-[325px] py-3">
      <div className="flex flex-col h-screen p-4 bg-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Alto Restaurant & Bar</h1>
          <button className="text-2xl">&times;</button>
        </div>
        <div className="text-center bg-gray-200 py-2 rounded mb-4">
          <span>08.00 - 09.00</span>
        </div>
        <div className="flex justify-between mb-4">
          <div className="bg-gray-300 h-24 w-24 rounded"></div>
          <div className="bg-gray-300 h-24 w-24 rounded"></div>
          <div className="bg-gray-300 h-24 w-24 rounded"></div>
        </div>
        <div className="mb-4">
          <div className="flex items-center bg-white p-4 rounded shadow mb-2">
            <div className="bg-green-500 h-12 w-12 rounded-full flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-8 8v5a3 3 0 003 3h2a3 3 0 003-3v-5m4 0V7a2 2 0 00-2-2h-3M7 12V7a2 2 0 00-2-2H2m20 0h-3a2 2 0 00-2 2v5m0 0v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5m0 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <div className="font-bold">08.00 - 09.00</div>
              <div>Destination Name</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow mb-2">
            <div className="bg-green-500 h-12 w-12 rounded-full flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-8 8v5a3 3 0 003 3h2a3 3 0 003-3v-5m4 0V7a2 2 0 00-2-2h-3M7 12V7a2 2 0 00-2-2H2m20 0h-3a2 2 0 00-2 2v5m0 0v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5m0 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <div className="font-bold">08.00 - 09.00</div>
              <div>Destination Name</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow mb-2">
            <div className="bg-green-500 h-12 w-12 rounded-full flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-8 8v5a3 3 0 003 3h2a3 3 0 003-3v-5m4 0V7a2 2 0 00-2-2h-3M7 12V7a2 2 0 00-2-2H2m20 0h-3a2 2 0 00-2 2v5m0 0v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5m0 0h4" />
              </svg>
            </div>
            <div className="ml-4">
              <div className="font-bold">08.00 - 09.00</div>
              <div>Destination Name</div>
            </div>
          </div>
        </div>
        <div className="flex-1 mb-4">
          <img src="/path/to/your/map/image.png" alt="Map" className="w-full h-full object-cover rounded" />
        </div>
        <div className="flex justify-between">
          <button className="bg-green-500 text-white w-full py-2 rounded mb-2">Save the Itinerary</button>
          <button className="bg-green-500 text-white w-full py-2 rounded">Regenerate Itinerary with AI</button>
        </div>
      </div>
    </section>
  );
}
