import { useEffect, useState } from "react";
import {io} from "socket.io-client";

export function useNotifications() {
  const socket = io("http://54.145.127.250:6000");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Manejar mensajes recibidos de otros usuarios
    setLoading(true);
    socket.on("receiveData", (data) => {
      console.log(data);
      setData(data);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
