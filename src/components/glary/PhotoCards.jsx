import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoCards = ({ photo }) => {
  
const { id, imageUrl, title, category, likes, downloads } = photo;

  return (
    <div>
      <Card className="border rounded-xl">
        <div className="relative w-full aspect-square">
          <Image
            src={imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={photo.title}
            className="object-cover rounded-xl"
          />

          <Chip size="sm" className="absolute right-2 top-2">
            {category}
          </Chip>
        </div>

        <div>
          <h2 className="font-medium">{title}</h2>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <p>
              <FaHeart />
            </p>
            <p>{likes}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex items-center gap-2">
            <p>
              <BiDownload />
            </p>
            <p>{downloads}</p>
          </div>
        </div>

        <Link href={`/all-photos/${photo.id}`}>
         
          <Button variant="outline" className={"w-full"}>
            View
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default PhotoCards;
