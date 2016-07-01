export function handleStatusCode (response){
    if (response.status !== 200) {
        throw new Error(response.status);
    }
    return response;
}