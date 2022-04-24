/*
Mesh data extracted with: https://github.com/pmndrs/gltfjsx
*/

const meshData = {
  dumbdog: (nodes, materials) => {
    return {
      geometry: nodes["10680_Dog_v2"].geometry,
      material: materials._10680_Dog_v2default,
    };
  },
  longdog: (nodes, materials) => {
    return {
      geometry: nodes.tacskó17.geometry,
      material: materials["(null)"],
    };
  },
  foldydog: (nodes, materials) => {
    return {
      geometry: nodes["uploads_files_2822734_pose+pup"].geometry,
      material: materials["Default OBJ"],
    };
  },
};

export default meshData;
