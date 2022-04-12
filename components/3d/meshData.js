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
};

export default meshData;
 