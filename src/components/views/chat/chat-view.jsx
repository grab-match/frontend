"use client";
import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../config/fireabase"; // Make sure this path is correct
import { useUserContext } from "@/contexts/UserContextProvider";
import image from "./image.png";

import Image from "next/image";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function ChatPage() {
  const router = useRouter();
  const [destinationSelected] = useState(
    (typeof window !== undefined &&
      localStorage?.getItem("destinationSelected") &&
      JSON.parse(localStorage?.getItem("destinationSelected"))) ??
      null
  );

  console.log({ destinationSelected });

  const [loading, setLoading] = useState(false);
  const [chatDocId, setChatDocId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { user } = useUserContext();

  const userEmail = localStorage.getItem("email") || "";
  const chatDB = collection(db, "chats");
  console.log(user);

  const handleSend = async () => {
    if (message.trim() !== "" && chatDocId) {
      try {
        const chatDocRef = doc(db, "chats", chatDocId);
        let name =
          userEmail === "ayusudi.abcd@gmail.com" ? "Jennie" : userEmail;
        const messageData = {
          sender: name,
          email: userEmail,
          date: new Date(),
          text: message,
        };
        await updateDoc(chatDocRef, {
          messages: arrayUnion(messageData),
        });
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const createChatDocument = async () => {
    try {
      const querySnapshot = await getDocs(chatDB);
      let docFound;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const users = data.users || [];
        if (users.some((user) => userEmail === userEmail)) {
          docFound = doc.ref;
        }
      });
      if (docFound) {
        setChatDocId(docFound.id);
        onSnapshot(docFound, (snapshot) => {
          const updatedData = snapshot.data();
          if (updatedData) {
            setMessages(updatedData.messages);
          }
          setLoading(false);
        });
      } else {
        const docRef = await addDoc(chatDB, {
          status: true,
          created: new Date(),
          users: [
            {
              email: userEmail,
              name: "John Doe",
            },
            {
              email: "ayusudi.abcd@gmail.com",
              name: "Jennie",
            },
          ],
          messages: [
            {
              sender: "Jennie",
              email: "ayusudi.abcd@gmail.com",
              date: new Date(),
              text: "Hai",
            },
          ],
        });

        setChatDocId(docRef.id);
        const newDocRef = doc(db, "chats", docRef.id);
        onSnapshot(newDocRef, (snapshot) => {
          const updatedData = snapshot.data();
          if (updatedData) {
            setMessages(updatedData.messages);
          }
        });
      }
    } catch (error) {
      console.error("Error processing document:", error);
      setLoading(false);
    }
  };

  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      createChatDocument();
      ref.current = false;
    }
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const generateChatByAI = async () => {
    try {
      if (!message) setMessage("Generate chat with AI");
      setLoading(true);
      let { data } = await axios.post(
        "https://054b-103-111-210-26.ngrok-free.app/api/v1/chats/recommendation",
        messages
      );
      console.log(data);
      setMessage(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const [isMinimize, setIsMinimize] = useState(false);
  const [isOpenDrawer, setIsOPenDrawer] = useState(false);

  console.log({ destinationSelected });
  return (
    <>
      {messages?.length > 3 && !destinationSelected && (
        <div className="max-w-[420px] absolute top-[80px] left-1/2 transform -translate-x-1/2">
          <div className="w-[320px] flex justify-center">
            <Button
              className="bg-green-500 text-white w-full py-2 rounded mb-2"
              onClick={() => {
                router.push("/itenary");
              }}
            >
              Set the itinerary
            </Button>
          </div>
        </div>
      )}

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

      <section className="mx-auto max-w-[430px] py-3">
        <div className="flex flex-col h-screen">
          <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
            <h2>Jennie</h2>
            <button className="text-2xl">•••</button>
          </div>
          <div className="flex-1 p-4 overflow-y-scroll bg-gray-100">
            <div className="flex flex-col gap-4 items-start">
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor:
                      message.email === "ayusudi.abcd@gmail.com"
                        ? "white"
                        : "rgb(236 253 245)",
                  }}
                  className={` p-4 flex border border-gray-200 rounded-lg ${
                    message.email === "ayusudi.abcd@gmail.com"
                      ? "self-start"
                      : "self-end"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
          </div>
          {destinationSelected && (
            <div className="w-full flex justify-center bg-gray-100">
              <div className="w-[320px] flex justify-center">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button
                      className="bg-green-500 text-white w-full py-2 rounded mb-2"
                      onClick={() => {
                        setIsOPenDrawer(!isOpenDrawer);
                      }}
                    >
                      Accept & propose agenda
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Schedule</DrawerTitle>
                      </DrawerHeader>
                      <div className="p-4 pb-0"></div>
                      <DrawerFooter>
                        <Button
                          className="bg-green-500 text-white w-full py-2 rounded mb-2"
                          onClick={() => {
                            setIsOPenDrawer(!isOpenDrawer);
                          }}
                        >
                          Accept & propose agenda
                        </Button>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          )}
          <div className="flex p-4 border-t border-gray-200 gap-1.5">
            <button onClick={generateChatByAI}>
              <Image width="36" height="36" src={image} />
            </button>
            <input
              type="text"
              placeholder="gimana kalo kita jalan?"
              className={
                !loading
                  ? `flex-1 p-2 border rounded-lg mr-4 cursor pointer`
                  : "flex-1 p-2 border rounded-lg mr-4 inputField inputBlinking cursor pointer"
              }
              value={message}
              onChange={handleInputChange}
            />
            <button
              className="bg-green-500 text-white p-2 rounded-lg"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
