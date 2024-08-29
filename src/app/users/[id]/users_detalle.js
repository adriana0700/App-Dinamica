"use client";

import { useParams } from 'next/navigation'; // Importa useParams desde next/navigation
import React, { useEffect, useState } from "react";


export default function DetalleUsers() {
  const [user, setUser] = useState(null);
  const { id } = useParams(); // Obtiene el ID desde useParams

  useEffect(() => {
    if (!id) return; // Verifica que el ID esté disponible

    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      setUser(data);
    }

    fetchData();
  }, [id]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del Usuario</h1>
      <table>
        
          <tr>
            <td ><strong>Nombre:</strong></td>
            <td style={{textAlign: "left", marginLeft: "20px"}}>{user.name}</td>
          </tr>
          <tr>
            <td><strong>Usuario:</strong></td>
            <td style={{textAlign: "left", marginLeft: "20px"}}>{user.username}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td style={{textAlign: "left", marginLeft: "20px"}}>{user.email}</td>
          </tr>
          
          <tr>
            <td><strong>Telefono: </strong></td>
            <td style={{textAlign: "left", marginLeft: "20px"}}>{user.phone}</td>
          </tr>
          <tr>
            <td><strong>Sitio Web: </strong></td>
            <td style={{textAlign: "left", marginLeft: "20px"}}>{user.website}</td>
          </tr>
          <tr>
            <td><strong>Dirección: </strong></td>
            <td style={{textAlign: "left", marginLeft: "20px"}}>{user.address.street}, {user.address.city}</td>
          </tr>
          <tr>
            <td><strong>Compañía:  </strong></td>
            <td style={{textAlign: "left", marginLeft: "20px"}}>{user.company.name}</td>
          </tr>
          
      </table>
    </div>
  );
}
