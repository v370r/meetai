"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const {
      data: session,
  } = authClient.useSession()



  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password,
    }, {
        // onRequest: () => {
        //     //show loading
        // },
        onSuccess: () => {
            //redirect to the dashboard or sign in page
            window.alert("success");
        },
        onError: () => {
            // display the error message
            window.alert("Something went wrong");
        },
    });
  };

    const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
        // onRequest: () => {
        //     //show loading
        // },
        onSuccess: () => {
            //redirect to the dashboard or sign in page
            window.alert("success");
        },
        onError: () => {
            // display the error message
            window.alert("Something went wrong");
        },
    });
  };

  if(session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    )
  }

  return (
    <><div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

      <Button onClick={onSubmit}>
        Create user
      </Button>
    </div>
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <Button onClick={onLogin}>
          Log in
        </Button>
      </div></>
  );
}
