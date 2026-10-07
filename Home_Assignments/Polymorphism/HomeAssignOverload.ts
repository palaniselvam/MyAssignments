

class APIClient {
    // 1. Overload Signatures (No function bodies)
    sendRequest(endpoint: string): void;
    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

    // 2. Implementation Signature (Handles both cases)
    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {
        if (requestBody !== undefined && requestStatus !== undefined) {
            // Logic for 3-argument call
            console.log(`Sending to ${endpoint} with body: ${requestBody} and status: ${requestStatus}`);
        } else {
            // Logic for 1-argument call
            console.log(`Sending to ${endpoint} without body`);
        }
    }
}

let objAPIClient =new APIClient()

objAPIClient.sendRequest("/users");

objAPIClient.sendRequest("/users/create", '{"name": "Palani Selvam"}', true);