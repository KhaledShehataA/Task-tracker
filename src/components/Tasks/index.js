import styles from './styles.css';
import { Task } from '../Task/index';

export const Tasks = ({ tasks }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</>
	);
};
