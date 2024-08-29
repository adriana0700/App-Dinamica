"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

export default function Users() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div>
        <table>
        <thead>
            <tr>
            <td>Nombre</td>
            <td>Email</td>
            <td>Telefono</td>
            <td>Ver Detalle</td>
            </tr>
        </thead>
        <tbody>
            {user.map((user) => (
            <tr key={user.id}>
                
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link href={`/users/${user.id}`} legacyBehavior>
                
                    <a>
                      <Image
                        src="/ver-mas.png" // Ruta absoluta desde la carpeta 'public'
                        alt="Ver más"
                        width={24} // Ajusta el tamaño según sea necesario
                        height={24} // Ajusta el tamaño según sea necesario
                      />
                    </a>
                  </Link>
                </td>

            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
}
