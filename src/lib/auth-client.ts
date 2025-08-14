import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
})

// Example placeholder for authClient to prevent import errors
// export const authClient = {
//   signUp: {
//     email: (
//       { email, name, password }: { email: string; name: string; password: string },
//       { onRequest, onSuccess, onError }: { onRequest: () => void; onSuccess: () => void; onError: () => void }
//     ) => {
//       onRequest();
//       // Simulate async signup
//       setTimeout(() => {
//         if (email && name && password) {
//           onSuccess();
//         } else {
//           onError();
//         }
//       }, 500);
//     },
//   },
// };