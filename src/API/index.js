const API_URL = 'https://fakestoreapi.com'

export async function fetchAllProducts() {
  try {
    const response = await fetch(
      `${API_URL}/products`
    );
    const result = await response.json();
   return result;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(
      `${API_URL}/products/${id}`
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}