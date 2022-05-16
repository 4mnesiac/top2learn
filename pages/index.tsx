import { Button, Heading, Chip, Typography } from "../components";

export default function Home() {
	return (
		<>
			<Heading>Наш UI самый лучший</Heading>
			<Heading tag="h2">Наш UI самый лучший дважды</Heading>
			<Heading tag="h3">Наш UI самый лучший трижды</Heading>
			<Button>Кнопа</Button>
			<Button apperance="ghost" arrow='right'>Кнопа 2</Button>
			<Chip color='primary' size='m'>Photoshop</Chip>
			<Chip color="ghost" size='m'>Ghost</Chip>
			<Chip>Figma</Chip>
			<Chip color="error">Error</Chip>
			<Chip color="success">Success</Chip>
			<Typography size='m'>Студенты освоят не только hard skills,
				необходимые для работы веб-дизайнером, но и soft skills — навыки,
				которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами.
				Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Typography>
		</>
	);
}
