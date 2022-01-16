export const request = async () => {
  const response = await fetch( 'https://fakestoreapi.com/products' );
  return await response.json();

};