// FOR IMAGES
// compress them
// crop them to a certain size

import LazyImage from "../components/LazyImage";

// You can use Intersection Observer API
// it detecsts the visibility of an HTML element

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2686914/pexels-photo-2686914.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/755834/pexels-photo-755834.jpeg?",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/3257811/pexels-photo-3257811.jpeg?",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/8985189/pexels-photo-8985189.jpeg?",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/3643714/pexels-photo-3643714.jpeg?",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/15445009/pexels-photo-15445009/free-photo-of-kitten-in-the-window-sill.jpeg?",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <LazyImage
          id={image.id}
          key={image.id}
          width="800"
          height="1000"
          src={image.url}
        />
      ))}
    </div>
  );
};

export default Gallery;
