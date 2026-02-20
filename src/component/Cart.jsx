import { videos } from "../data";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div
        className="max-w-7xl mx-auto grid gap-6 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover"/>
              {/* Duration overlay */}
              <span
                className="absolute bottom-2 right-2 bg-black text-white text-xs  px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>
            {/* Video Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">{video.channelName}</p>
              <p className="text-xs text-gray-500">
                {video.views.toLocaleString()} views • {video.uploadedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
