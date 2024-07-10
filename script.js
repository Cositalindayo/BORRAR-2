var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//cessationhamster.com/6c/9c/ca/6c9cca2344310fc5890c46b7c2e6c2ca.js';

script.onload = function () {
  console.log('Script loaded successfully.');
};

script.onerror = function () {
  console.error('Error loading script.');
};

// Agregar el elemento <script> al final del body
document.body.appendChild(script);






// Array con URLs de los videos
const videos = [

  "https://framerusercontent.com/assets/blrSI3UyuWGhxhqKG8orgBZNrsE.mp4",
  "https://framerusercontent.com/assets/rf4gJJx8IbU8hxSabhAB3ySrlNE.mp4",
  "https://framerusercontent.com/assets/pZvjMqp4OXq1J4OyZMg2hVrchsc.mp4",
  "https://framerusercontent.com/assets/LVwCB7N7C9RBA24W4L7yr4kglC0.mp4",
  "https://framerusercontent.com/assets/iNwPUtvH82dJZ9ExYqHxxGi4gdA.mp4",
  "https://framerusercontent.com/assets/q7qKju9kE3JTw28e9zhTnxKJplo.mp4",
  "https://framerusercontent.com/assets/Qv2cUh2kzAzSPeubKO5WaawnsPo.mp4",
  "https://framerusercontent.com/assets/theZAGdwYHJQWfi0pFsIBCogk90.mp4",
  "https://framerusercontent.com/assets/mLgemKQJNB3t4Vohgupkza0Yk.mp4",
  
];

// Función para obtener N elementos únicos al azar de un array
function getRandomElements(arr, count) {
  let result = [];
  let taken = new Array(arr.length);
  if (count > arr.length)
    throw new RangeError("getRandomElements: more elements taken than available");
  while (count--) {
    let x = Math.floor(Math.random() * arr.length);
    result[count] = arr[x in taken ? taken[x] : x];
    taken[x] = --arr.length in taken ? taken[arr.length] : arr.length;
  }
  return result;
}

// Seleccionar 9 videos únicos al azar
const selectedVideos = getRandomElements(videos, 9);

// Asignar los videos a los elementos <video>
selectedVideos.forEach((videoSrc, index) => {
  const videoElement = document.getElementById(`randomVideo${index + 1}`);
  if (videoElement) {
    videoElement.src = videoSrc;
  }
});