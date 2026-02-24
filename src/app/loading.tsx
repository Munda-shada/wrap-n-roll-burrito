export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-5rem)] w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-100 border-t-orange-600" />
      </div>
    </div>
  );
}