export const url: string =
  "https://lobster-app-2fa5v.ondigitalocean.app/graphql";

export const ValueFormated = (valor: number) => {
  const valueFormated = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valueFormated;
};
