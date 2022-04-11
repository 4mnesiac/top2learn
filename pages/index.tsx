import { Button, Heading, Chip, Typography } from "../components";


export default function Home() {
	return (
		<>
			<Heading tag="h1">Наш UI самый лучший</Heading>
			<Button>Кнопа</Button>
			<Button apperance="ghost" arrow='right'>Кнопа 2</Button>
			<Chip color='primary'>Photoshop</Chip>
			<Chip>Figma</Chip>
			<Chip color="ghost" size='m'>Ghost</Chip>
			<Chip color="error">Error</Chip>
			<Chip color="success" size='m'>Success</Chip>
			<Typography size='m'>Студенты освоят не только hard skills,
				необходимые для работы веб-дизайнером, но и soft skills — навыки,
				которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
				Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Typography>
		</>
	);
}
