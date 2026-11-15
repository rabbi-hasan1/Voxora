
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          404 - Not Found
        </h2>

        <p className="mt-4 text-gray-500">
          Could not find the requested resource.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
