import Link from 'next/link'
import { Message } from "@/components/form-message";

export default function NotFound(props: {
  searchParams: Promise<Message>;
}) {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource!</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}