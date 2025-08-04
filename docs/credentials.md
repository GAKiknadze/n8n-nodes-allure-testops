# Credentials

## Prerequisites
- An `Allure TestOps` account with administrator or developer privileges.
- Access to an n8n instance (local or cloud).
- Basic knowledge of working with APIs and n8n workflows.

## Step 1: Obtaining an API Token from Allure TestOps

1. Log in to `Allure TestOps` using your account.
2. In the top-right corner, go to `Profile` -> `API tokens`.
3. Click the `+ Token` button.
4. Enter a `Token name` (e.g., n8n-integration).
5. Click `Create`.
6. Copy the generated token.

> ⚠️ Important! The token is not saved in Allure TestOps. If you close the window, you will have to create it again.

## Step 2: Setting Up Credentials in n8n

1. Open the n8n interface.
2. Navigate to the Credentials section (top-right corner).
3. Click the `Create Credential` button.
4. Select the authentication type: `Allure TestOps API`.
5. Fill in the fields:
   - `API Token`: Paste the copied token from Allure TestOps.
   - `Server`: Enter the URL of your Allure TestOps instance (e.g., `https://sandbox.testops.cloud`).
6. Click the `Save` button.

> After clicking `Save`, you should see a green message: `Connection tested successfully`.

## Possible Errors and Solutions

- `401 Unauthorized`: Verify the correctness of the token and Base URL. Ensure the token is active.
- `403 Forbidden`: Check that the user has the required permissions in Allure TestOps.
- `404 Not Found`: Ensure the endpoint is correct and does not end with a `/`.
