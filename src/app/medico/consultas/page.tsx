import { Options } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import PageComponent from "./pageComponent";
import { Client } from "@/lib/rest/client";


export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const session = await getServerSession(Options);
  const nombres = searchParams?.nombres;
  const apellidos = searchParams?.apellidos;

  let data = null;

  if (nombres && apellidos) {
    data = await Client.POST("/medico/search/paciente", {
      body:{
        nombres,
        apellidos
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.user.accessToken}`
      }
    })
  }

  return (
    <PageComponent data={data?.data?.consultas} />
  )
}