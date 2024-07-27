"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export function ChatPage() {
  const [destinationSelected] = useState(
    (typeof window !== undefined &&
      localStorage?.getItem("destinationSelected") &&
      JSON.parse(localStorage?.getItem("destinationSelected") as any)) ??
      null
  );

  console.log({ destinationSelected });
  const [messages, setMessages] = useState([
    {
      text: "Gilaakkk naik busway soalnya itu, trs jakarta udh pasti macet jg",
      sender: "other",
    },
    { text: "Oouh gituuu", sender: "me" },
    { text: "Ga telat kahh", sender: "me" },
    {
      text: "aku bebas sih berangkatnya yg penting ngantor wkwkwkw",
      sender: "me",
    },
    { text: "biasanya berangkat jam 8 nyampe setengah 10", sender: "me" },
    {
      text: "soalnya nunggu sepi dulu biar ga lama bgt di jalan",
      sender: "me",
    },
    { text: "Jam masuk kantor jam brp emgnya", sender: "me" },
    { text: "kalo absen harus jam 8 atau sblm", sender: "me" },
    { text: "absen online lewat app", sender: "me" },
    { text: "kalo ngantor tapi tim tech bebas sih ke kantornya", sender: "me" },
    { text: "yg penting absen on time", sender: "me" },
    { text: "Oouh gituuu", sender: "other" },
    { text: "iya betul gitu", sender: "me" },
  ]);
  // const handleSend = async () => {
  //   if (message.trim() !== '') {
  //     try {
  //       const chatDocRef = doc(db, 'chats', chatDocId);
  //       const messageData = {
  //         sender: 'patient',
  //         date: new Date(),
  //         message: message,
  //       };
  //       await updateDoc(chatDocRef, {
  //         messages: arrayUnion(messageData),
  //       });
  //       setMessage('');
  //     } catch (error) {
  //       console.error('Error sending message:', error);
  //     }
  //   }
  // };

  // const createChatDocument = async () => {
  //   setLoading(true);
  //   const chatDB = collection(db, "chats");
  //   try {
  //     const querySnapshot = await getDocs(chatDB);
  //     const numberOfDocuments = querySnapshot.size;
  //     const docRef = await addDoc(chatDB, {
  //       status: true,
  //       created: new Date(),
  //       patient: numberOfDocuments + 1,
  //       messages: [{ "sender": "doctor", "date": new Date(), "message": "Hai kami telah membaca hasil pradiagnosamu. Adakah hal selain dari fitur Pradiagnosa yang ingin kamu sampaikan?" }]
  //     });
  //     setChatDocId(docRef.id);
  //     const newDocRef = doc(db, 'chats', docRef.id);
  //     onSnapshot(newDocRef, (snapshot) => {
  //       const updatedData = snapshot.data();
  //       setChats(updatedData.messages);
  //       setLoading(false)
  //     });
  //   } catch (error) {
  //     console.error('Error adding document:', error);
  //   }
  // };
  // useEffect(() => {
  //   createChatDocument();
  //   return () => {
  //     unmountComponent();
  //   };
  // }, []);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "me" }]);
      setInputValue("");
    }
  };

  const [isMinimize, setIsMinimize] = useState(false);

  return (
    <>
      {destinationSelected && (
        <div className="max-w-[420px] absolute top-[80px] left-1/2 transform -translate-x-1/2">
          <div className="w-[320px] flex justify-end">
            <div
              className={`bg-green-500 p-[16px] rounded-[10px] ${
                !isMinimize ? "w-[320px]" : ""
              }`}
            >
              <div className="w-full flex justify-end">
                <Button
                  variant="outline"
                  className="!w-fit !p-[8px]"
                  onClick={() => {
                    setIsMinimize(!isMinimize);
                  }}
                >
                  {!isMinimize ? (
                    <Icon
                      icon="ic:outline-minus"
                      className="text-teal-900"
                      fontSize={14}
                    />
                  ) : (
                    <Icon
                      icon="ic:baseline-plus"
                      className="!w-fit text-teal-900"
                      fontSize={14}
                    />
                  )}
                </Button>
              </div>

              {!isMinimize && (
                <>
                  <p className="text-xl text-white text-center mb-[8px]">
                    {destinationSelected?.name}
                  </p>

                  <div className="p-[4px] ">
                    <p className="text-xl text-white text-center">
                      {destinationSelected?.startTime || ""} -{" "}
                      {destinationSelected?.endTime || ""}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto max-w-[420px] py-3">
        <div className="flex flex-col h-screen">
          <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
            <h2>Sakikoo</h2>
            <button className="text-2xl">•••</button>
          </div>
          <div className="flex-1 p-4 overflow-y-scroll bg-gray-100">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-4/5 p-4 border border-gray-200 rounded-lg ${
                    message.sender === "me"
                      ? "bg-yellow-300 self-end"
                      : "bg-white self-start"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex p-4 bg-white border-t border-gray-200">
            <input
              type="text"
              placeholder="gimana kalo kita jalan?"
              className="flex-1 p-2 border border-gray-200 rounded-lg mr-4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="bg-green-500 text-white p-2 rounded-lg"
              onClick={handleSendMessage}
            >
              Ask AI
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
