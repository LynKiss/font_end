import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { roomList as defaultRooms } from "../data/adminData";

const RoomContext = createContext(null);
const STORAGE_KEY = "admin-room-list";

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState(() => {
    const savedRooms = localStorage.getItem(STORAGE_KEY);

    if (savedRooms) {
      try {
        return JSON.parse(savedRooms);
      } catch (error) {
        return defaultRooms;
      }
    }

    return defaultRooms;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
  }, [rooms]);

  const addRoom = (roomData) => {
    const normalizedType = roomData.typeRoom === "vip" ? "VIP" : "Thuong";

    const newRoom = {
      key: `room-${Date.now()}`,
      name: roomData.name,
      quantityBed: roomData.quantityBed,
      quantityPeople: roomData.quantityPeople,
      typeRoom: normalizedType,
      status: roomData.status || "Con phong",
      description: roomData.description || "",
      amenities: roomData.amenities || [],
    };

    setRooms((prev) => [newRoom, ...prev]);
  };

  const deleteRoom = (roomKey) => {
    setRooms((prev) => prev.filter((room) => room.key !== roomKey));
  };

  const updateRoom = (roomKey, roomData) => {
    setRooms((prev) =>
      prev.map((room) => {
        if (room.key !== roomKey) {
          return room;
        }

        return {
          ...room,
          name: roomData.name,
          quantityBed: roomData.quantityBed,
          quantityPeople: roomData.quantityPeople,
          typeRoom: roomData.typeRoom === "vip" ? "VIP" : "Thuong",
          status: roomData.status,
          description: roomData.description || "",
          amenities: roomData.amenities || [],
        };
      })
    );
  };

  const value = useMemo(
    () => ({
      rooms,
      addRoom,
      deleteRoom,
      updateRoom,
    }),
    [rooms]
  );

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}

function useRooms() {
  const context = useContext(RoomContext);

  if (!context) {
    throw new Error("useRooms must be used inside RoomProvider");
  }

  return context;
}

export { RoomProvider, useRooms };
