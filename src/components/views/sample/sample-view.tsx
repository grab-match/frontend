export function ItenaryPage() {
  return (
    <section className=" mx-auto max-w-[325px] py-3">
      <div className="flex flex-col h-screen bg-gray-100 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-bold">20.42</div>
          <div className="text-lg font-bold">Set preferred</div>
          <div className="text-sm">4G</div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-2xl font-bold text-center mb-2">Hello Qosim, ready to match?</h1>
          <p className="text-center">Atur lokasi sampai kesukaanmu agar lebih mudah dan cepat dalam mencari GrabMatch!</p>
          <img src="/path/to/image.png" alt="Illustration" className="my-4" />
        </div>

        {/* What are you looking for */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">What are you looking for?</h2>
          <p>singkat saja ayo pacaran😭</p>
          <div className="flex items-center bg-green-500 text-white p-2 rounded mb-4">
            <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-8 8v5a3 3 0 003 3h2a3 3 0 003-3v-5m4 0V7a2 2 0 00-2-2h-3M7 12V7a2 2 0 00-2-2H2m20 0h-3a2 2 0 00-2 2v5m0 0v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5m0 0h4" />
            </svg>
            <span>Jadwalin GoCar</span>
          </div>
        </div>

        {/* Pickup Point */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Pickup Point</h2>
          <div className="bg-white p-4 rounded shadow mb-4">
            <p>jalan taman ayun 2 no 14 pagar putih ada...</p>
            <p>4.717.273 bytes</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Looks like you need to save your personal info first</h2>
          <p>This help your match candidate know you better</p>
          <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Profile strength</span>
              <span>80% complete</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">165 cm</span>
              <span className="mr-2">In college</span>
              <span className="mr-2">Woman</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="mr-2">Virgo</span>
              <span className="mr-2">Muslim</span>
              <button className="bg-gray-200 p-2 rounded">Add Filter</button>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Interests</h2>
          <p>Get specific about the things you love.</p>
          <div className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-center mb-4">
              <span>Favorite interest</span>
              <button className="bg-gray-200 p-2 rounded">Edit</button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 p-2 rounded">Philosophy</span>
              <span className="bg-gray-200 p-2 rounded">Cafe-hopping</span>
              <span className="bg-gray-200 p-2 rounded">Comedy</span>
              <span className="bg-gray-200 p-2 rounded">Rock</span>
              <span className="bg-gray-200 p-2 rounded">Coffee</span>
            </div>
          </div>
        </div>

        {/* Save & Matchmaking */}
        <div className="flex justify-between">
          <button className="bg-green-500 text-white w-full py-2 rounded mb-2">Save & Matchmaking</button>
        </div>
      </div>
    </section>
  );
}
