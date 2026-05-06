const API_URL = "http://localhost:3001/products";

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

export async function get_products() {
  const response = await fetch(API_URL);

  if(!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return response.json();
}

export async function get_products_id(id: string) {
    const response = await fetch(`${API_URL}/${id}`);

    if(!response.ok) {
        throw new Error("Erro ao buscar produto");
    }
    return response.json();
}

export async function delete_product(id: string) {
    const response = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
    });
    if(!response.ok) {
        throw new Error("Erro ao excluir produto");
    }
    return response.json();
}

export async function edit_product(id: string, data: any) {
    const response = await fetch(`${API_URL}/edit/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, ...data })  
    });
    if(!response.ok) {
        throw new Error("Erro ao editar produto");
    }
    return response.json();
}