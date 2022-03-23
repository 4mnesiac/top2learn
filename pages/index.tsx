import { Button, Heading } from "../components";


export default function Home() {
  return (
    <>
      <Heading tag="h1">Заголовок 1</Heading>
      <Button>Кнопа</Button>
      <Button apperance="ghost" arrow='right'>Кнопа 2</Button>
    </>
  );
}
