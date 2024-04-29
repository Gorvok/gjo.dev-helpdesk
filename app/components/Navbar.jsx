import Link from "next/link";
import Image from "next/image";
import Logo from './gjo-dev-logo.png'

export default function Navbar() {

    return (
        <nav>
            <Image
                src={Logo}
                alt='GJO.Dev Helpdesk Logo'
                width={200}
                quality={100}
                placeholder='blur'
                />
            {/*<h1>GJO.Dev Helpdesk</h1>*/}
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/tickets/create">Create</Link>
        </nav>
    )
}