export const importImages = (requireImage) => {
  const imagePaths = {};
  requireImage
    .keys()
    .map(fileInfo => 
      imagePaths[fileInfo.replace('./', '')] = requireImage(fileInfo)
    );
  return imagePaths;
}
