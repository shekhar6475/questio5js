function loadImage(imagePath) {
 return new Promise((resolve, reject) => {
   const image = new Image();

   image.onload = () => {
     // Image loaded successfully
     resolve(image);
   };

   image.onerror = () => {
     // Error loading the image
     reject(new Error('Failed to load image'));
   };

   // Set the source of the image to the provided imagePath
   image.src = imagePath;
 });
}

// Example usage:
const imageUrl = 'path/to/your/image.jpg';

loadImage(imageUrl)
 .then((image) => {
   // Append the loaded image to a DOM element
   const container = document.getElementById('image-container');
   container.appendChild(image);
 })
 .catch((error) => {
   console.error(error);
 });
