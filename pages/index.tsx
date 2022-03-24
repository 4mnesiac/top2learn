import { Button, Heading, Label } from "../components";


export default function Home() {
	return (
		<>
			<Heading tag="h1">Заголовок 1</Heading>
			<Button>Кнопа</Button>
			<Button apperance="ghost" arrow='right'>Кнопа 2</Button>
			<Label colorScheme='primary'>Photoshop</Label>
			<Label>Figma</Label>
			<Label colorScheme="discount">Discount</Label>
			<Label colorScheme="chip">Chip</Label>
		</>
	);
}
