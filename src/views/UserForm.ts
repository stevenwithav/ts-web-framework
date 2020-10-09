import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-user': this.onSaveClick,
		};
	}

	onSaveClick = (): void => {
		this.model.save();
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;

			this.model.set({ name });
		}
	};

	template(): string {
		return `
      <div>
        <input class="name" placeholder="${this.model.get('name')}"/>
        <button class="set-name">Update name</button>
        <button class="set-age">Set random age</button>
        <button class="save-user">Save</button>
      </div>
    `;
	}
}
