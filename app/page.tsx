import Link from "next/link";
import AddAppointment from "./users/components/Appointments";

export default function () {
  return (
    <main>
      <h1>Practice</h1>
      <AddAppointment></AddAppointment>
      <Link href="/users">Users</Link>
      </main>
  )
}