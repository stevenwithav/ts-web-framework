import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.createUser({ name: 'Name', age: 40 });

const root = document.getElementById('root');
if (root) {
	const userEdit = new UserEdit(root, user);

	userEdit.render();

	console.log(userEdit);
} else {
	throw new Error('Root element not found');
}
