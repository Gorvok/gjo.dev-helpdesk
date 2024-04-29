import TicketList from "@/app/tickets/TicketList";
import {Suspense} from "react";
import Loading from "@/app/loading";
import Link from "next/link";

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets.</small></p>
                </div>
                <Link href="/tickets/create" className="ml-auto">
                    <button className="btn-primary">New Ticket</button>
                </Link>
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList/>
            </Suspense>
        </main>
    )
}
