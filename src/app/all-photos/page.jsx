import PhotoCards from "@/components/glary/PhotoCards";
import Category from "@/components/HomePage/Category";
import React from "react";

const AllPhotoPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  console.log(category);

  const res = await fetch(
    "https://pixgen-nextjs-project-lac.vercel.app/data.json",
  );
  const photos = await res.json();

  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() == category.toLowerCase(),
      )
    : photos;

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Photos</h1>

      <Category />

      <div className="grid grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCards key={photo.id} photo={photo} />
        ))}
        {/* {photos.map((photo) => (
          <PhotoCards key={photo.id} photo={photo} />
        ))} */}
      </div>
    </div>
  );
};

export default AllPhotoPage;
