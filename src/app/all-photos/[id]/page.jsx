import { Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotosDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://pixgen-nextjs-project-lac.vercel.app/data.json",
  );
  const photos = await res.json();

  const detailsPhoto = photos.find((p) => p.id == id);

  console.log(detailsPhoto, " detailsPhoto");

  return (
    <div className="container mx-auto py-10">
      <h1>Photo Details : {id}</h1>
      <div className="bg-gray-400 px-5 py-5 rounded-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div>
              <Image
                src={detailsPhoto.imageUrl}
                alt={detailsPhoto.title}
                className="w-full rounded-2xl shadow-lg"
                width={500}
                height={500}
              />
            </div>

            {/* Info */}
            <div>
              {/* Title */}
              <h1 className="text-3xl font-bold">{detailsPhoto.title}</h1>

              {/* Category */}
              <span className="inline-block mt-2 bg-gray-200 text-sm px-3 py-1 rounded-full">
                {detailsPhoto.category}
              </span>

              {/* Stats */}
              <div className="flex gap-5 py-2">
                <div className="flex items-center gap-2">
                  <p>
                    <FaHeart />
                  </p>
                  <p>{detailsPhoto.likes}</p>
                </div>

                <Separator orientation="vertical" />

                <div className="flex items-center gap-2">
                  <p>
                    <BiDownload />
                  </p>
                  <p>{detailsPhoto.downloads}</p>
                </div>
              </div>

              {/* Prompt */}
              <div className="mt-6">
                <h2 className="font-semibold mb-2">Prompt</h2>
                <p className="bg-gray-100 p-3 rounded-lg text-sm">
                  {detailsPhoto.prompt}
                </p>
              </div>

              {/* Details */}
              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <strong>Model:</strong> {detailsPhoto.model}
                </p>
                <p>
                  <strong>Resolution:</strong> {detailsPhoto.resolution}
                </p>
                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(detailsPhoto.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {detailsPhoto.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-3 py-1 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="mt-8 w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
                Download Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosDetailsPage;
