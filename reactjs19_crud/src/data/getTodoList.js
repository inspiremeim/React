export async function getTodoList() {
  try {
    const response = await fetch("https://dummyjson.com/todos?limit=0");
    if (!response.ok) {
      return [];
    }

    const jsonData = await response.json();
    return jsonData.todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
}
