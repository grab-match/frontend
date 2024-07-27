export function ChatPage() {
  return (
    <section className=" mx-auto max-w-[325px] py-3">
      <div className="flex flex-col h-screen">
        <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
          <h2>Sakikoo</h2>
          <button className="text-2xl">•••</button>
        </div>
        <div className="flex-1 p-4 overflow-y-scroll bg-gray-100">
          <div className="flex flex-col gap-4">
            <div className="max-w-4/5 p-4 bg-white border border-gray-200 rounded-lg self-start">
              <p>Gilaakkk naik busway soalnya itu, trs jakarta udh pasti macet jg</p>
            </div>
            <div className="max-w-4/5 p-4 bg-yellow-300 rounded-lg self-end">
              <p>Oouh gituuu</p>
              <p>Ga telat kahh</p>
              <p>aku bebas sih berangkatnya yg penting ngantor wkwkwkw</p>
              <p>biasanya berangkat jam 8 nyampe setengah 10</p>
              <p>soalnya nunggu sepi dulu biar ga lama bgt di jalan</p>
              <p>Jam masuk kantor jam brp emgnya</p>
              <p>kalo absen harus jam 8 atau sblm</p>
              <p>absen online lewat app</p>
              <p>kalo ngantor tapi tim tech bebas sih ke kantornya</p>
              <p>yg penting absen on time</p>
            </div>
            <div className="max-w-4/5 p-4 bg-white border border-gray-200 rounded-lg self-start">
              <p>Oouh gituuu</p>
            </div>
            <div className="max-w-4/5 p-4 bg-yellow-300 rounded-lg self-end">
              <p>iya betul gitu</p>
            </div>
          </div>
        </div>
        <div className="flex p-4 bg-white border-t border-gray-200">
          <input type="text" placeholder="gimana kalo kita jalan?" className="flex-1 p-2 border border-gray-200 rounded-lg mr-4" />
          <button className="bg-green-500 text-white p-2 rounded-lg">Ask AI</button>
        </div>
      </div>
    </section>
  );
}
