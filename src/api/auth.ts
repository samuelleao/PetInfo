interface signInRequestProps {
  email: string;
  name: string;
}

const delayAPI = (amount: number = 800) =>
  new Promise<void>((resolve) => setTimeout(resolve, amount));

export default async function signInRequest(data: signInRequestProps) {
  delayAPI();

  return {
    token: 11234,
    user: {
      name: "Samuel Leão",
      email: "samuelleaoui@gmail.com",
    },
  };
}
