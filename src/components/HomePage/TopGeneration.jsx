import React from "react";
import PhotoCards from "../glary/PhotoCards";

const TopGeneration = async () => {
  const res = await fetch(
    "https://pixgen-nextjs-project-lac.vercel.app/data.json",
  );
  const photos = await res.json();

  console.log(photos, " photos Data ");

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold ">
        Top Generation : {photos.length}
      </h1>
      <div className="grid grid-cols-4 items-center justify-center gap-5 py-5">
        {photos.slice(0,8).map((photo) => (
          <PhotoCards key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGeneration;
