

const products = [
  { id: "1", name: "SENSOR INTERIOR", price: 4200, category: "Alarmas" ,img:"Sensor Interior.png"},
  { id: "2", name: "MODULO GSM", price: 25000, category: "Alarmas", img:"Modulo GSM.png" },
  { id: "3", name: "CAMARA IP", price: 17800, category: "Video",img:"Camara Ip.png" },
  { id: "4", name: "CAMARA EXTERIOR WIFI", price: 18000, category: "phones",img:"Camara Exterior Wifi.png" },
  { id: "5", name: "SIRENA COMUNITARIA", price: 12000, category: "Incendio",img:"Sirena Comunitaria.png" },
  { id: "6", name: "KIT CENTRAL DSC", price: 183000, category: "Accesos",img:"Kit Central DSC.png" },
  { id: "7", name: "CABLE ALARMA", price: 54, category: "Complementos",img:"Cable Alarma.png" },
  { id: "8", name: "CENTRAL SURI 500", price: 32000, category: "Alarmas",img:"Central Suri 500.png" },
  { id: "9", name: "BATERIA 7A", price: 7800, category: "Complementos",img:"Bateria 7A.png" },
];
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("No existe el producto");
      }
    }, 1000);
  });
};
export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;
      resolve(productsFiltered);
    }, 1000);
  });
};
