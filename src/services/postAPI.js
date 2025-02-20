export const postAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error('Network response is not okay');
    }
    const data = await response.json();
    return data;
}