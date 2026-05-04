const API_URL = "http://localhost:3001/products";

export async function get_products() {
  const response = await fetch(API_URL);

  if(!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return response.json();
}

export async function insert_product(data: any) {
    const response = await fetch(`${API_URL}/insertproducts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)  
    });
    if(!response.ok) {
        throw new Error("Erro ao inserir produto");
    }
    return response.json();
}
